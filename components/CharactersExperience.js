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
    alt: "Mothman character banner",
    name: "Mothman",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/the-creature-banner-20260720.jpg",
    alt: "The Creature character banner",
    name: "The Creature",
    fit: "cover",
    position: "center 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Nova Kaine.jpg",
    alt: "Nova Kaine character banner",
    name: "Nova Kaine",
    fit: "cover",
    position: "center 22%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Rust-2026.jpg",
    alt: "Rust character banner",
    name: "Rust",
    fit: "cover",
    position: "center 18%",
    quality: 100,
  },
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
  {
    src: "/assets/character-banners/Twigsaw-2026.jpg",
    alt: "Twigsaw character banner",
    name: "Twigsaw",
    fit: "cover",
    position: "60% 32%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Ripr.jpg",
    alt: "Ripr character banner",
    name: "Ripr",
    fit: "cover",
    position: "center 24%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/The-Diver-2026.jpg",
    alt: "The Diver character banner",
    name: "The Diver",
    fit: "cover",
    position: "center 24%",
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
    src: "/assets/character-banners/Eden-2026.jpg",
    alt: "Eden character banner",
    name: "Eden",
    fit: "cover",
    position: "center 36%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Gravedigger-2026.jpg",
    alt: "Grave Digger character banner",
    name: "Grave Digger",
    fit: "cover",
    position: "center center",
    quality: 100,
  },
  { src: "/assets/character-banners/Precious.jpg", alt: "Precious character banner", name: "Precious", fit: "cover", position: "68% center", quality: 100 },
  {
    src: "/assets/character-banners/Pumpkin-King-2026.jpg",
    alt: "Pumpkin King character banner",
    name: "Pumpkin King",
    fit: "cover",
    position: "39% center",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Squeeks-2026.jpg",
    alt: "Squeeks character banner",
    name: "Squeeks",
    fit: "cover",
    position: "center 20%",
    quality: 100,
  },
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
    src: "/assets/character-banners/Headless-Helga-2026.jpg",
    alt: "Headless Helga character banner",
    name: "Headless Helga",
    fit: "cover",
    position: "center 38%",
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
  {
    src: "/assets/character-banners/The-Sheriff-2026.jpg",
    alt: "The Sheriff character banner",
    name: "The Sheriff",
    fit: "cover",
    position: "center 34%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Fadris-2026.jpg",
    alt: "Fadris character banner",
    name: "Fadris",
    fit: "cover",
    position: "35% 30%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Boogeyman-2026.jpg",
    alt: "Boogeyman character banner",
    name: "Boogeyman",
    fit: "cover",
    position: "45% 24%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Sue-E-2026.jpg",
    alt: "Sue E. character banner",
    name: "Sue E.",
    fit: "cover",
    position: "67% center",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Mad-Professor-2026.jpg",
    alt: "Mad Professor character banner",
    name: "Mad Professor",
    fit: "cover",
    position: "63% 28%",
    quality: 100,
  },
  {
    src: "/assets/character-banners/Cthulhu-2026.jpg",
    alt: "Cthulhu character banner",
    name: "Cthulhu",
    fit: "cover",
    position: "52% 22%",
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
                  sizes="(max-width: 640px) 88vw, (max-width: 900px) 44vw, (max-width: 1280px) 31vw, 25vw"
                  quality={image.quality ?? 100}
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
