import { createBrandedIcon } from "./icon-shared";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return createBrandedIcon({
    width: size.width,
    height: size.height,
    padding: 26,
  });
}
