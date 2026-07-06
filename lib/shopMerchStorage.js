import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const uploadsFolderSegments = ["public", "uploads", "shop-merch"];
const uploadsHrefBase = "/uploads/shop-merch";

export function normalizeMerchPayload(value) {
  const productOverrides =
    value && typeof value.productOverrides === "object" && !Array.isArray(value.productOverrides)
      ? value.productOverrides
      : {};
  const customProducts = Array.isArray(value?.customProducts) ? value.customProducts : [];

  return { productOverrides, customProducts };
}

export function isInlineImageData(value) {
  return typeof value === "string" && value.startsWith("data:image/");
}

function getMerchConfigPath(rootDir) {
  return path.join(rootDir, "data", "shopMerchOverrides.json");
}

function getUploadsDirectory(rootDir) {
  return path.join(rootDir, ...uploadsFolderSegments);
}

function getMimeExtension(mimeType) {
  switch (mimeType) {
    case "image/jpeg":
    case "image/jpg":
      return "jpg";
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/gif":
      return "gif";
    case "image/avif":
      return "avif";
    case "image/svg+xml":
      return "svg";
    default:
      return "png";
  }
}

async function writeImageBuffer(buffer, mimeType, rootDir) {
  const uploadsDirectory = getUploadsDirectory(rootDir);
  await mkdir(uploadsDirectory, { recursive: true });

  const filename = `${Date.now()}-${randomUUID()}.${getMimeExtension(mimeType)}`;
  await writeFile(path.join(uploadsDirectory, filename), buffer);

  return `${uploadsHrefBase}/${filename}`;
}

export async function persistUploadedFile(file, rootDir = process.cwd()) {
  if (!file || typeof file.arrayBuffer !== "function") {
    throw new Error("No upload file was provided.");
  }

  if (typeof file.type !== "string" || !file.type.startsWith("image/")) {
    throw new Error("Only image uploads are supported for shop merch.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  return writeImageBuffer(buffer, file.type, rootDir);
}

export async function persistInlineImageData(dataUrl, rootDir = process.cwd()) {
  const match = /^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/u.exec(dataUrl);

  if (!match) {
    return dataUrl;
  }

  const [, mimeType, base64Payload] = match;
  const buffer = Buffer.from(base64Payload, "base64");
  return writeImageBuffer(buffer, mimeType, rootDir);
}

async function sanitizeImageList(images, rootDir) {
  if (!Array.isArray(images)) {
    return { images, changed: false };
  }

  let changed = false;
  const nextImages = [];

  for (const image of images) {
    if (isInlineImageData(image)) {
      nextImages.push(await persistInlineImageData(image, rootDir));
      changed = true;
      continue;
    }

    nextImages.push(image);
  }

  return { images: nextImages, changed };
}

async function sanitizeColorOptions(colorOptions, rootDir) {
  if (!Array.isArray(colorOptions)) {
    return { colorOptions, changed: false };
  }

  let changed = false;
  const nextColorOptions = [];

  for (const option of colorOptions) {
    let nextOption = option;
    let optionChanged = false;

    if (isInlineImageData(option?.image)) {
      nextOption = {
        ...nextOption,
        image: await persistInlineImageData(option.image, rootDir),
      };
      optionChanged = true;
    }

    const { images: nextImages, changed: imagesChanged } = await sanitizeImageList(option?.images, rootDir);
    if (imagesChanged) {
      nextOption = {
        ...nextOption,
        images: nextImages,
      };
      optionChanged = true;
    }

    nextColorOptions.push(nextOption);
    changed ||= optionChanged;
  }

  return { colorOptions: nextColorOptions, changed };
}

async function sanitizeProductRecord(record, rootDir) {
  let nextRecord = { ...record };
  let changed = false;

  if (isInlineImageData(nextRecord.image)) {
    nextRecord.image = await persistInlineImageData(nextRecord.image, rootDir);
    changed = true;
  }

  const { images: nextImages, changed: imagesChanged } = await sanitizeImageList(nextRecord.images, rootDir);
  if (imagesChanged) {
    nextRecord.images = nextImages;
    changed = true;
  }

  const { colorOptions: nextColorOptions, changed: colorOptionsChanged } = await sanitizeColorOptions(
    nextRecord.colorOptions,
    rootDir,
  );
  if (colorOptionsChanged) {
    nextRecord.colorOptions = nextColorOptions;
    changed = true;
  }

  return { record: nextRecord, changed };
}

export async function sanitizeMerchPayload(value, rootDir = process.cwd()) {
  const normalized = normalizeMerchPayload(value);
  let changed = false;
  const nextProductOverrides = {};
  const nextCustomProducts = [];

  for (const [productId, record] of Object.entries(normalized.productOverrides)) {
    const { record: nextRecord, changed: recordChanged } = await sanitizeProductRecord(record, rootDir);
    nextProductOverrides[productId] = nextRecord;
    changed ||= recordChanged;
  }

  for (const product of normalized.customProducts) {
    const { record: nextRecord, changed: recordChanged } = await sanitizeProductRecord(product, rootDir);
    nextCustomProducts.push(nextRecord);
    changed ||= recordChanged;
  }

  return {
    payload: {
      productOverrides: nextProductOverrides,
      customProducts: nextCustomProducts,
    },
    changed,
  };
}

export async function readMerchConfig(rootDir = process.cwd()) {
  try {
    const raw = await readFile(getMerchConfigPath(rootDir), "utf8");
    const { payload, changed } = await sanitizeMerchPayload(JSON.parse(raw), rootDir);

    if (changed) {
      await writeFile(getMerchConfigPath(rootDir), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    }

    return payload;
  } catch {
    return { productOverrides: {}, customProducts: [] };
  }
}

export async function writeMerchConfig(value, rootDir = process.cwd()) {
  const { payload } = await sanitizeMerchPayload(value, rootDir);
  await writeFile(getMerchConfigPath(rootDir), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  return payload;
}
