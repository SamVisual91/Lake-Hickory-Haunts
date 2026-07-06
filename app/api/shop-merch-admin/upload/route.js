import { NextResponse } from "next/server";
import { persistUploadedFile } from "../../../../lib/shopMerchStorage";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files").filter(Boolean);

    if (files.length === 0) {
      return NextResponse.json({ error: "No image files were uploaded." }, { status: 400 });
    }

    const images = [];

    for (const file of files) {
      images.push(await persistUploadedFile(file));
    }

    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to upload merch images." },
      { status: 500 },
    );
  }
}
