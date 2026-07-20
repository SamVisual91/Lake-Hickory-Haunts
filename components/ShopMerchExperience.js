"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const categories = [
  { id: "apparel", label: "Apparel", accent: "green" },
  { id: "accessories", label: "Accessories", accent: "green" },
  { id: "collectibles", label: "Collectibles", accent: "orange" },
  { id: "souvenirs", label: "Souvenirs", accent: "green" },
  { id: "giftcards", label: "Gift Cards", accent: "purple" },
];

const products = [
  {
    id: "tee",
    name: "The Haunt Tee",
    category: "apparel",
    price: 32.99,
    note: "Online",
    image: "/assets/shop-tee.png",
    colorOptions: [
      { id: "black", label: "Black", swatch: "#101010", image: "/assets/shop-tee.png" },
      { id: "bone", label: "Bone", swatch: "#ece3d1", image: "/assets/shop-tee.png" },
      { id: "slime", label: "Slime Green", swatch: "#7ecb3a", image: "/assets/shop-tee.png" },
    ],
    accent: "green",
  },
  {
    id: "hoodie",
    name: "Shadow Hoodie",
    category: "apparel",
    price: 49.99,
    note: "Online",
    image: "/assets/shop-hoodie.png",
    colorOptions: [
      { id: "black", label: "Black", swatch: "#111111", image: "/assets/shop-hoodie.png" },
      { id: "charcoal", label: "Charcoal", swatch: "#4a4a4a", image: "/assets/shop-hoodie.png" },
      { id: "bone", label: "Bone", swatch: "#ded4c1", image: "/assets/shop-hoodie.png" },
    ],
    accent: "green",
    featured: true,
  },
  {
    id: "logo-tee",
    name: "LHH Logo Tee",
    category: "apparel",
    price: 29.99,
    note: "Online",
    image: "/assets/shop-tee.png",
    colorOptions: [
      { id: "black", label: "Black", swatch: "#101010", image: "/assets/shop-tee.png" },
      { id: "white", label: "White", swatch: "#f5f5f5", image: "/assets/shop-tee.png" },
      { id: "orange", label: "Burnt Orange", swatch: "#d66a2a", image: "/assets/shop-tee.png" },
    ],
    accent: "green",
  },
  {
    id: "midnight-tee",
    name: "Midnight Scream Tee",
    category: "apparel",
    price: 31.99,
    note: "Online",
    image: "/assets/shop-tee.png",
    accent: "green",
  },
  {
    id: "shipwrecked-tee",
    name: "Shipwrecked Tee",
    category: "apparel",
    price: 33.99,
    note: "Season Drop",
    image: "/assets/shop-tee.png",
    accent: "green",
  },
  {
    id: "descent-longsleeve",
    name: "Descent Long Sleeve",
    category: "apparel",
    price: 38.99,
    note: "Online",
    image: "/assets/shop-tee.png",
    accent: "green",
  },
  {
    id: "glow-hoodie",
    name: "Glowline Hoodie",
    category: "apparel",
    price: 52.99,
    note: "Online",
    image: "/assets/shop-hoodie.png",
    accent: "green",
  },
  {
    id: "graveyard-zip",
    name: "Graveyard Zip Hoodie",
    category: "apparel",
    price: 56.99,
    note: "Premium",
    image: "/assets/shop-hoodie.png",
    accent: "green",
  },
  {
    id: "fog-joggers",
    name: "Fogline Joggers",
    category: "apparel",
    price: 44.99,
    note: "Online",
    image: "/assets/shop-hoodie.png",
    accent: "green",
  },
  {
    id: "haunt-beanie",
    name: "Haunt Beanie",
    category: "apparel",
    price: 22.99,
    note: "Cold Nights",
    image: "/assets/shop-snapback.png",
    accent: "green",
  },
  {
    id: "night-crew-cap",
    name: "Night Crew Cap",
    category: "apparel",
    price: 24.99,
    note: "Online",
    image: "/assets/shop-snapback.png",
    accent: "green",
  },
  {
    id: "lanyard",
    name: "Haunt Lanyard",
    category: "accessories",
    price: 9.99,
    note: "Online",
    image: "/assets/shop-lanyard.png",
    accent: "green",
  },
  {
    id: "snapback",
    name: "Haunt Snapback",
    category: "accessories",
    price: 24.99,
    note: "Online",
    image: "/assets/shop-snapback.png",
    accent: "green",
  },
  {
    id: "vip-lanyard",
    name: "VIP Lanyard",
    category: "accessories",
    price: 12.99,
    note: "Online",
    image: "/assets/shop-lanyard.png",
    accent: "green",
  },
  {
    id: "glow-lanyard",
    name: "Glowline Lanyard",
    category: "accessories",
    price: 13.99,
    note: "Night Use",
    image: "/assets/shop-lanyard.png",
    accent: "green",
  },
  {
    id: "event-lanyard",
    name: "Event Night Lanyard",
    category: "accessories",
    price: 11.99,
    note: "Online",
    image: "/assets/shop-lanyard.png",
    accent: "green",
  },
  {
    id: "monster-cap",
    name: "Monster Snapback",
    category: "accessories",
    price: 26.99,
    note: "Online",
    image: "/assets/shop-snapback.png",
    accent: "green",
  },
  {
    id: "midway-cap",
    name: "Midway Cap",
    category: "accessories",
    price: 23.99,
    note: "Online",
    image: "/assets/shop-snapback.png",
    accent: "green",
  },
  {
    id: "haunt-tumbler",
    name: "Haunt Tumbler",
    category: "accessories",
    price: 21.99,
    note: "Online",
    image: "/assets/shop-bottle.png",
    accent: "green",
  },
  {
    id: "steel-bottle",
    name: "Steel Water Bottle",
    category: "accessories",
    price: 24.99,
    note: "Online",
    image: "/assets/shop-bottle.png",
    accent: "green",
  },
  {
    id: "blackout-bottle",
    name: "Blackout Bottle",
    category: "accessories",
    price: 22.99,
    note: "Limited",
    image: "/assets/shop-bottle.png",
    accent: "green",
  },
  {
    id: "poster-tube",
    name: "Poster Carry Tube",
    category: "accessories",
    price: 14.99,
    note: "Collector Gear",
    image: "/assets/shop-poster.png",
    accent: "green",
  },
  {
    id: "gift-set",
    name: "Accessory Gift Set",
    category: "accessories",
    price: 34.99,
    note: "Bundle",
    image: "/assets/shop-giftcard.png",
    accent: "green",
  },
  {
    id: "pin",
    name: "Limited Edition Pin",
    category: "collectibles",
    price: 11.99,
    note: "Limited",
    image: "/assets/shop-pin.png",
    accent: "orange",
  },
  {
    id: "season-pin",
    name: "Season 2026 Pin",
    category: "collectibles",
    price: 12.99,
    note: "Limited",
    image: "/assets/shop-pin.png",
    accent: "orange",
  },
  {
    id: "shipwrecked-pin",
    name: "Shipwrecked Pin",
    category: "collectibles",
    price: 13.99,
    note: "Collector",
    image: "/assets/shop-pin.png",
    accent: "orange",
  },
  {
    id: "descent-pin",
    name: "Descent Pin",
    category: "collectibles",
    price: 13.99,
    note: "Collector",
    image: "/assets/shop-pin.png",
    accent: "orange",
  },
  {
    id: "monster-pin-set",
    name: "Monster Pin Set",
    category: "collectibles",
    price: 21.99,
    note: "Set of 3",
    image: "/assets/shop-pin.png",
    accent: "orange",
  },
  {
    id: "vault-pin",
    name: "Vault Exclusive Pin",
    category: "collectibles",
    price: 15.99,
    note: "Exclusive",
    image: "/assets/shop-pin.png",
    accent: "orange",
  },
  {
    id: "bottle",
    name: "Haunt Water Bottle",
    category: "souvenirs",
    price: 19.99,
    note: "Online",
    image: "/assets/shop-bottle.png",
    accent: "green",
  },
  {
    id: "souvenir-cup",
    name: "Souvenir Cup",
    category: "souvenirs",
    price: 12.99,
    note: "Online",
    image: "/assets/shop-bottle.png",
    accent: "green",
  },
  {
    id: "kraken-cup",
    name: "Kraken Kitchen Cup",
    category: "souvenirs",
    price: 13.99,
    note: "Midway",
    image: "/assets/shop-bottle.png",
    accent: "green",
  },
  {
    id: "souvenir-poster-deluxe",
    name: "Deluxe Event Poster",
    category: "souvenirs",
    price: 18.99,
    note: "Collector Print",
    image: "/assets/shop-poster.png",
    accent: "green",
  },
  {
    id: "character-poster",
    name: "Character Poster",
    category: "souvenirs",
    price: 16.99,
    note: "Online",
    image: "/assets/shop-poster.png",
    accent: "green",
  },
  {
    id: "fright-poster-pack",
    name: "Fright Poster Pack",
    category: "souvenirs",
    price: 24.99,
    note: "Set of 3",
    image: "/assets/shop-poster.png",
    accent: "green",
  },
  {
    id: "memory-book",
    name: "Night Memory Book",
    category: "souvenirs",
    price: 19.99,
    note: "Keepsake",
    image: "/assets/shop-poster.png",
    accent: "green",
  },
  {
    id: "souvenir-bottle-glow",
    name: "Glow Souvenir Bottle",
    category: "souvenirs",
    price: 20.99,
    note: "Online",
    image: "/assets/shop-bottle.png",
    accent: "green",
  },
  {
    id: "photo-magnet",
    name: "Photo Magnet",
    category: "souvenirs",
    price: 9.99,
    note: "Front Gate",
    image: "/assets/shop-poster.png",
    accent: "green",
  },
  {
    id: "poster",
    name: "Event Poster",
    category: "souvenirs",
    price: 14.99,
    note: "Collector Print",
    image: "/assets/shop-poster.png",
    accent: "green",
  },
  {
    id: "gift-card",
    name: "Gift Card",
    category: "giftcards",
    price: 10,
    note: "From $10.00",
    image: "/assets/shop-giftcard.png",
    accent: "purple",
  },
  {
    id: "gift-card-25",
    name: "$25 Gift Card",
    category: "giftcards",
    price: 25,
    note: "Digital",
    image: "/assets/shop-giftcard.png",
    accent: "purple",
  },
  {
    id: "vip-gift-card",
    name: "VIP Gift Card",
    category: "giftcards",
    price: 50,
    note: "Best Value",
    image: "/assets/shop-giftcard.png",
    accent: "purple",
  },
];

const catalogInfoPanels = [
  {
    id: "features",
    label: "Features",
    copy: "Most Popular badges highlight standout picks and limited notes call out special drops.",
  },
  {
    id: "product-type",
    label: "Product Type",
    copy: "Use the main category list to jump between apparel, accessories, collectibles, souvenirs, and gift cards.",
  },
  {
    id: "size",
    label: "Size",
    copy: "Apparel cards keep the live size selector directly inside each product card before you add it to cart.",
  },
  {
    id: "collection",
    label: "Collection",
    copy: "Seasonal launches and premium items are marked in the short note beneath each product price.",
  },
  {
    id: "shopping-help",
    label: "Shopping Help",
    copy: "Your cart stays saved in this browser, so you can keep browsing and come back without losing items.",
  },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "name", label: "Name" },
];

const merchAnnouncements = [
  { type: "shipping", text: "Free shipping on orders over $100" },
  { type: "drop", text: "New haunt drop available now", cta: "Shop now!" },
];

const shopHeroImage = "/assets/shop-merch-header-collage.png";

const apparelSizes = ["S", "M", "L", "XL", "2X"];
const defaultApparelColorPresets = [
  { id: "black", label: "Black", swatch: "#101010" },
  { id: "bone", label: "Bone", swatch: "#ece3d1" },
  { id: "slime", label: "Slime Green", swatch: "#7ecb3a" },
];
const cartStorageKey = "lhh-shop-cart";
const productColorStorageKey = "lhh-shop-colors";
const sizeStorageKey = "lhh-shop-sizes";
const productOverridesStorageKey = "lhh-shop-product-overrides";
const adminModeStorageKey = "lhh-shop-admin-enabled";
const customProductsStorageKey = "lhh-shop-custom-products";
const merchAdminApiPath = "/api/shop-merch-admin";
const merchAdminUploadApiPath = "/api/shop-merch-admin/upload";

function storageValueContainsInlineImages(value) {
  return typeof value === "string" && value.includes("data:image");
}

function createNewProduct(category = "apparel") {
  const timestamp = Date.now();
  const defaultImage = "/assets/shop-tee.png";

  return {
    id: `custom-${timestamp}`,
    name: "New Merch Item",
    category,
    price: 0,
    note: "Local Draft",
    image: defaultImage,
    images: [defaultImage],
    accent: category === "giftcards" ? "purple" : category === "collectibles" ? "orange" : "green",
    featured: false,
    visible: true,
    stock: 12,
    lowStockThreshold: 4,
    salePrice: undefined,
    isCustom: true,
  };
}

function isApparelProduct(product) {
  return product.category === "apparel";
}

function normalizeColorOption(option, fallbackImage) {
  const images =
    Array.isArray(option?.images) && option.images.length > 0
      ? option.images
      : [fallbackImage];
  const nextImages = images.filter((image) => typeof image === "string" && image.trim().length > 0);
  const nextFallbackImage = nextImages[0] ?? fallbackImage;

  return {
    ...option,
    image: nextFallbackImage,
    images: nextImages.length > 0 ? nextImages : [nextFallbackImage],
  };
}

function createDefaultApparelColorOptions(product) {
  const fallbackImage = product.image ?? "/assets/shop-tee.png";

  return defaultApparelColorPresets.map((preset) => ({
    ...preset,
    image: fallbackImage,
    images: [fallbackImage],
  }));
}

function createColorOptionId() {
  return `color-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function getProductImages(product) {
  const candidates = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image];

  return candidates.filter((image) => typeof image === "string" && image.trim().length > 0);
}

function getProductColorOptions(product) {
  if (!Array.isArray(product.colorOptions) || product.colorOptions.length === 0) {
    return isApparelProduct(product) ? createDefaultApparelColorOptions(product) : [];
  }

  const fallbackImage = getProductImages(product)[0] ?? product.image ?? "/assets/shop-tee.png";
  return product.colorOptions.map((option) => normalizeColorOption(option, fallbackImage));
}

function getActiveColorOption(product, selectedColorId) {
  const colorOptions = getProductColorOptions(product);

  if (colorOptions.length === 0) {
    return null;
  }

  return colorOptions.find((option) => option.id === selectedColorId) ?? colorOptions[0];
}

function getActiveProductImages(product, selectedColorId) {
  const activeColorOption = getActiveColorOption(product, selectedColorId);
  return activeColorOption ? activeColorOption.images : getProductImages(product);
}

function normalizeProduct(product) {
  const images = getProductImages(product);
  const fallbackImage = images[0] ?? product.image ?? "/assets/shop-tee.png";
  const colorOptions = getProductColorOptions({
    ...product,
    image: fallbackImage,
    images,
  });

  return {
    ...product,
    image: fallbackImage,
    images: images.length > 0 ? images : [fallbackImage],
    colorOptions,
  };
}

function mergeProductImages(existingImages, nextImages) {
  return [...existingImages, ...nextImages].filter(
    (image, index, allImages) =>
      typeof image === "string" &&
      image.trim().length > 0 &&
      allImages.indexOf(image) === index,
  );
}

function getProductImageSelectionKey(productId, colorId = null) {
  return colorId ? `${productId}::${colorId}` : productId;
}

function getCartKey(productId, size, colorId) {
  const keyParts = [productId];

  if (size) {
    keyParts.push(size);
  }

  if (colorId) {
    keyParts.push(colorId);
  }

  return keyParts.join("::");
}

function getDisplayPrice(product) {
  const regularPrice = Number(product.price ?? 0);
  const salePrice = Number(product.salePrice);

  if (Number.isFinite(salePrice) && salePrice >= 0 && salePrice < regularPrice) {
    return salePrice;
  }

  return regularPrice;
}

function getSaleMeta(product) {
  const regularPrice = Number(product.price ?? 0);
  const salePrice = Number(product.salePrice);

  if (!Number.isFinite(salePrice) || salePrice < 0 || salePrice >= regularPrice) {
    return { isOnSale: false, regularPrice, salePrice: null, discountPercent: 0 };
  }

  return {
    isOnSale: true,
    regularPrice,
    salePrice,
    discountPercent: Math.round(((regularPrice - salePrice) / regularPrice) * 100),
  };
}

function getStockMeta(product, quantityInCart = 0) {
  const rawStock = product.stock;
  const stockCount = Number.isFinite(rawStock) ? Math.max(0, rawStock) : null;

  if (stockCount === 0) {
    return {
      tone: "soldout",
      label: "Out of Stock",
      detail: "This item is currently unavailable.",
      stockCount,
      isSoldOut: true,
    };
  }

  if (stockCount === null) {
    return {
      tone: "instock",
      label: "In Stock",
      detail: "Available now.",
      stockCount,
      isSoldOut: false,
    };
  }

  const remaining = Math.max(stockCount - quantityInCart, 0);
  const lowStockThreshold =
    Number.isFinite(product.lowStockThreshold) && product.lowStockThreshold >= 0
      ? product.lowStockThreshold
      : 4;

  if (remaining <= 0) {
    return {
      tone: "soldout",
      label: "Out of Stock",
      detail: "This item is currently unavailable.",
      stockCount,
      isSoldOut: true,
    };
  }

  if (remaining <= lowStockThreshold) {
    return {
      tone: "lowstock",
      label: "Low Stock",
      detail: `${remaining} left in stock.`,
      stockCount,
      isSoldOut: false,
    };
  }

  return {
    tone: "instock",
    label: "In Stock",
    detail: `${remaining} ready to ship.`,
    stockCount,
    isSoldOut: false,
  };
}

function CategoryIcon({ id, accent }) {
  const stroke = accent === "orange" ? "#ff8e2b" : accent === "purple" ? "#a45cff" : "#8cf245";

  if (id === "apparel") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 16l12 6 12-6 8 8-8 8v20H20V32l-8-8 8-8Z" fill="none" stroke={stroke} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "accessories") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 22c0-8 6-14 14-14s14 6 14 14" fill="none" stroke={stroke} strokeWidth="3.2" strokeLinecap="round" />
        <path d="M14 28h36v10c0 10-8 18-18 18S14 48 14 38V28Z" fill="none" stroke={stroke} strokeWidth="3.2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "collectibles") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M24 14h16l10 10v12c0 12-8 20-18 20s-18-8-18-20V24l10-10Z" fill="none" stroke={stroke} strokeWidth="3.2" strokeLinejoin="round" />
        <path d="M26 34h12M28 24h8M24 44h16" fill="none" stroke={stroke} strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "souvenirs") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M22 18h20v6H22zM20 24h24l-2 28H22l-2-28Z" fill="none" stroke={stroke} strokeWidth="3.2" strokeLinejoin="round" />
        <path d="M28 34h8M26 42h12" fill="none" stroke={stroke} strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="21" cy="24" r="8" fill="none" stroke={stroke} strokeWidth="3.2" />
      <circle cx="43" cy="20" r="8" fill="none" stroke={stroke} strokeWidth="3.2" />
      <circle cx="32" cy="42" r="9" fill="none" stroke={stroke} strokeWidth="3.2" />
      <path d="M12 54c3-6 9-10 16-10M36 44c7 0 13 4 16 10M24 16c3-5 8-8 14-8" fill="none" stroke={stroke} strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h2l2 10h9l3-7H8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="19" r="1.5" fill="currentColor" />
      <circle cx="18" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8.2" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.2 19.2c1.8-3 4-4.4 6.8-4.4s5 1.4 6.8 4.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8.2h12l-1 11.2a1.7 1.7 0 0 1-1.7 1.5H8.7A1.7 1.7 0 0 1 7 19.4L6 8.2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 9V7.4a3 3 0 0 1 6 0V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 7V5.6c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6V7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.2 7 8 19c.1.9.8 1.6 1.7 1.6h4.6c.9 0 1.6-.7 1.7-1.6L16.8 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10.2 10.4v6.2M13.8 10.4v6.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 7 6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h10v8H3zM13 9h3l2.2 2.4V14H13z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function SkullIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.7c-3.8 0-6.6 2.8-6.6 6.5 0 2.2 1 3.9 2.7 5v2.7h1.9v2.4h1.8V18h.4v2.3H14V18h1.9v-2.7c1.7-1.1 2.7-2.8 2.7-5 0-3.7-2.8-6.5-6.6-6.5Z" fill="currentColor" />
      <circle cx="9.4" cy="10.7" r="1.2" fill="#fff" />
      <circle cx="14.6" cy="10.7" r="1.2" fill="#fff" />
      <path d="M11 14.2h2l-1 1.4-1-1.4Z" fill="#fff" />
    </svg>
  );
}

export function ShopMerchExperience({ initialMerchData = null, initialAdminEnabled = false }) {
  const initialProductOverrides = initialMerchData?.productOverrides ?? {};
  const initialCustomProducts = initialMerchData?.customProducts ?? [];
  const hasInitialMerchData =
    Object.keys(initialProductOverrides).length > 0 || initialCustomProducts.length > 0;
  const [activeCategory, setActiveCategory] = useState("apparel");
  const [sortBy, setSortBy] = useState("featured");
  const [expandedPanel, setExpandedPanel] = useState("features");
  const [cart, setCart] = useState({});
  const [selectedProductColors, setSelectedProductColors] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedProductImageIndexes, setSelectedProductImageIndexes] = useState({});
  const [productOverrides, setProductOverrides] = useState(initialProductOverrides);
  const [adminEnabled, setAdminEnabled] = useState(initialAdminEnabled);
  const [customProducts, setCustomProducts] = useState(initialCustomProducts);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [merchSyncStatus, setMerchSyncStatus] = useState(hasInitialMerchData ? "saved" : "loading");
  const [merchSyncMessage, setMerchSyncMessage] = useState(
    hasInitialMerchData ? "Merch edits are synced for every browser opening this shop." : "Loading saved merch edits...",
  );
  const [merchSyncReady, setMerchSyncReady] = useState(hasInitialMerchData);
  const [merchSyncAvailable, setMerchSyncAvailable] = useState(hasInitialMerchData);
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: "",
    email: "",
    notes: "",
  });
  const merchSnapshotRef = useRef(
    JSON.stringify({
      productOverrides: initialProductOverrides,
      customProducts: initialCustomProducts,
    }),
  );
  const productImageInputRefs = useRef({});

  useEffect(() => {
    let isCancelled = false;

    const hydrateMerchEditor = async () => {
      let storedOverrides = null;
      let storedCustomProducts = null;
      let parsedLocalOverrides = {};
      let parsedLocalCustomProducts = [];

      try {
        const storedCart = window.localStorage.getItem(cartStorageKey);
        const storedColors = window.localStorage.getItem(productColorStorageKey);
        const storedSizes = window.localStorage.getItem(sizeStorageKey);
        storedOverrides = window.localStorage.getItem(productOverridesStorageKey);
        const storedAdmin = window.localStorage.getItem(adminModeStorageKey);
        storedCustomProducts = window.localStorage.getItem(customProductsStorageKey);
        const params = new URLSearchParams(window.location.search);
        const requestedAdminMode = params.get("shopAdmin");

        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }

        if (storedColors) {
          setSelectedProductColors(JSON.parse(storedColors));
        }

        if (storedSizes) {
          setSelectedSizes(JSON.parse(storedSizes));
        }

        if (storedAdmin === "1") {
          setAdminEnabled(true);
        }

        if (storageValueContainsInlineImages(storedOverrides) || storageValueContainsInlineImages(storedCustomProducts)) {
          storedOverrides = null;
          storedCustomProducts = null;
          window.localStorage.removeItem(productOverridesStorageKey);
          window.localStorage.removeItem(customProductsStorageKey);
        }

        if (requestedAdminMode === "1") {
          setAdminEnabled(true);
          window.localStorage.setItem(adminModeStorageKey, "1");
        }

        if (requestedAdminMode === "0") {
          setAdminEnabled(false);
          window.localStorage.removeItem(adminModeStorageKey);
        }
      } catch {}

      try {
        parsedLocalOverrides = storedOverrides ? JSON.parse(storedOverrides) : {};
        parsedLocalCustomProducts = storedCustomProducts ? JSON.parse(storedCustomProducts) : [];
      } catch {
        parsedLocalOverrides = {};
        parsedLocalCustomProducts = [];
      }

      const localHasData =
        Object.keys(parsedLocalOverrides).length > 0 || parsedLocalCustomProducts.length > 0;

      if (localHasData && !isCancelled) {
        setProductOverrides(parsedLocalOverrides);
        setCustomProducts(parsedLocalCustomProducts);
        merchSnapshotRef.current = JSON.stringify({
          productOverrides: parsedLocalOverrides,
          customProducts: parsedLocalCustomProducts,
        });
        setMerchSyncStatus("loading");
        setMerchSyncMessage("Loading latest synced merch...");
        setMerchSyncReady(true);
      }

      try {
        const response = await fetch(merchAdminApiPath, { cache: "no-store" });

        if (!response.ok) {
          throw new Error("Unable to load merch editor settings.");
        }

        const payload = await response.json();
        const remoteOverrides = payload?.productOverrides ?? {};
        const remoteCustomProducts = payload?.customProducts ?? [];
        const remoteHasData =
          Object.keys(remoteOverrides).length > 0 || remoteCustomProducts.length > 0;
        const nextOverrides = remoteHasData || !localHasData ? remoteOverrides : parsedLocalOverrides;
        const nextCustomProducts =
          remoteHasData || !localHasData ? remoteCustomProducts : parsedLocalCustomProducts;

        if (isCancelled) {
          return;
        }

        setProductOverrides(nextOverrides);
        setCustomProducts(nextCustomProducts);
        merchSnapshotRef.current = JSON.stringify(
          remoteHasData || !localHasData
            ? {
                productOverrides: nextOverrides,
                customProducts: nextCustomProducts,
              }
            : {
                productOverrides: remoteOverrides,
                customProducts: remoteCustomProducts,
              },
        );
        setMerchSyncAvailable(true);
        setMerchSyncStatus("saved");
        setMerchSyncMessage("Merch edits are synced for every browser opening this shop.");
      } catch {
        if (isCancelled) {
          return;
        }

        try {
          setProductOverrides(parsedLocalOverrides);
          setCustomProducts(parsedLocalCustomProducts);
          merchSnapshotRef.current = JSON.stringify({
            productOverrides: parsedLocalOverrides,
            customProducts: parsedLocalCustomProducts,
          });
        } catch {
          merchSnapshotRef.current = JSON.stringify({
            productOverrides: {},
            customProducts: [],
          });
        }

        setMerchSyncAvailable(false);
        setMerchSyncStatus("local");
        setMerchSyncMessage("Using browser-only draft mode until the merch sync service responds.");
      } finally {
        if (!isCancelled) {
          setMerchSyncReady(true);
        }
      }
    };

    hydrateMerchEditor();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      window.localStorage.setItem(productColorStorageKey, JSON.stringify(selectedProductColors));
    } catch {}
  }, [selectedProductColors]);

  useEffect(() => {
    try {
      window.localStorage.setItem(sizeStorageKey, JSON.stringify(selectedSizes));
    } catch {}
  }, [selectedSizes]);

  useEffect(() => {
    try {
      window.localStorage.setItem(productOverridesStorageKey, JSON.stringify(productOverrides));
    } catch {}
  }, [productOverrides]);

  useEffect(() => {
    try {
      window.localStorage.setItem(customProductsStorageKey, JSON.stringify(customProducts));
    } catch {}
  }, [customProducts]);

  useEffect(() => {
    if (!merchSyncReady || !merchSyncAvailable) {
      return undefined;
    }

    const nextSnapshot = JSON.stringify({ productOverrides, customProducts });

    if (nextSnapshot === merchSnapshotRef.current) {
      return undefined;
    }

    let isCancelled = false;
    const timeoutId = window.setTimeout(async () => {
      try {
        setMerchSyncStatus("saving");
        setMerchSyncMessage("Saving merch changes...");

        const response = await fetch(merchAdminApiPath, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productOverrides, customProducts }),
        });

        if (!response.ok) {
          throw new Error("Unable to save merch changes.");
        }

        if (isCancelled) {
          return;
        }

        merchSnapshotRef.current = nextSnapshot;
        setMerchSyncStatus("saved");
        setMerchSyncMessage("Merch changes saved to the site.");
      } catch {
        if (isCancelled) {
          return;
        }

        setMerchSyncStatus("error");
        setMerchSyncMessage("Could not save to the site. Your latest draft is still kept in this browser.");
      }
    }, 450);

    return () => {
      isCancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [productOverrides, customProducts, merchSyncReady, merchSyncAvailable]);

  useEffect(() => {
    try {
      if (adminEnabled) {
        window.localStorage.setItem(adminModeStorageKey, "1");
      } else {
        window.localStorage.removeItem(adminModeStorageKey);
      }

      const nextUrl = new URL(window.location.href);

      if (adminEnabled) {
        nextUrl.searchParams.set("shopAdmin", "1");
      } else {
        nextUrl.searchParams.delete("shopAdmin");
      }

      const nextRelativeUrl = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
      window.history.replaceState(window.history.state, "", nextRelativeUrl);
    } catch {}
  }, [adminEnabled]);

  useEffect(() => {
    document.body.classList.toggle("shopx-cart-open", cartOpen);
    return () => document.body.classList.remove("shopx-cart-open");
  }, [cartOpen]);

  const mergedProducts = useMemo(
    () =>
      [...products, ...customProducts].map((product) =>
        normalizeProduct({
          ...product,
          ...(productOverrides[product.id] ?? {}),
        }),
      ),
    [productOverrides, customProducts],
  );

  const productsById = useMemo(
    () => Object.fromEntries(mergedProducts.map((product) => [product.id, product])),
    [mergedProducts],
  );

  const filteredProducts = useMemo(() => {
    const next = mergedProducts.filter(
      (product) =>
        product.category === activeCategory && (adminEnabled || product.visible !== false),
    );

    switch (sortBy) {
      case "price-low":
        return [...next].sort((a, b) => getDisplayPrice(a) - getDisplayPrice(b));
      case "price-high":
        return [...next].sort((a, b) => getDisplayPrice(b) - getDisplayPrice(a));
      case "name":
        return [...next].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return [...next].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    }
  }, [activeCategory, sortBy, mergedProducts, adminEnabled]);

  const cartCount = useMemo(
    () => Object.values(cart).reduce((total, entry) => total + (entry.quantity ?? 0), 0),
    [cart, productsById],
  );

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([key, entry]) => {
          const productId = entry.productId ?? key.split("::")[0];
          const product = productsById[productId];

          if (!product) {
            return null;
          }

          return {
            key,
            product,
            size: entry.size ?? null,
            colorId: entry.colorId ?? null,
            colorLabel: getActiveColorOption(product, entry.colorId ?? null)?.label ?? null,
            quantity: entry.quantity ?? 0,
            unitPrice: getDisplayPrice(product),
            lineTotal: getDisplayPrice(product) * (entry.quantity ?? 0),
          };
        })
        .filter(Boolean),
    [cart, productsById],
  );

  const cartSubtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.lineTotal, 0),
    [cartItems],
  );

  const productCartCounts = useMemo(() => {
    const next = {};

    cartItems.forEach((item) => {
      next[item.product.id] = (next[item.product.id] ?? 0) + item.quantity;
    });

    return next;
  }, [cartItems]);

  const activeCategoryMeta = categories.find((category) => category.id === activeCategory) ?? categories[0];

  const merchHealth = useMemo(() => {
    return mergedProducts.reduce(
      (totals, product) => {
        const stockMeta = getStockMeta(product);
        const saleMeta = getSaleMeta(product);

        totals.total += 1;

        if (product.visible !== false) {
          totals.visible += 1;
        }

        if (saleMeta.isOnSale) {
          totals.onSale += 1;
        }

        if (stockMeta.tone === "soldout") {
          totals.soldOut += 1;
        }

        if (stockMeta.tone === "lowstock") {
          totals.lowStock += 1;
        }

        return totals;
      },
      { total: 0, visible: 0, onSale: 0, soldOut: 0, lowStock: 0 },
    );
  }, [mergedProducts]);

  const addToCart = (product) => {
    const currentQuantity = productCartCounts[product.id] ?? 0;
    const stockCount = typeof product.stock === "number" ? product.stock : null;

    if (product.visible === false || stockCount === 0 || (stockCount !== null && currentQuantity >= stockCount)) {
      return;
    }

    const size = isApparelProduct(product) ? (selectedSizes[product.id] ?? "M") : null;
    const selectedColorId =
      getActiveColorOption(product, selectedProductColors[product.id] ?? null)?.id ?? null;
    const key = getCartKey(product.id, size, selectedColorId);

    setCart((current) => ({
      ...current,
      [key]: {
        productId: product.id,
        size,
        colorId: selectedColorId,
        quantity: (current[key]?.quantity ?? 0) + 1,
      },
    }));
  };

  const updateSelectedSize = (productId, size) => {
    setSelectedSizes((current) => ({
      ...current,
      [productId]: size,
    }));
  };

  const updateSelectedProductColor = (productId, colorId) => {
    setSelectedProductColors((current) => ({
      ...current,
      [productId]: colorId,
    }));
    setSelectedProductImageIndexes((current) => ({
      ...current,
      [getProductImageSelectionKey(productId, colorId)]: 0,
    }));
  };

  const updateProductColorOption = (productId, colorId, patch) => {
    const currentProduct = productsById[productId] ?? {};
    const nextColorOptions = getProductColorOptions(currentProduct).map((option) =>
      option.id === colorId ? { ...option, ...patch } : option,
    );

    updateProductOverride(productId, {
      colorOptions: nextColorOptions,
    });
  };

  const addProductColorOption = (productId) => {
    const currentProduct = productsById[productId] ?? {};
    const nextColorOption = {
      id: createColorOptionId(),
      label: "New Color",
      swatch: "#8a8a8a",
      image: currentProduct.image ?? "/assets/shop-tee.png",
      images: [currentProduct.image ?? "/assets/shop-tee.png"],
    };

    updateProductOverride(productId, {
      colorOptions: [...getProductColorOptions(currentProduct), nextColorOption],
    });
    updateSelectedProductColor(productId, nextColorOption.id);
  };

  const removeProductColorOption = (productId, colorId) => {
    const currentProduct = productsById[productId] ?? {};
    const nextColorOptions = getProductColorOptions(currentProduct).filter((option) => option.id !== colorId);

    updateProductOverride(productId, {
      colorOptions: nextColorOptions,
    });

    setSelectedProductColors((current) => {
      const nextSelectedColorId = nextColorOptions[0]?.id ?? null;

      return {
        ...current,
        [productId]: nextSelectedColorId,
      };
    });
    setSelectedProductImageIndexes((current) => ({
      ...current,
      [getProductImageSelectionKey(productId, nextColorOptions[0]?.id ?? null)]: 0,
    }));
  };

  const updateSelectedProductImage = (productId, imageIndex, colorId = null) => {
    const selectionKey = getProductImageSelectionKey(productId, colorId);
    setSelectedProductImageIndexes((current) => ({
      ...current,
      [selectionKey]: imageIndex,
    }));
  };

  const cycleProductImage = (productId, direction, imageCount, colorId = null) => {
    if (imageCount <= 1) {
      return;
    }

    const selectionKey = getProductImageSelectionKey(productId, colorId);
    setSelectedProductImageIndexes((current) => {
      const currentIndex = current[selectionKey] ?? 0;
      const nextIndex =
        direction === "previous"
          ? (currentIndex - 1 + imageCount) % imageCount
          : (currentIndex + 1) % imageCount;

      return {
        ...current,
        [selectionKey]: nextIndex,
      };
    });
  };

  const updateProductOverride = (productId, patch) => {
    setProductOverrides((current) => ({
      ...current,
      [productId]: {
        ...(current[productId] ?? {}),
        ...patch,
      },
    }));
  };

  const updateProductImages = (productId, images, options = {}) => {
    const { append = false, colorId = null } = options;
    const incomingImages = images.filter((image) => typeof image === "string" && image.trim().length > 0);
    const currentProduct = productsById[productId] ?? {};
    const selectionKey = getProductImageSelectionKey(productId, colorId);
    const existingImages = append
      ? colorId
        ? getActiveProductImages(currentProduct, colorId)
        : getProductImages(currentProduct)
      : [];
    const nextImages = append ? mergeProductImages(existingImages, incomingImages) : incomingImages;
    const fallbackImage = nextImages[0] ?? currentProduct.image ?? "/assets/shop-tee.png";

    if (colorId) {
      const nextColorOptions = getProductColorOptions(currentProduct).map((option) =>
        option.id === colorId
          ? {
              ...option,
              image: fallbackImage,
              images: nextImages.length > 0 ? nextImages : [fallbackImage],
            }
          : option,
      );

      updateProductOverride(productId, {
        colorOptions: nextColorOptions,
      });
    } else {
      updateProductOverride(productId, {
        image: fallbackImage,
        images: nextImages.length > 0 ? nextImages : [fallbackImage],
      });
    }

    if (!append) {
      setSelectedProductImageIndexes((current) => ({
        ...current,
        [selectionKey]: 0,
      }));
    }
  };

  const resolveSelectedProductColorId = (productId) => {
    const currentProduct = productsById[productId] ?? {};
    return selectedProductColors[productId] ?? getProductColorOptions(currentProduct)[0]?.id ?? null;
  };

  const updateProductImageFiles = async (productId, files) => {
    if (!files || files.length === 0) {
      return;
    }

    try {
      setMerchSyncStatus("saving");
      setMerchSyncMessage("Uploading merch images...");

      const formData = new FormData();

      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch(merchAdminUploadApiPath, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Unable to upload merch images.");
      }

      const payload = await response.json();
      const uploadedImages = Array.isArray(payload?.images) ? payload.images.filter(Boolean) : [];

      if (uploadedImages.length === 0) {
        throw new Error("No uploaded images were returned.");
      }

      const selectedColorId = resolveSelectedProductColorId(productId);
      const selectionKey = getProductImageSelectionKey(productId, selectedColorId);
      const existingImages = selectedColorId
        ? getActiveProductImages(productsById[productId] ?? {}, selectedColorId)
        : getProductImages(productsById[productId] ?? {});

      updateProductImages(productId, uploadedImages, {
        append: true,
        colorId: selectedColorId,
      });

      setSelectedProductImageIndexes((current) => ({
        ...current,
        [selectionKey]: existingImages.length,
      }));
      setMerchSyncStatus("saved");
      setMerchSyncMessage("Merch images uploaded successfully.");
    } catch {
      setMerchSyncStatus("error");
      setMerchSyncMessage("Image upload failed. Please try that product again.");
    }
  };

  const openProductImagePicker = (productId) => {
    productImageInputRefs.current[productId]?.click();
  };

  const removeProductImage = (productId, imageToRemove) => {
    const selectedColorId = resolveSelectedProductColorId(productId);
    const selectionKey = getProductImageSelectionKey(productId, selectedColorId);
    const existingImages = selectedColorId
      ? getActiveProductImages(productsById[productId] ?? {}, selectedColorId)
      : getProductImages(productsById[productId] ?? {});
    const nextImages = existingImages.filter((image) => image !== imageToRemove);

    updateProductImages(productId, nextImages, { colorId: selectedColorId });
    setSelectedProductImageIndexes((current) => ({
      ...current,
      [selectionKey]: 0,
    }));
  };

  const resetProductOverride = (productId) => {
    setProductOverrides((current) => {
      const { [productId]: _removed, ...rest } = current;
      return rest;
    });
  };

  const resetAllProductOverrides = () => {
    setProductOverrides({});
  };

  const addCustomProduct = () => {
    setCustomProducts((current) => [createNewProduct(activeCategory), ...current]);
  };

  const removeCustomProduct = (productId) => {
    setCustomProducts((current) => current.filter((product) => product.id !== productId));
    setProductOverrides((current) => {
      const { [productId]: _removed, ...rest } = current;
      return rest;
    });
  };

  const incrementCartItem = (key) => {
    setCart((current) => {
      const currentEntry = current[key];

      if (!currentEntry) {
        return current;
      }

      const productId = currentEntry.productId ?? key.split("::")[0];
      const product = productsById[productId];
      const stockCount = Number.isFinite(product?.stock) ? Math.max(0, product.stock) : null;

      if (stockCount !== null) {
        const currentProductQuantity = Object.values(current).reduce((total, entry) => {
          const entryProductId = entry.productId ?? "";
          return entryProductId === productId ? total + (entry.quantity ?? 0) : total;
        }, 0);

        if (currentProductQuantity >= stockCount) {
          return current;
        }
      }

      return {
        ...current,
        [key]: {
          ...currentEntry,
          quantity: (currentEntry.quantity ?? 0) + 1,
        },
      };
    });
  };

  const decrementCartItem = (key) => {
    setCart((current) => {
      const nextQuantity = (current[key]?.quantity ?? 0) - 1;

      if (nextQuantity <= 0) {
        const { [key]: _removed, ...rest } = current;
        return rest;
      }

      return {
        ...current,
        [key]: {
          ...current[key],
          quantity: nextQuantity,
        },
      };
    });
  };

  const removeCartItem = (key) => {
    setCart((current) => {
      const { [key]: _removed, ...rest } = current;
      return rest;
    });
  };

  const clearCart = () => {
    setCart({});
    setCheckoutStep("cart");
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
    setCheckoutStep("cart");
  };

  const disableAdminMode = () => {
    setAdminEnabled(false);
  };

  const handleCheckoutSubmit = (event) => {
    event.preventDefault();
    setCheckoutStep("confirmation");
  };

  const toggleInfoPanel = (panelId) => {
    setExpandedPanel((current) => (current === panelId ? null : panelId));
  };

  const isMerchCatalogLoading = !merchSyncReady;

  return (
    <section className="shopx-page">
      <section className="shopx-fashion-shell" aria-label="Lake Hickory Haunts haunt collection hero">
        <div className="shopx-fashion-announcement" role="note" aria-label="Shopping announcements">
          <div className="shopx-fashion-announcement-track">
            {Array.from({ length: 4 }).map((_, repeatIndex) =>
              merchAnnouncements.map((item, itemIndex) => (
                <span className="shopx-fashion-announcement-item" key={`${repeatIndex}-${item.type}-${itemIndex}`}>
                  {item.type === "shipping" ? <TruckIcon /> : <SkullIcon />}
                  <span>{item.text}</span>
                  {item.cta ? <strong>{item.cta}</strong> : null}
                </span>
              )),
            )}
          </div>
        </div>

        <div className="shopx-fashion-nav-shell">
          <div className="page-width shopx-fashion-nav">
            <div className="shopx-fashion-nav-links" aria-label="Shop primary">
              <Link href="/">Home</Link>
              <a href="#shopx-collection">Collection</a>
              <a href="/contact">
                Contact
              </a>
            </div>

            <Link className="shopx-fashion-wordmark" href="/shop" aria-label="Lake Hickory Haunts shop merch">
              <strong>Lake Hickory Haunts</strong>
              <span>Shop Merch</span>
            </Link>

            <div className="shopx-fashion-nav-utility-cluster">
              <div className="shopx-fashion-nav-icons" aria-label="Shop utilities">
                <button type="button" aria-label="Search shop">
                  <SearchIcon />
                </button>
                <button type="button" aria-label="Account">
                  <AccountIcon />
                </button>
                <button type="button" aria-label="Shopping bag" onClick={openCart}>
                  <BagIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="shopx-fashion-hero">
          <div className="shopx-fashion-hero-background" aria-hidden="true">
            <Image
              src={shopHeroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "center 32%" }}
            />
          </div>

          <div className="shopx-fashion-hero-scrim" />

          <div className="shopx-fashion-copy">
            <h1>Haunt Collection</h1>
            <p>Elevate your fear with our signature haunt apparel.</p>
            <div className="shopx-fashion-actions">
              <a href="#shopx-grid" className="shopx-fashion-button is-primary">
                Shop Now
              </a>
              <a href="#shopx-collection" className="shopx-fashion-button is-secondary">
                View Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={`page-width shopx-content ${adminEnabled ? "is-admin-enabled" : ""}`}>
        {adminEnabled ? (
          <section className="shopx-admin-bar" aria-label="Private admin mode">
            <div className="shopx-admin-copy">
              <p className="shopx-kicker">Private Admin Mode</p>
              <strong>Merch editor mode is active for this shop.</strong>
              <span>Upload product images, rename items, manage inventory, and set live sale prices here.</span>
              <span className={`shopx-admin-sync is-${merchSyncStatus}`}>{merchSyncMessage}</span>
              <div className="shopx-admin-health">
                <span>{merchHealth.visible} live</span>
                <span>{merchHealth.onSale} on sale</span>
                <span>{merchHealth.lowStock} low stock</span>
                <span>{merchHealth.soldOut} sold out</span>
              </div>
            </div>
            <div className="shopx-admin-actions">
              <button type="button" className="shopx-primary-button" onClick={addCustomProduct}>
                Add New Item
              </button>
              <button type="button" className="shopx-secondary-button" onClick={resetAllProductOverrides}>
                Reset All Local Edits
              </button>
              <button type="button" className="shopx-secondary-button" onClick={disableAdminMode}>
                Hide Admin Mode
              </button>
            </div>
          </section>
        ) : null}

        <section className="shopx-catalog-shell" id="shopx-collection" aria-label="Shop merch catalog">
          <header className="shopx-catalog-head">
            <div className="shopx-catalog-title">
              <p className="shopx-kicker">Official Merch</p>
              <h1>Shop Merch</h1>
            </div>

            <div className="shopx-catalog-controls">
              <div className="shopx-toolbar-meta">
                <p>
                  {isMerchCatalogLoading ? (
                    <span className="shopx-toolbar-loading">Loading saved merch...</span>
                  ) : (
                    <>
                      <strong>{filteredProducts.length}</strong> items in <span>{activeCategoryMeta.label}</span>
                    </>
                  )}
                </p>
              </div>

              <label className="shopx-sort">
                <span>Sort</span>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <button type="button" className="shopx-cart-indicator shopx-cart-trigger" onClick={openCart}>
                <BagIcon />
                <span>Cart ({cartCount})</span>
              </button>

              <button
                type="button"
                className="shopx-secondary-button shopx-editor-trigger"
                onClick={() => setAdminEnabled((current) => !current)}
              >
                {adminEnabled ? "Hide Editor" : "Edit Merch"}
              </button>
            </div>
          </header>

          <div className="shopx-catalog-body">
            <aside className="shopx-catalog-sidebar" aria-label="Shop filters">
              <section className="shopx-filter-panel">
                <div className="shopx-sidebar-block">
                  <h2>{activeCategoryMeta.label}</h2>
                  <div className="shopx-sidebar-links">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        className={`shopx-category-card ${activeCategory === category.id ? "is-active" : ""}`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        <span className="shopx-category-text">{category.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {catalogInfoPanels.map((panel) => {
                  const isOpen = expandedPanel === panel.id;

                  return (
                    <section
                      className={`shopx-filter-group ${isOpen ? "is-open" : ""}`}
                      key={panel.id}
                    >
                      <button
                        type="button"
                        className="shopx-filter-toggle"
                        onClick={() => toggleInfoPanel(panel.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{panel.label}</span>
                        <span className="shopx-filter-caret" aria-hidden="true">
                          {isOpen ? "-" : "+"}
                        </span>
                      </button>
                      {isOpen ? <p className="shopx-filter-copy">{panel.copy}</p> : null}
                    </section>
                  );
                })}
              </section>
            </aside>

            <div className="shopx-catalog-main">
              <div className="shopx-grid-wrap">
                {isMerchCatalogLoading ? (
                  <section className="shopx-grid shopx-grid-loading" id="shopx-grid" aria-label="Loading shop merch">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <article className="shopx-product-card shopx-product-card-loading" key={`loading-${index}`}>
                        <div className="shopx-product-image shopx-skeleton-block" />
                        <div className="shopx-skeleton-copy">
                          <span className="shopx-skeleton-line is-title" />
                          <span className="shopx-skeleton-line is-meta" />
                          <span className="shopx-skeleton-line is-button" />
                        </div>
                      </article>
                    ))}
                  </section>
                ) : (
                  <section className="shopx-grid" id="shopx-grid">
                    {filteredProducts.map((product) => {
                    const quantity = productCartCounts[product.id] ?? 0;
                    const selectedSize = selectedSizes[product.id] ?? "M";
                    const colorOptions = getProductColorOptions(product);
                    const selectedColorId =
                      selectedProductColors[product.id] ?? colorOptions[0]?.id ?? null;
                    const productImageSelectionKey = getProductImageSelectionKey(product.id, selectedColorId);
                    const activeColorOption = getActiveColorOption(product, selectedColorId);
                    const productImages = getActiveProductImages(product, selectedColorId);
                    const selectedImageIndex = Math.min(
                      selectedProductImageIndexes[productImageSelectionKey] ?? 0,
                      Math.max(productImages.length - 1, 0),
                    );
                    const activeProductImage = productImages[selectedImageIndex] ?? product.image;
                    const isUploadedProductImage =
                      typeof activeProductImage === "string" && activeProductImage.startsWith("data:");
                    const saleMeta = getSaleMeta(product);
                    const stockMeta = getStockMeta(product, quantity);
                    const stockCount = stockMeta.stockCount;
                    const isSoldOut = stockMeta.isSoldOut;
                    const isHidden = product.visible === false;
                    const hasLocalOverride = Boolean(productOverrides[product.id]);
                    const addDisabled = isHidden || isSoldOut;
                    const buttonLabel = isHidden
                      ? "Hidden in Preview"
                      : isSoldOut
                        ? "Sold Out"
                        : quantity > 0
                          ? `Added (${quantity})`
                          : "Add to Cart";

                    return (
                      <article
                        className={`shopx-product-card is-${product.accent} ${quantity > 0 ? "is-added" : ""} ${
                          isHidden ? "is-hidden" : ""
                        }`}
                        key={product.id}
                      >
                        <div className="shopx-product-badges">
                          {product.featured ? <span className="shopx-product-ribbon">Most Popular</span> : null}
                          {saleMeta.isOnSale ? (
                            <span className="shopx-product-badge is-sale">Sale {saleMeta.discountPercent}% Off</span>
                          ) : null}
                          <span className={`shopx-product-badge is-status is-${stockMeta.tone}`}>{stockMeta.label}</span>
                          {isHidden ? <span className="shopx-product-badge is-muted">Hidden</span> : null}
                          {hasLocalOverride ? <span className="shopx-product-badge is-admin">Local Edit</span> : null}
                        </div>
                        <div className="shopx-product-image">
                          <Image
                            key={activeProductImage}
                            src={activeProductImage}
                            alt={product.name}
                            fill
                            sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 360px"
                            unoptimized={isUploadedProductImage}
                          />
                          {adminEnabled ? (
                            <button
                              type="button"
                              className="shopx-product-image-delete"
                              onClick={() => removeProductImage(product.id, activeProductImage)}
                              aria-label={`Remove current image for ${product.name}`}
                            >
                              <TrashIcon />
                            </button>
                          ) : null}
                          {productImages.length > 1 ? (
                            <>
                              <button
                                type="button"
                                className="shopx-product-carousel-arrow is-previous"
                                onClick={() =>
                                  cycleProductImage(product.id, "previous", productImages.length, selectedColorId)
                                }
                                aria-label={`Show previous image for ${product.name}`}
                              >
                                <span aria-hidden="true">‹</span>
                              </button>
                              <button
                                type="button"
                                className="shopx-product-carousel-arrow is-next"
                                onClick={() =>
                                  cycleProductImage(product.id, "next", productImages.length, selectedColorId)
                                }
                                aria-label={`Show next image for ${product.name}`}
                              >
                                <span aria-hidden="true">›</span>
                              </button>
                            </>
                          ) : null}
                        </div>
                        {productImages.length > 1 ? (
                          <div className="shopx-product-carousel-dots" aria-label={`${productImages.length} product images`}>
                            {productImages.map((_, imageIndex) => (
                              <button
                                type="button"
                                className={`shopx-product-carousel-dot ${imageIndex === selectedImageIndex ? "is-active" : ""}`}
                                key={`${product.id}-dot-${imageIndex}`}
                                onClick={() => updateSelectedProductImage(product.id, imageIndex, selectedColorId)}
                                aria-label={`Show image ${imageIndex + 1} for ${product.name}`}
                              ></button>
                            ))}
                          </div>
                        ) : null}
                        <div className="shopx-product-copy">
                          <h2>{product.name}</h2>
                          <div className="shopx-price-row">
                            <span>{product.note}</span>
                            <div className="shopx-price-stack">
                              <strong>${getDisplayPrice(product).toFixed(2)}</strong>
                              {saleMeta.isOnSale ? <s>${saleMeta.regularPrice.toFixed(2)}</s> : null}
                            </div>
                          </div>
                          <p className={`shopx-stock-note is-${stockMeta.tone}`}>
                            {stockMeta.detail}
                            {stockCount !== null && adminEnabled ? ` Inventory: ${stockCount}.` : ""}
                          </p>
                          {colorOptions.length > 0 ? (
                            <div className="shopx-color-picker">
                              <span>Color</span>
                              <div className="shopx-color-options">
                                {colorOptions.map((option) => (
                                  <button
                                    type="button"
                                    className={`shopx-color-swatch ${option.id === activeColorOption?.id ? "is-active" : ""}`}
                                    key={`${product.id}-${option.id}`}
                                    onClick={() => updateSelectedProductColor(product.id, option.id)}
                                    aria-label={`${product.name} color ${option.label}`}
                                    title={option.label}
                                  >
                                    <span
                                      className="shopx-color-swatch-chip"
                                      style={{ backgroundColor: option.swatch ?? "#151515" }}
                                      aria-hidden="true"
                                    />
                                    <span className="shopx-color-swatch-label">{option.label}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          {isApparelProduct(product) ? (
                            <label className="shopx-size-picker">
                              <span>Size</span>
                              <select
                                value={selectedSize}
                                onChange={(event) => updateSelectedSize(product.id, event.target.value)}
                              >
                                {apparelSizes.map((size) => (
                                  <option key={size} value={size}>
                                    {size}
                                  </option>
                                ))}
                              </select>
                            </label>
                          ) : null}
                          <button
                            type="button"
                            className="shopx-card-button"
                            onClick={() => addToCart(product)}
                            disabled={addDisabled}
                          >
                            <span>{buttonLabel}</span>
                            <CartIcon />
                          </button>

                          {adminEnabled ? (
                            <div className="shopx-admin-editor">
                              <div className="shopx-admin-grid">
                          <label className="shopx-admin-field">
                            <span>Name</span>
                            <input
                              type="text"
                              value={product.name}
                              onChange={(event) =>
                                updateProductOverride(product.id, { name: event.target.value })
                              }
                            />
                          </label>

                          <label className="shopx-admin-field">
                            <span>Price</span>
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              value={product.price}
                              onChange={(event) =>
                                updateProductOverride(product.id, {
                                  price: Number.parseFloat(event.target.value || "0"),
                                })
                              }
                            />
                          </label>

                          <label className="shopx-admin-field">
                            <span>Sale Price</span>
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              value={product.salePrice ?? ""}
                              placeholder="Leave blank for regular price"
                              onChange={(event) =>
                                updateProductOverride(product.id, {
                                  salePrice:
                                    event.target.value === ""
                                      ? undefined
                                      : Number.parseFloat(event.target.value || "0"),
                                })
                              }
                            />
                          </label>

                          <label className="shopx-admin-field">
                            <span>Note</span>
                            <input
                              type="text"
                              value={product.note}
                              onChange={(event) =>
                                updateProductOverride(product.id, { note: event.target.value })
                              }
                            />
                          </label>

                          <label className="shopx-admin-field">
                            <span>Category</span>
                            <select
                              value={product.category}
                              onChange={(event) =>
                                updateProductOverride(product.id, {
                                  category: event.target.value,
                                  accent:
                                    event.target.value === "giftcards"
                                      ? "purple"
                                      : event.target.value === "collectibles"
                                        ? "orange"
                                        : "green",
                                })
                              }
                            >
                              {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                  {category.label}
                                </option>
                              ))}
                            </select>
                          </label>

                          <label className="shopx-admin-field">
                            <span>Inventory</span>
                            <input
                              type="number"
                              min="0"
                              step="1"
                              value={stockCount ?? ""}
                              placeholder="Unlimited"
                              onChange={(event) =>
                                updateProductOverride(product.id, {
                                  stock:
                                    event.target.value === ""
                                      ? undefined
                                      : Number.parseInt(event.target.value, 10),
                                })
                              }
                            />
                          </label>

                          <label className="shopx-admin-field">
                            <span>Low Stock Alert</span>
                            <input
                              type="number"
                              min="0"
                              step="1"
                              value={product.lowStockThreshold ?? ""}
                              placeholder="Default 4"
                              onChange={(event) =>
                                updateProductOverride(product.id, {
                                  lowStockThreshold:
                                    event.target.value === ""
                                      ? undefined
                                      : Number.parseInt(event.target.value, 10),
                                })
                              }
                            />
                          </label>

                          <div className="shopx-admin-field shopx-admin-field-full">
                            <span>Product Images</span>
                            <button
                              type="button"
                              className="shopx-upload-button"
                              onClick={() => openProductImagePicker(product.id)}
                            >
                              <span>Upload Images</span>
                            </button>
                            <input
                              ref={(node) => {
                                productImageInputRefs.current[product.id] = node;
                              }}
                              className="shopx-hidden-upload-input"
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={(event) => {
                                updateProductImageFiles(product.id, event.target.files);
                                event.target.value = "";
                              }}
                            />
                          </div>
                          {isApparelProduct(product) ? (
                            <div className="shopx-admin-color-editor shopx-admin-field-full">
                              <div className="shopx-admin-color-head">
                                <span>Color Options</span>
                                <button
                                  type="button"
                                  className="shopx-inline-action"
                                  onClick={() => addProductColorOption(product.id)}
                                >
                                  Add Color
                                </button>
                              </div>
                              <div className="shopx-admin-color-list">
                                {colorOptions.map((option) => (
                                  <div className="shopx-admin-color-item" key={`${product.id}-admin-color-${option.id}`}>
                                    <input
                                      type="color"
                                      className="shopx-admin-color-swatch"
                                      value={option.swatch ?? "#8a8a8a"}
                                      onChange={(event) =>
                                        updateProductColorOption(product.id, option.id, {
                                          swatch: event.target.value,
                                        })
                                      }
                                      aria-label={`Choose swatch color for ${option.label}`}
                                    />
                                    <input
                                      type="text"
                                      value={option.label}
                                      onChange={(event) =>
                                        updateProductColorOption(product.id, option.id, {
                                          label: event.target.value,
                                        })
                                      }
                                      placeholder="Color label"
                                    />
                                    <button
                                      type="button"
                                      className="shopx-inline-action"
                                      onClick={() => removeProductColorOption(product.id, option.id)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}
                              </div>

                              <div className="shopx-admin-toggles">
                                <label className="shopx-admin-toggle">
                                  <input
                                    type="checkbox"
                                    checked={Boolean(product.featured)}
                                    onChange={(event) =>
                                      updateProductOverride(product.id, {
                                        featured: event.target.checked,
                                      })
                                    }
                                  />
                                  <span>Featured</span>
                                </label>

                                <label className="shopx-admin-toggle">
                                  <input
                                    type="checkbox"
                                    checked={product.visible !== false}
                                    onChange={(event) =>
                                      updateProductOverride(product.id, {
                                        visible: event.target.checked,
                                      })
                                    }
                                  />
                                  <span>Visible to shoppers</span>
                                </label>
                              </div>

                              <div className="shopx-admin-meta">
                                <span>Changes save instantly to this browser only.</span>
                                <div className="shopx-admin-meta-actions">
                                  <button
                                    type="button"
                                    className="shopx-inline-action"
                                    onClick={() => resetProductOverride(product.id)}
                                  >
                                    Reset Item
                                  </button>
                                  {product.isCustom ? (
                                    <button
                                      type="button"
                                      className="shopx-inline-action"
                                      onClick={() => removeCustomProduct(product.id)}
                                    >
                                      Delete Item
                                    </button>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </article>
                    );
                    })}
                  </section>
                )}
              </div>

              <p className="shopx-disclaimer">
                Merch availability may shift during the season. Online items, limited drops, and gift card
                values are shown before checkout.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`shopx-cart-backdrop ${cartOpen ? "is-open" : ""}`}
        aria-hidden={!cartOpen}
        onClick={closeCart}
      />

      <aside
        className={`shopx-cart-drawer ${cartOpen ? "is-open" : ""}`}
        id="shopx-cart-drawer"
        aria-hidden={!cartOpen}
      >
        <div className="shopx-cart-head">
          <div>
            <p className="shopx-kicker">Merch Cart</p>
            <h2>{cartCount} item{cartCount === 1 ? "" : "s"}</h2>
          </div>
          <button type="button" className="shopx-cart-close" onClick={closeCart} aria-label="Close cart">
            x
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="shopx-cart-empty">
            <h3>Your cart is empty.</h3>
            <p>Add merch from any category and it will stay saved even if you refresh.</p>
          </div>
        ) : null}

        {cartItems.length > 0 && checkoutStep === "cart" ? (
          <>
            <div className="shopx-cart-list">
              {cartItems.map((item) => (
                <article className="shopx-cart-item" key={item.key}>
                  <div className="shopx-cart-item-image">
                    <Image
                      src={getActiveProductImages(item.product, item.colorId)[0] ?? item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="120px"
                    />
                  </div>
                  <div className="shopx-cart-item-copy">
                    <div className="shopx-cart-item-top">
                      <div>
                        <h3>{item.product.name}</h3>
                        <p>
                          {item.colorLabel ? `${item.colorLabel} - ` : ""}
                          {item.size ? `Size ${item.size} - ` : ""}
                          {item.product.note}
                        </p>
                      </div>
                      <strong>${item.lineTotal.toFixed(2)}</strong>
                    </div>

                    <div className="shopx-cart-item-actions">
                      <div className="shopx-qty-controls" aria-label={`Quantity controls for ${item.product.name}`}>
                        <button type="button" onClick={() => decrementCartItem(item.key)} aria-label={`Decrease quantity for ${item.product.name}`}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => incrementCartItem(item.key)} aria-label={`Increase quantity for ${item.product.name}`}>
                          +
                        </button>
                      </div>

                      <button type="button" className="shopx-remove-button" onClick={() => removeCartItem(item.key)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="shopx-cart-summary">
              <div className="shopx-cart-summary-row">
                <span>Subtotal</span>
                <strong>${cartSubtotal.toFixed(2)}</strong>
              </div>
              <p>Shipping, taxes, and payment processing would be calculated during a real checkout integration.</p>
              <div className="shopx-cart-summary-actions">
                <button type="button" className="shopx-secondary-button" onClick={clearCart}>
                  Clear Cart
                </button>
                <button type="button" className="shopx-primary-button" onClick={() => setCheckoutStep("checkout")}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        ) : null}

        {cartItems.length > 0 && checkoutStep === "checkout" ? (
          <form className="shopx-checkout-form" onSubmit={handleCheckoutSubmit}>
            <div className="shopx-checkout-top">
              <button type="button" className="shopx-inline-action" onClick={() => setCheckoutStep("cart")}>
                Back to Cart
              </button>
              <div className="shopx-cart-summary-row">
                <span>Subtotal</span>
                <strong>${cartSubtotal.toFixed(2)}</strong>
              </div>
            </div>

            <label className="shopx-field">
              <span>Full Name</span>
              <input
                type="text"
                value={checkoutForm.fullName}
                onChange={(event) => setCheckoutForm((current) => ({ ...current, fullName: event.target.value }))}
                required
              />
            </label>

            <label className="shopx-field">
              <span>Email</span>
              <input
                type="email"
                value={checkoutForm.email}
                onChange={(event) => setCheckoutForm((current) => ({ ...current, email: event.target.value }))}
                required
              />
            </label>

            <label className="shopx-field">
              <span>Order Notes</span>
              <textarea
                rows="4"
                value={checkoutForm.notes}
                onChange={(event) => setCheckoutForm((current) => ({ ...current, notes: event.target.value }))}
                placeholder="Sizing requests, gift notes, or pickup questions"
              />
            </label>

            <p className="shopx-checkout-note">
              This is a functional checkout step for the site experience, but it still needs a payment provider like Stripe, Shopify, or Square to process real orders.
            </p>

            <button type="submit" className="shopx-primary-button">
              Submit Checkout Details
            </button>
          </form>
        ) : null}

        {cartItems.length > 0 && checkoutStep === "confirmation" ? (
          <div className="shopx-cart-empty shopx-cart-confirmation">
            <h3>Checkout details captured.</h3>
            <p>
              {checkoutForm.fullName}, this demo checkout flow is now ready for payment integration.
              Connect Stripe, Shopify, or Square next to turn this into a live merch store.
            </p>
            <div className="shopx-cart-summary-actions">
              <button type="button" className="shopx-secondary-button" onClick={() => setCheckoutStep("cart")}>
                Back to Cart
              </button>
              <button type="button" className="shopx-primary-button" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          </div>
        ) : null}
      </aside>
    </section>
  );
}
