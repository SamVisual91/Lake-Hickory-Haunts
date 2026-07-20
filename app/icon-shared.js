import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

const ICON_BACKGROUND =
  "radial-gradient(circle at 50% 22%, rgba(45, 146, 199, 0.32), rgba(45, 146, 199, 0) 42%), linear-gradient(180deg, #08191f 0%, #020607 100%)";

async function loadLogoDataUrl() {
  const logoPath = path.join(process.cwd(), "public", "assets", "footer-haunt-logo-2026.png");
  const logoBuffer = await fs.readFile(logoPath);

  return `data:image/png;base64,${logoBuffer.toString("base64")}`;
}

export async function createBrandedIcon({ width, height, padding = 28 }) {
  const logoDataUrl = await loadLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding,
          background: ICON_BACKGROUND,
        }}
      >
        <img
          src={logoDataUrl}
          alt="Lake Hickory Haunts logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      width,
      height,
    },
  );
}
