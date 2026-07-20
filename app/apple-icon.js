import { createBrandedIcon } from "./icon-shared";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return createBrandedIcon({
    width: size.width,
    height: size.height,
    padding: 18,
  });
}
