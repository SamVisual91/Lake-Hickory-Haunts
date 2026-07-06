"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { characterDetails, getCharacterSlug, slugifyCharacterName } from "../data/characterDetails";

function StatIcon({ type }) {
  if (type === "weapon") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M9 22c1.8-3.8 5-7 8.8-8.8M8.5 14.5l3.3-5.8 4.7-.5-1.2 4.5-5.8 3.3Zm9.7 6.7 5.8-3.3 1.2-4.5-4.7.5-3.3 5.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "zone") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 4 25 9v6c0 6.2-3.7 10.5-9 13-5.3-2.5-9-6.8-9-13V9l9-5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "sound") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M7 19h5l7 6V7l-7 6H7v6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path
          d="M23 12c1.8 1.3 2.8 3 2.8 4.9 0 1.9-1 3.6-2.8 4.9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.1" />
        <path
          d="M16 10v7l4 2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "skull") {
    return <span className="character-detail-stat-skull" aria-hidden="true" />;
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16 4 27 11v9L16 28 5 20v-9L16 4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="m13 14 3 3 4-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m11 9 8 5-8 5z" fill="currentColor" />
    </svg>
  );
}

function NavChevron({ direction = "right" }) {
  const rotation = direction === "left" ? "rotate(180 16 16)" : undefined;

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <g transform={rotation}>
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M13 10.5 19 16l-6 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

const defaultAudioProfile = { start: 740, end: 180, duration: 0.42, gain: 0.062, type: "sawtooth" };
const characterAdminStorageKey = "lhh-character-admin-enabled";
const characterOverrideStorageKey = "lhh-character-overrides";
const characterIdentityPreviewStorageKey = "lhh-character-pending-identity";
const characterOverrideDbName = "lhh-character-admin-db";
const characterOverrideStoreName = "character-overrides";
const characterOverrideRecordKey = "all-overrides";
const fallbackCharacterImage = "/assets/characters-carousel-1.png";

function toRenderableImageSrc(src) {
  if (typeof src !== "string") {
    return null;
  }

  const trimmedSrc = src.trim();

  if (!trimmedSrc || /^[a-zA-Z]:[\\/]/.test(trimmedSrc)) {
    return null;
  }

  if (
    trimmedSrc.startsWith("/") ||
    trimmedSrc.startsWith("data:image/") ||
    trimmedSrc.startsWith("blob:") ||
    trimmedSrc.startsWith("http://") ||
    trimmedSrc.startsWith("https://")
  ) {
    return trimmedSrc.replace(/\\/g, "/");
  }

  if (trimmedSrc.startsWith("assets/")) {
    return `/${trimmedSrc.replace(/\\/g, "/")}`;
  }

  if (trimmedSrc.startsWith("./assets/")) {
    return `/${trimmedSrc.slice(2).replace(/\\/g, "/")}`;
  }

  return null;
}

function normalizeCharacterImageSrc(src, fallback = fallbackCharacterImage) {
  return toRenderableImageSrc(src) ?? toRenderableImageSrc(fallback) ?? fallbackCharacterImage;
}

function CharacterArt({ src, alt, fallback = fallbackCharacterImage, loading = "lazy" }) {
  return <img src={normalizeCharacterImageSrc(src, fallback)} alt={alt} loading={loading} />;
}

function stripStaleIdentityOverrides(character, overrideValue) {
  if (!character || !overrideValue || typeof overrideValue !== "object") {
    return { override: overrideValue, changed: false };
  }

  const nextOverride = { ...overrideValue };
  let changed = false;

  ["name", "subtitle"].forEach((field) => {
    if (field in nextOverride && nextOverride[field] !== character[field]) {
      delete nextOverride[field];
      changed = true;
    }
  });

  return { override: nextOverride, changed };
}

function migrateCharacterOverrides(rawOverrides) {
  const nextOverrides = { ...(rawOverrides ?? {}) };
  let changed = false;

  Object.entries(rawOverrides ?? {}).forEach(([overrideKey, overrideValue]) => {
    if (!overrideValue || typeof overrideValue !== "object" || typeof overrideValue.name !== "string") {
      return;
    }

    const sourceCharacter = characterDetails.find((entry) => entry.id === overrideKey);
    const sourceSlug = sourceCharacter ? getCharacterSlug(sourceCharacter) : "";
    const overrideSlug = slugifyCharacterName(overrideValue.name);

    if (!overrideSlug || overrideSlug === sourceSlug) {
      return;
    }

    const targetCharacter = characterDetails.find((entry) => getCharacterSlug(entry) === overrideSlug);

    if (!targetCharacter || targetCharacter.id === overrideKey) {
      return;
    }

    const { override: sanitizedTargetOverride } = stripStaleIdentityOverrides(targetCharacter, {
      ...overrideValue,
      ...(nextOverrides[targetCharacter.id] ?? {}),
    });

    nextOverrides[targetCharacter.id] = sanitizedTargetOverride;
    delete nextOverrides[overrideKey];
    changed = true;
  });

  Object.entries(nextOverrides).forEach(([overrideKey, overrideValue]) => {
    const sourceCharacter = characterDetails.find((entry) => entry.id === overrideKey);
    const { override: sanitizedOverride, changed: identityChanged } = stripStaleIdentityOverrides(
      sourceCharacter,
      overrideValue,
    );

    if (identityChanged) {
      nextOverrides[overrideKey] = sanitizedOverride;
      changed = true;
    }
  });

  return {
    overrides: nextOverrides,
    changed,
  };
}

function normalizeIdentityPreview(previewValue) {
  if (!previewValue || typeof previewValue !== "object") {
    return null;
  }

  const nextPreview = {};

  ["name", "subtitle"].forEach((field) => {
    if (typeof previewValue[field] !== "string") {
      return;
    }

    const trimmedValue = previewValue[field].trim();

    if (trimmedValue) {
      nextPreview[field] = trimmedValue;
    }
  });

  return Object.keys(nextPreview).length > 0 ? nextPreview : null;
}

function readJsonStorage(key, fallbackValue = {}) {
  if (typeof window === "undefined") {
    return fallbackValue;
  }

  try {
    return JSON.parse(window.localStorage.getItem(key) ?? JSON.stringify(fallbackValue));
  } catch {
    return fallbackValue;
  }
}

function openCharacterOverrideDb() {
  if (typeof window === "undefined" || !("indexedDB" in window)) {
    return Promise.resolve(null);
  }

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(characterOverrideDbName, 1);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(characterOverrideStoreName)) {
        database.createObjectStore(characterOverrideStoreName);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readCharacterOverrides() {
  if (typeof window === "undefined") {
    return {};
  }

  const legacyOverrides = readJsonStorage(characterOverrideStorageKey, {});

  try {
    const database = await openCharacterOverrideDb();

    if (!database) {
      return legacyOverrides;
    }

    const storedOverrides = await new Promise((resolve, reject) => {
      const transaction = database.transaction(characterOverrideStoreName, "readonly");
      const store = transaction.objectStore(characterOverrideStoreName);
      const request = store.get(characterOverrideRecordKey);

      request.onsuccess = () => resolve(request.result ?? {});
      request.onerror = () => reject(request.error);
    });

    const mergedOverrides =
      legacyOverrides && Object.keys(legacyOverrides).length > 0
        ? { ...(storedOverrides ?? {}), ...legacyOverrides }
        : storedOverrides ?? {};

    if (legacyOverrides && Object.keys(legacyOverrides).length > 0) {
      await writeCharacterOverrides(mergedOverrides);
      window.localStorage.removeItem(characterOverrideStorageKey);
    }

    return mergedOverrides;
  } catch {
    return legacyOverrides;
  }
}

async function writeCharacterOverrides(nextOverrides) {
  if (typeof window === "undefined") {
    return;
  }

  const database = await openCharacterOverrideDb();

  if (!database) {
    window.localStorage.setItem(characterOverrideStorageKey, JSON.stringify(nextOverrides));
    return;
  }

  await new Promise((resolve, reject) => {
    const transaction = database.transaction(characterOverrideStoreName, "readwrite");
    const store = transaction.objectStore(characterOverrideStoreName);
    const request = store.put(nextOverrides, characterOverrideRecordKey);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });

  window.localStorage.removeItem(characterOverrideStorageKey);
}

export function CharacterDetailSection({
  character,
  previousCharacter,
  nextCharacter,
  backHref = "/characters",
  previousHref,
  nextHref,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const heroUploadRef = useRef(null);
  const galleryUploadRefs = useRef({});
  const galleryBatchUploadRef = useRef(null);
  const [adminEnabled, setAdminEnabled] = useState(false);
  const [allCharacterOverrides, setAllCharacterOverrides] = useState({});
  const [allIdentityPreviews, setAllIdentityPreviews] = useState({});
  const [characterOverride, setCharacterOverride] = useState({});
  const [isBakingIdentity, setIsBakingIdentity] = useState(false);
  const [identityDraft, setIdentityDraft] = useState({
    name: character.name ?? "",
    subtitle: character.subtitle ?? "",
  });
  const [galleryDrafts, setGalleryDrafts] = useState([]);
  const characterIdentityPreview = adminEnabled ? allIdentityPreviews[character.id] ?? {} : {};
  const activeCharacter = useMemo(
    () => ({
      ...character,
      ...characterIdentityPreview,
      ...characterOverride,
      gallery: characterOverride.gallery ?? character.gallery,
    }),
    [character, characterIdentityPreview, characterOverride],
  );
  const activePreviousCharacter = useMemo(
    () =>
      previousCharacter
        ? {
            ...previousCharacter,
            ...(adminEnabled ? allIdentityPreviews[previousCharacter.id] ?? {} : {}),
            ...(allCharacterOverrides[previousCharacter.id] ?? {}),
            gallery:
              allCharacterOverrides[previousCharacter.id]?.gallery ?? previousCharacter.gallery,
          }
        : null,
    [adminEnabled, allCharacterOverrides, allIdentityPreviews, previousCharacter],
  );
  const activeNextCharacter = useMemo(
    () =>
      nextCharacter
        ? {
            ...nextCharacter,
            ...(adminEnabled ? allIdentityPreviews[nextCharacter.id] ?? {} : {}),
            ...(allCharacterOverrides[nextCharacter.id] ?? {}),
            gallery: allCharacterOverrides[nextCharacter.id]?.gallery ?? nextCharacter.gallery,
          }
        : null,
    [adminEnabled, allCharacterOverrides, allIdentityPreviews, nextCharacter],
  );
  const displayGallery = useMemo(() => {
    const baseGallery = [...(activeCharacter.gallery ?? [])].filter(Boolean);

    if (baseGallery.length === 0) {
      baseGallery.push(activeCharacter.heroImage);
    }

    while (baseGallery.length < 3) {
      baseGallery.push(baseGallery[baseGallery.length % Math.max(1, baseGallery.length)]);
    }

    return baseGallery.slice(0, 3);
  }, [activeCharacter.gallery, activeCharacter.heroImage]);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(activeCharacter.heroImage);
  const threatLevel = Math.min(5, Math.max(1, activeCharacter.threatLevel ?? 3));
  const characterQuote = activeCharacter.quote ?? "You are already too close.";
  const titleScratch = "/assets/orange-scratch.png";
  const draftName = identityDraft.name.trim();
  const draftSubtitle = identityDraft.subtitle.trim();
  const previewSlug = slugifyCharacterName(draftName || activeCharacter.name) || getCharacterSlug(character);
  const hasIdentityPreview = Boolean(characterIdentityPreview.name || characterIdentityPreview.subtitle);
  const hasPendingIdentityDraft =
    Boolean(draftName) &&
    (draftName !== (character.name ?? "") || draftSubtitle !== (character.subtitle ?? ""));
  const detailItems = [
    {
      icon: "weapon",
      label: "Weapon of Choice",
      field: "weaponOfChoice",
      value: activeCharacter.weaponOfChoice ?? "Unknown",
    },
    {
      icon: "zone",
      label: "Lurking In",
      field: "lurkingIn",
      value:
        activeCharacter.lurkingIn ??
        activeCharacter.stats?.find((stat) => stat.label === "Lurking In")?.value ??
        "Unknown",
    },
    {
      icon: "skull",
      label: "Known For",
      field: "knownFor",
      value:
        activeCharacter.knownFor ??
        activeCharacter.stats?.find((stat) => stat.label === "Signature")?.value ??
        "Unknown",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let isCancelled = false;

    const loadCharacterAdminState = async () => {
      const queryRequested = searchParams.get("characterAdmin") === "1";
      const storedEnabled = window.localStorage.getItem(characterAdminStorageKey) === "1";
      const shouldEnable = queryRequested || storedEnabled;

      if (queryRequested) {
        window.localStorage.setItem(characterAdminStorageKey, "1");
      }

      const storedOverrides = await readCharacterOverrides();
      const storedIdentityPreviews = readJsonStorage(characterIdentityPreviewStorageKey, {});
      const nextIdentityPreviews = { ...(storedIdentityPreviews ?? {}) };
      let identityChanged = false;

      Object.entries(storedOverrides ?? {}).forEach(([overrideKey, overrideValue]) => {
        if (!overrideValue || typeof overrideValue !== "object") {
          return;
        }

        const legacyIdentityPreview = normalizeIdentityPreview({
          name: overrideValue.name,
          subtitle: overrideValue.subtitle,
        });

        if (!legacyIdentityPreview) {
          return;
        }

        const currentPreview = normalizeIdentityPreview(nextIdentityPreviews[overrideKey]);
        nextIdentityPreviews[overrideKey] = {
          ...legacyIdentityPreview,
          ...(currentPreview ?? {}),
        };
        identityChanged = true;
      });

      Object.entries(nextIdentityPreviews).forEach(([previewKey, previewValue]) => {
        const normalizedPreview = normalizeIdentityPreview(previewValue);

        if (normalizedPreview) {
          if (JSON.stringify(normalizedPreview) !== JSON.stringify(previewValue)) {
            nextIdentityPreviews[previewKey] = normalizedPreview;
            identityChanged = true;
          }

          return;
        }

        delete nextIdentityPreviews[previewKey];
        identityChanged = true;
      });

      const { overrides: allOverrides, changed } = migrateCharacterOverrides(storedOverrides);

      if (changed) {
        await writeCharacterOverrides(allOverrides);
      }

      if (identityChanged) {
        window.localStorage.setItem(characterIdentityPreviewStorageKey, JSON.stringify(nextIdentityPreviews));
      }

      if (isCancelled) {
        return;
      }

      setAdminEnabled(shouldEnable);
      setAllCharacterOverrides(allOverrides);
      setAllIdentityPreviews(nextIdentityPreviews);
      setCharacterOverride(allOverrides[character.id] ?? {});
    };

    loadCharacterAdminState();

    return () => {
      isCancelled = true;
    };
  }, [character.id, searchParams]);

  useEffect(() => {
    setSelectedGalleryImage(activeCharacter.heroImage);
  }, [activeCharacter.heroImage]);

  useEffect(() => {
    setIdentityDraft({
      name: activeCharacter.name ?? "",
      subtitle: activeCharacter.subtitle ?? "",
    });
  }, [character.id, activeCharacter.name, activeCharacter.subtitle]);

  useEffect(() => {
    setGalleryDrafts(displayGallery);
  }, [character.id, displayGallery]);

  const persistCharacterOverride = async (nextOverride) => {
    if (typeof window === "undefined") {
      return;
    }

    const allOverrides = {
      ...allCharacterOverrides,
    };
    allOverrides[character.id] = nextOverride;
    setAllCharacterOverrides(allOverrides);
    setCharacterOverride(nextOverride);

    try {
      await writeCharacterOverrides(allOverrides);
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "Unable to save character image overrides. Please try a smaller image.",
      );
    }
  };

  const persistCharacterIdentityPreview = (nextPreview) => {
    if (typeof window === "undefined") {
      return;
    }

    const allPreviews = JSON.parse(window.localStorage.getItem(characterIdentityPreviewStorageKey) ?? "{}");

    if (nextPreview && Object.keys(nextPreview).length > 0) {
      allPreviews[character.id] = nextPreview;
    } else {
      delete allPreviews[character.id];
    }

    window.localStorage.setItem(characterIdentityPreviewStorageKey, JSON.stringify(allPreviews));
    setAllIdentityPreviews(allPreviews);
  };

  const updateCharacterOverride = (partialOverride) => {
    const nextOverride = {
      ...characterOverride,
      ...partialOverride,
    };

    persistCharacterOverride(nextOverride);
  };

  const updateCharacterIdentityPreview = (partialPreview) => {
    const nextPreview = normalizeIdentityPreview({
      ...(allIdentityPreviews[character.id] ?? {}),
      ...partialPreview,
    });

    persistCharacterIdentityPreview(nextPreview);
  };

  const resetCharacterOverride = async () => {
    if (typeof window === "undefined") {
      return;
    }

    const allOverrides = {
      ...allCharacterOverrides,
    };
    delete allOverrides[character.id];
    setAllCharacterOverrides(allOverrides);
    setCharacterOverride({});

    try {
      await writeCharacterOverrides(allOverrides);
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "Unable to clear character image overrides right now.",
      );
    }
  };

  const resetCharacterIdentityPreview = () => {
    persistCharacterIdentityPreview(null);
  };

  const resetCharacterEdits = () => {
    resetCharacterOverride();
    resetCharacterIdentityPreview();
  };

  const hideAdminMode = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(characterAdminStorageKey);
    }

    setAdminEnabled(false);
    router.replace(pathname);
  };

  const applyIdentityDraftPreview = () => {
    updateCharacterIdentityPreview({
      name: identityDraft.name,
      subtitle: identityDraft.subtitle,
    });
  };

  const bakeCharacterIdentity = async () => {
    if (!adminEnabled || !draftName || typeof window === "undefined" || isBakingIdentity) {
      return;
    }

    setIsBakingIdentity(true);

    try {
      const response = await fetch("/api/character-admin/bake-identity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          characterId: character.id,
          name: draftName,
          subtitle: draftSubtitle || character.subtitle,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to bake character identity.");
      }

      resetCharacterIdentityPreview();
      setIdentityDraft({
        name: result.name,
        subtitle: result.subtitle,
      });
      const nextAdminSuffix = adminEnabled ? "?characterAdmin=1" : "";
      router.push(`/characters/${result.slug}${nextAdminSuffix}`);
      router.refresh();
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Unable to bake character identity.");
    } finally {
      setIsBakingIdentity(false);
    }
  };

  const editTextField = (field, label, currentValue) => {
    if (!adminEnabled || typeof window === "undefined") {
      return;
    }

    const nextValue = window.prompt(`Update ${label}`, currentValue ?? "");

    if (nextValue === null) {
      return;
    }

    if (field === "name" || field === "subtitle") {
      updateCharacterIdentityPreview({ [field]: nextValue });
      return;
    }

    updateCharacterOverride({ [field]: nextValue });
  };

  const updateGalleryDraft = (index, value) => {
    setGalleryDrafts((currentDrafts) => {
      const nextDrafts = [...currentDrafts];
      nextDrafts[index] = value;
      return nextDrafts;
    });
  };

  const applyGallerySlot = (index, nextValue) => {
    const trimmedValue = nextValue.trim();

    if (!trimmedValue) {
      return;
    }

    const nextGallery = [...displayGallery];
    nextGallery[index] = trimmedValue;
    updateCharacterOverride({ gallery: nextGallery });
    updateGalleryDraft(index, trimmedValue);
    setSelectedGalleryImage(trimmedValue);
  };

  const useHeroForGallerySlot = (index) => {
    applyGallerySlot(index, activeCharacter.heroImage ?? character.heroImage ?? fallbackCharacterImage);
  };

  const readImageFileAsDataUrl = (file) =>
    new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(typeof reader.result === "string" ? reader.result : "");
      };

      reader.onerror = () => resolve("");
      reader.readAsDataURL(file);
    });

  const handleImageUpload = (field, index, file) => {
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";

      if (!result) {
        return;
      }

      if (field === "heroImage") {
        updateCharacterOverride({ heroImage: result });
        return;
      }

      const nextGallery = [...(activeCharacter.gallery ?? [])];
      nextGallery[index] = result;
      updateCharacterOverride({ gallery: nextGallery });
      updateGalleryDraft(index, result);
      setSelectedGalleryImage(result);
    };

    reader.readAsDataURL(file);
  };

  const handleGalleryBatchUpload = async (files) => {
    const nextFiles = Array.from(files ?? []).slice(0, 3);

    if (!nextFiles.length) {
      return;
    }

    const uploadedImages = await Promise.all(nextFiles.map((file) => readImageFileAsDataUrl(file)));
    const nextGallery = [...displayGallery];

    uploadedImages.forEach((imageSrc, index) => {
      if (imageSrc) {
        nextGallery[index] = imageSrc;
      }
    });

    updateCharacterOverride({ gallery: nextGallery });
    setGalleryDrafts(nextGallery);
    setSelectedGalleryImage(uploadedImages[0] || nextGallery[0]);
  };

  const editImageField = (field, index = null) => {
    if (!adminEnabled || typeof window === "undefined") {
      return;
    }

    const currentValue =
      field === "heroImage" ? activeCharacter.heroImage : activeCharacter.gallery?.[index] ?? "";
    const nextUrl = window.prompt(
      "Paste an image URL here. Leave blank and press OK to upload a local image.",
      currentValue,
    );

    if (nextUrl === null) {
      return;
    }

    const trimmedValue = nextUrl.trim();

    if (trimmedValue) {
      if (field === "heroImage") {
        updateCharacterOverride({ heroImage: trimmedValue });
        setSelectedGalleryImage(trimmedValue);
        return;
      }

      const nextGallery = [...(activeCharacter.gallery ?? [])];
      nextGallery[index] = trimmedValue;
      updateCharacterOverride({ gallery: nextGallery });
      setSelectedGalleryImage(trimmedValue);
      return;
    }

    if (field === "heroImage") {
      heroUploadRef.current?.click();
      return;
    }

    galleryUploadRefs.current[index]?.click();
  };

  const editableProps = (field, label, currentValue, isImage = false, index = null) =>
    adminEnabled
      ? {
          onClick: () =>
            isImage ? editImageField(field, index) : editTextField(field, label, currentValue),
          title: `Edit ${label}`,
        }
      : {};

  const playTrailer = async () => {
    if (typeof window === "undefined") {
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return;
    }

    const context = new AudioContextClass();

    try {
      if (context.state === "suspended") {
        await context.resume();
      }
    } catch {
      return;
    }

    const startTime = context.currentTime;
    const profile = defaultAudioProfile;
    const masterGain = context.createGain();
    const oscillator = context.createOscillator();
    const textureOscillator = context.createOscillator();
    const textureGain = context.createGain();
    const lowpass = context.createBiquadFilter();

    oscillator.type = profile.type;
    oscillator.frequency.setValueAtTime(profile.start, startTime);
    oscillator.frequency.exponentialRampToValueAtTime(profile.end, startTime + profile.duration);

    textureOscillator.type = "triangle";
    textureOscillator.frequency.setValueAtTime(profile.start * 0.5, startTime);
    textureOscillator.frequency.exponentialRampToValueAtTime(
      Math.max(60, profile.end * 0.75),
      startTime + profile.duration,
    );

    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(2400, startTime);
    lowpass.frequency.exponentialRampToValueAtTime(620, startTime + profile.duration);
    lowpass.Q.value = 3;

    masterGain.gain.setValueAtTime(0.0001, startTime);
    masterGain.gain.exponentialRampToValueAtTime(profile.gain, startTime + 0.03);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, startTime + profile.duration);

    textureGain.gain.setValueAtTime(profile.gain * 0.22, startTime);
    textureGain.gain.exponentialRampToValueAtTime(0.0001, startTime + profile.duration);

    oscillator.connect(lowpass);
    textureOscillator.connect(textureGain);
    textureGain.connect(lowpass);
    lowpass.connect(masterGain);
    masterGain.connect(context.destination);

    oscillator.start(startTime);
    textureOscillator.start(startTime);
    oscillator.stop(startTime + profile.duration + 0.03);
    textureOscillator.stop(startTime + profile.duration + 0.03);
  };

  return (
    <section className={`character-detail character-detail--${activeCharacter.accent}`}>
        {adminEnabled ? (
          <div className="character-detail-admin-bar">
            <div className="character-detail-admin-head">
              <span>Character Admin Mode</span>
              <span>Preview Baked URL: /characters/{previewSlug}</span>
            </div>
            <div className="character-detail-admin-identity">
              <label className="character-detail-admin-field">
                <strong>Name</strong>
                <input
                  type="text"
                  value={identityDraft.name}
                  onChange={(event) =>
                    setIdentityDraft((currentDraft) => ({
                      ...currentDraft,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Character name"
                />
              </label>
              <label className="character-detail-admin-field character-detail-admin-field--wide">
                <strong>Subtitle</strong>
                <input
                  type="text"
                  value={identityDraft.subtitle}
                  onChange={(event) =>
                    setIdentityDraft((currentDraft) => ({
                      ...currentDraft,
                      subtitle: event.target.value,
                    }))
                  }
                  placeholder="Character subtitle"
                />
              </label>
              <div className="character-detail-admin-actions">
                <button type="button" onClick={applyIdentityDraftPreview} disabled={!draftName}>
                  Preview Name
                </button>
                {hasIdentityPreview ? (
                  <button type="button" onClick={resetCharacterIdentityPreview}>
                    Reset Name Preview
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={bakeCharacterIdentity}
                  disabled={!hasPendingIdentityDraft || isBakingIdentity}
                >
                  {isBakingIdentity ? "Saving..." : "Save Name + URL"}
                </button>
                <button type="button" onClick={resetCharacterEdits}>
                  Reset Character
                </button>
                <button type="button" onClick={hideAdminMode}>
                  Hide Admin Mode
                </button>
              </div>
            </div>
          </div>
        ) : null}

      <div className="character-detail-grid">
        <div className="character-detail-copy">
          <Link href={backHref} className="character-detail-back">
            Back to the lineup
          </Link>

          <p
            className={`character-detail-subtitle ${adminEnabled ? "is-editable" : ""}`}
            {...editableProps("subtitle", "Subtitle", activeCharacter.subtitle)}
          >
            {activeCharacter.subtitle}
          </p>
          <div className="character-detail-heading">
            <h1
              className={adminEnabled ? "is-editable" : ""}
              {...editableProps("name", "Name", activeCharacter.name)}
            >
              {activeCharacter.name}
            </h1>
            <span className="character-detail-heading-slash" aria-hidden="true">
              <Image
                src={titleScratch}
                alt=""
                width={1859}
                height={845}
                sizes="(max-width: 640px) 220px, (max-width: 1180px) 280px, 340px"
                className="character-detail-heading-slash-image"
              />
            </span>
          </div>
          <p
            className={`character-detail-description ${adminEnabled ? "is-editable" : ""}`}
            {...editableProps("description", "Description", activeCharacter.description)}
          >
            {activeCharacter.description}
          </p>

          <div className="character-detail-stats" aria-label={`${activeCharacter.name} character stats`}>
            {detailItems.map((item) => (
              <article
                className={`character-detail-stat ${adminEnabled ? "is-editable" : ""}`}
                key={item.label}
                {...editableProps(item.field, item.label, item.value)}
              >
                <span className="character-detail-stat-icon">
                  <StatIcon type={item.icon} />
                </span>
                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </article>
            ))}
          </div>

          <button type="button" className="character-detail-trailer" onClick={playTrailer}>
            <PlayIcon />
            <span>Play Trailer</span>
          </button>
        </div>

        <div className="character-detail-hero-wrap">
          <div
            className={`character-detail-hero-media ${adminEnabled ? "is-editable" : ""}`}
            {...editableProps("heroImage", "Hero Image", activeCharacter.heroImage, true)}
          >
            <CharacterArt
              src={selectedGalleryImage}
              fallback={character.heroImage}
              alt={`${activeCharacter.name} featured portrait`}
              loading="eager"
            />
            <div className="character-detail-threat" aria-label={`Threat level ${threatLevel} out of 5`}>
              <div className="character-detail-threat-copy">
                <span>Threat Level</span>
              </div>
              <div className="character-detail-threat-icons" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={`threat-${index}`}
                    className={index < threatLevel ? "is-active" : ""}
                  />
                ))}
              </div>
              <p
                className={`character-detail-threat-quote ${adminEnabled ? "is-editable" : ""}`}
                {...editableProps("quote", "Quote", characterQuote)}
              >
                "{characterQuote}"
              </p>
              <div className="character-detail-threat-wave" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={`wave-${index}`}
                    style={{ animationDelay: `${index * 0.08}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

          <aside className="character-detail-side">
            <div className="character-detail-gallery">
              {displayGallery.map((image, index) => {
                const isActive = image === selectedGalleryImage;

              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                    className={`character-detail-thumb ${isActive ? "is-active" : ""} ${adminEnabled ? "is-editable" : ""}`}
                    onMouseEnter={() => {
                      setSelectedGalleryImage(image);
                    }}
                    onFocus={() => {
                      setSelectedGalleryImage(image);
                    }}
                    onClick={() => {
                      setSelectedGalleryImage(image);
                    }}
                    aria-label={`Show gallery image ${index + 1} for ${activeCharacter.name}`}
                  >
                    <CharacterArt src={image} fallback={activeCharacter.heroImage} alt="" />
                  </button>
                );
              })}
            </div>

            {adminEnabled ? (
              <div className="character-detail-gallery-admin">
                <div className="character-detail-gallery-admin-head">
                  <span>Right-Side Image Manager</span>
                  <button type="button" onClick={() => galleryBatchUploadRef.current?.click()}>
                    Replace All 3
                  </button>
                </div>
                {displayGallery.map((image, index) => (
                  <div key={`gallery-manager-${index}`} className="character-detail-gallery-admin-row">
                    <div className="character-detail-gallery-admin-preview">
                      <CharacterArt src={image} fallback={activeCharacter.heroImage} alt="" />
                    </div>
                    <label className="character-detail-admin-field character-detail-admin-field--wide">
                      <strong>Slot {index + 1}</strong>
                      <input
                        type="text"
                        value={galleryDrafts[index] ?? ""}
                        onChange={(event) => updateGalleryDraft(index, event.target.value)}
                        placeholder="/assets/... or https://..."
                      />
                    </label>
                    <div className="character-detail-gallery-admin-actions">
                      <button type="button" onClick={() => applyGallerySlot(index, galleryDrafts[index] ?? "")}>
                        Apply URL
                      </button>
                      <button type="button" onClick={() => galleryUploadRefs.current[index]?.click()}>
                        Upload
                      </button>
                      <button type="button" onClick={() => useHeroForGallerySlot(index)}>
                        Use Hero
                      </button>
                      <button type="button" onClick={() => setSelectedGalleryImage(image)}>
                        Preview
                      </button>
                    </div>
                  </div>
                ))}
                <p className="character-detail-gallery-admin-note">
                  Uploads here save privately in this browser right away. Use the name save button above when you want
                  the character name and URL baked into source.
                </p>
              </div>
            ) : null}

            {activeNextCharacter && nextHref ? (
              <Link href={nextHref} className={`character-detail-next character-detail-next--${activeNextCharacter.accent}`}>
              <span className="character-detail-next-label">Up Next</span>
              <strong>{activeNextCharacter.name}</strong>
              <p>{activeNextCharacter.subtitle}</p>
              <div className="character-detail-next-media">
                <CharacterArt
                  src={activeNextCharacter.heroImage}
                  fallback={nextCharacter?.heroImage}
                  alt={`${activeNextCharacter.name} preview`}
                />
              </div>
            </Link>
          ) : null}
        </aside>
      </div>

      {(previousCharacter && previousHref) || (nextCharacter && nextHref) ? (
        <div className="character-detail-controls">
          {activePreviousCharacter && previousHref ? (
            <Link href={previousHref} className="character-detail-nav character-detail-nav--previous">
              <div className="character-detail-nav-media" aria-hidden="true">
                <CharacterArt
                  src={activePreviousCharacter.heroImage}
                  fallback={previousCharacter?.heroImage}
                  alt=""
                />
              </div>
              <span className="character-detail-nav-arrow">
                <NavChevron direction="left" />
              </span>
              <div className="character-detail-nav-copy">
                <span>Prev</span>
                <strong>{activePreviousCharacter.name}</strong>
              </div>
            </Link>
          ) : <div />}

          {activeNextCharacter && nextHref ? (
            <Link href={nextHref} className="character-detail-nav character-detail-nav--next">
              <div className="character-detail-nav-media" aria-hidden="true">
                <CharacterArt
                  src={activeNextCharacter.heroImage}
                  fallback={nextCharacter?.heroImage}
                  alt=""
                />
              </div>
              <div className="character-detail-nav-copy">
                <span>Next</span>
                <strong>{activeNextCharacter.name}</strong>
              </div>
              <span className="character-detail-nav-arrow">
                <NavChevron direction="right" />
              </span>
            </Link>
          ) : <div />}
        </div>
      ) : null}

      <input
        ref={heroUploadRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(event) => handleImageUpload("heroImage", null, event.target.files?.[0])}
      />

      {displayGallery.map((image, index) => (
        <input
          key={`gallery-upload-${index}-${image}`}
          ref={(node) => {
            galleryUploadRefs.current[index] = node;
          }}
          type="file"
          accept="image/*"
          hidden
          onChange={(event) => handleImageUpload("gallery", index, event.target.files?.[0])}
        />
      ))}
      <input
        ref={galleryBatchUploadRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(event) => handleGalleryBatchUpload(event.target.files)}
      />
    </section>
  );
}
