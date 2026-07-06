import { NextResponse } from "next/server";
import { normalizeMerchPayload, readMerchConfig, writeMerchConfig } from "../../../lib/shopMerchStorage";

export async function GET() {
  try {
    return NextResponse.json(await readMerchConfig());
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load merch settings." },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const payload = normalizeMerchPayload(await request.json());
    await writeMerchConfig(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save merch settings." },
      { status: 500 },
    );
  }
}
