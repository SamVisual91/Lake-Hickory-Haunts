import Image from "next/image";

const characterCarouselImages = [
  {
    src: "/assets/character-banners/Boss the Clown.jpg",
    alt: "Boss the Clown character banner",
    name: "Boss the Clown",
    fit: "cover",
    position: "center 28%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Dr Death.jpg",
    alt: "Dr. Death character banner",
    name: "Dr. Death",
    fit: "cover",
    position: "center 38%",
  },
  {
    src: "/assets/character-banners/Kluath.jpg",
    alt: "Kluath character banner",
    name: "Kluath",
    fit: "cover",
    position: "center 40%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Shepherd.jpg",
    alt: "Shepherd character banner",
    name: "Shepherd",
    fit: "cover",
    position: "center 26%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Vodyanoi.jpg",
    alt: "Vodyanoi character banner",
    name: "Vodyanoi",
    fit: "cover",
    position: "center 34%",
  },
  {
    src: "/assets/character-banners/Grim.jpg",
    alt: "Grim character banner",
    name: "Grim",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Hoss.jpg",
    alt: "Hoss character banner",
    name: "Hoss",
    fit: "cover",
    position: "center 32%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Lilith.jpg",
    alt: "Lilith character banner",
    name: "Lilith",
    fit: "cover",
    position: "center 32%",
  },
  {
    src: "/assets/character-banners/Pirate Captain.jpg",
    alt: "Pirate Captain character banner",
    name: "Pirate Captain",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Rat.jpg",
    alt: "Rat character banner",
    name: "Rat",
    fit: "cover",
    position: "center 32%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Moth Man.jpg",
    alt: "Moth Man character banner",
    name: "Moth Man",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  { src: "/assets/character-banners/The Creature.png", alt: "The Creature character banner", name: "The Creature" },
  {
    src: "/assets/character-banners/Nova Kaine.jpg",
    alt: "Nova Kaine character banner",
    name: "Nova Kaine",
    fit: "cover",
    position: "center 22%",
    quality: 100,
  },
  { src: "/assets/character-banners/Rust.png", alt: "Rust character banner", name: "Rust" },
  {
    src: "/assets/character-banners/Nurse Delilah.jpg",
    alt: "Nurse Delilah character banner",
    name: "Nurse Delilah",
    fit: "cover",
    position: "center 24%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Sherbert.jpg",
    alt: "Sherbert character banner",
    name: "Sherbert",
    fit: "cover",
    position: "center 34%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Bloody Moira.jpg",
    alt: "Bloody Moira character banner",
    name: "Bloody Moira",
    fit: "cover",
    position: "center 34%",
  },
  { src: "/assets/character-banners/Twigsaw.png", alt: "Twigsaw character banner", name: "Twigsaw" },
  {
    src: "/assets/character-banners/Ripr.jpg",
    alt: "Ripr character banner",
    name: "Ripr",
    fit: "cover",
    position: "center 24%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/The Diver.jpg",
    alt: "The Diver character banner",
    name: "The Diver",
    fit: "cover",
    position: "center 28%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Wolfy.jpg",
    alt: "Wolfy character banner",
    name: "Wolfy",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Eden.jpg",
    alt: "Eden character banner",
    name: "Eden",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Grave Digger.jpg",
    alt: "Grave Digger character banner",
    name: "Grave Digger",
    fit: "cover",
    position: "center 28%",
    quality: 100,
  },
  { src: "/assets/character-banners/Precious.png", alt: "Precious character banner", name: "Precious" },
  { src: "/assets/character-banners/Pumpkin King.png", alt: "Pumpkin King character banner", name: "Pumpkin King" },
  { src: "/assets/character-banners/Squeeks.png", alt: "Squeeks character banner", name: "Squeeks" },
  {
    src: "/assets/character-banners/Gouda.jpg",
    alt: "Gouda character banner",
    name: "Gouda",
    fit: "cover",
    position: "center 34%",
  },
  {
    src: "/assets/character-banners/Dizzy.jpg",
    alt: "Dizzy character banner",
    name: "Dizzy",
    fit: "cover",
    position: "center center",
  },
  {
    src: "/assets/character-banners/Skorn.jpg",
    alt: "Skorn character banner",
    name: "Skorn",
    fit: "cover",
    position: "center 28%",
  },
  {
    src: "/assets/character-banners/Abomination.jpg",
    alt: "Abomination character banner",
    name: "Abomination",
    fit: "cover",
    position: "center 30%",
  },
  {
    src: "/assets/character-banners/Milo.png",
    alt: "Milo character banner",
    name: "Milo",
    fit: "cover",
    position: "center 32%",
  },
  {
    src: "/assets/character-banners/Karnevil.jpg",
    alt: "Karnevil character banner",
    name: "Karnevil",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/The Fisherman.jpg",
    alt: "The Fisherman character banner",
    name: "The Fisherman",
    fit: "cover",
    position: "center 28%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Sea Hag.jpg",
    alt: "Sea Hag character banner",
    name: "Sea Hag",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Guppy.jpg",
    alt: "Guppy character banner",
    name: "Guppy",
    fit: "cover",
    position: "center 28%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Pumpkin.jpg",
    alt: "Pumpkin character banner",
    name: "Pumpkin",
    fit: "cover",
    position: "center 26%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/The Miners.jpg",
    alt: "The Miners character banner",
    name: "The Miners",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Mummy.jpg",
    alt: "Mummy character banner",
    name: "Mummy",
    fit: "cover",
    position: "center 28%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Mutant.jpg",
    alt: "Mutant character banner",
    name: "Mutant",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Headless Helga.jpg",
    alt: "Headless Helga character banner",
    name: "Headless Helga",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Cupcake.jpg",
    alt: "Cupcake character banner",
    name: "Cupcake",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
];

const placeholderBanners = Array.from({ length: 0 }, (_, index) => ({
  id: `placeholder-${index + 1}`,
  name: `Open Slot ${String(index + 1).padStart(2, "0")}`,
  placeholder: true,
}));

const characterBannerItems = [...characterCarouselImages, ...placeholderBanners];

export function CharactersExperience() {
  return (
    <main className="page-shell character-banner-page">
      <section className="character-banner-hero" id="character-banner-hero">
        <div className="character-banner-headline">
          <Image
            src="/assets/meet-the-icons.png"
            alt="Meet the Icons"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 900px) 82vw, 70vw"
          />
        </div>
      </section>

      <div className="character-banner-scroll">
        <span>Meet the Roster</span>
        <i aria-hidden="true" />
      </div>

      <section className="character-banner-stack" aria-label="Character banner gallery">
        {characterBannerItems.map((image, index) => (
          <article
            className={`character-banner-card ${image.placeholder ? "is-placeholder" : ""}`}
            key={image.src ?? image.id}
          >
            <div className="character-banner-card-media">
              {image.placeholder ? (
                <div className="character-banner-card-placeholder" aria-label={`${image.name} placeholder`}>
                  <span className="character-banner-card-placeholder-kicker">Placeholder</span>
                  <strong>{image.name}</strong>
                  <small>Drop in a future character banner here.</small>
                </div>
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 900px) 44vw, (max-width: 1280px) 30vw, 22vw"
                  quality={image.quality}
                  priority={index < 6}
                  className={image.fit === "cover" ? "character-banner-image-cover" : "character-banner-image-contain"}
                  style={image.position ? { objectPosition: image.position } : undefined}
                />
              )}
              <span className="character-banner-card-name">{image.name}</span>
            </div>
          </article>
        ))}
      </section>

      <div className="attraction-browser-disclaimer">
        <p>
          Lake Hickory Haunts is an ever-evolving attraction experience. Attractions,
          scenes, characters, show elements, and event details may be updated, adjusted,
          or changed throughout the season as the experience continues to grow.
        </p>
      </div>
    </main>
  );
}
