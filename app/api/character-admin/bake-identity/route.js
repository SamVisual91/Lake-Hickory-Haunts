import { NextResponse } from "next/server";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { characterDetails, getCharacterSlug, slugifyCharacterName } from "../../../../data/characterDetails";

const overridesPath = path.join(process.cwd(), "data", "characterIdentityOverrides.json");

function normalizeIdentityValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  try {
    const body = await request.json();
    const characterId = normalizeIdentityValue(body?.characterId);
    const nextName = normalizeIdentityValue(body?.name);
    const nextSubtitle = normalizeIdentityValue(body?.subtitle);

    if (!characterId || !nextName) {
      return NextResponse.json({ error: "Character id and name are required." }, { status: 400 });
    }

    const character = characterDetails.find((entry) => entry.id === characterId);

    if (!character) {
      return NextResponse.json({ error: "Character not found." }, { status: 404 });
    }

    const currentCanonicalSlug = getCharacterSlug(character);
    const nextCanonicalSlug = slugifyCharacterName(nextName) || currentCanonicalSlug;
    const nextLegacySlugs = Array.from(
      new Set([...(character.legacySlugs ?? []), ...(nextCanonicalSlug !== currentCanonicalSlug ? [currentCanonicalSlug] : [])]),
    );

    let currentOverrides = {};

    try {
      currentOverrides = JSON.parse(await readFile(overridesPath, "utf8"));
    } catch {
      currentOverrides = {};
    }

    currentOverrides[characterId] = {
      ...(currentOverrides[characterId] ?? {}),
      name: nextName,
      subtitle: nextSubtitle || character.subtitle,
      legacySlugs: nextLegacySlugs,
    };

    await writeFile(overridesPath, `${JSON.stringify(currentOverrides, null, 2)}\n`, "utf8");

    return NextResponse.json({
      ok: true,
      slug: nextCanonicalSlug,
      name: nextName,
      subtitle: nextSubtitle || character.subtitle,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to bake character identity." },
      { status: 500 },
    );
  }
}
