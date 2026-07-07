const defaultGallery = [
  { title: "Scene One", className: "gallery-theme-hallway", caption: "Atmospheric attraction scene" },
  { title: "Scene Two", className: "gallery-theme-worker", caption: "Creature encounter moment" },
  { title: "Scene Three", className: "gallery-theme-doll", caption: "Close-up horror detail" },
  { title: "Scene Four", className: "gallery-theme-hooks", caption: "Set dressing and props" },
  { title: "Scene Five", className: "gallery-theme-tanks", caption: "Final room atmosphere" },
];

export const attractions = [
  {
    id: 1,
    slug: "nightmare-factory",
    title: "Nightmare Factory: Unleashed",
    lines: ["NIGHTMARE FACTORY", "UNLEASHED"],
    shortTitle: "Nightmare Factory: Unleashed",
    subtitle: null,
    tagline: "A terrifying Nightmare Horror Experience",
    theme: "smoky industrial nightmare factory with smokestacks",
    className: "theme-nightmare-factory",
    detailThemeClass: "detail-theme-nightmare-factory",
    heroBannerImage: "/assets/nightmare-factory-hero-banner.png",
    detailSignLabel: "Nightmare Factory",
    primaryActionLabel: "Buy Tickets",
    primaryActionHref: "/tickets/general-admission",
    detailVideoEmbedUrl: "https://www.youtube.com/embed/buuHs5spNvc?controls=1&rel=0&modestbranding=1&playsinline=1",
    description: [
      { type: "title", text: "Experience the Terror" },
      "Within the walls of an abandoned haunted factory, Dr. Death and his team of evil medicine practitioners have created a specially formulated serum known as NR2! The formula has been perfected throughout many years of trial and error. The essential portion of NR2 has been created by contracting the most terrifying fear experiences from past victims and combining them all into a physical plasmid substance!",
      { type: "title", text: "Horrifying Hallucinations" },
      "Upon entering the Nightmare Factory, patients are showered by the extremely potent NR2, immediately bringing nightmare hallucinations to life within the in a horrifying realm of the nightmare Factory! The remarkable NR2 serum has enabled Dr Death and Lake Hickory Haunts to turn your own fears and nightmares into a reality! Prepare to face your nightmares and many unknown terrors that await within the inescapable four-dimensional reality, known as NIGHTMARE FACTORY: UNLEASHED! Come Experience Nightmare Factory: Unleashed and 12 other attractions at Lake Hickory Haunts!",
    ],
    duration: "Dr. Death",
    attractionType: "The Factory",
    ageGuidance: "13+",
    fearRating: 5,
    gallery: [
      {
        title: "Unleashed Sign",
        className: "gallery-theme-hallway",
        cardClassName: "attraction-detail-gallery-card-logo",
        hideOverlay: true,
        imageSrc: "/assets/nightmare-factory-unleashed-logo-bottom.jpg",
        caption: "Nightmare Factory Unleashed attraction design",
      },
      {
        title: "Factory Entrance",
        className: "gallery-theme-worker",
        imageSrc: "/assets/nightmare-gallery-2-replacement.png",
        caption: "Guests gather outside the neon-lit Nightmare Factory facade",
      },
      {
        title: "Green Room Hall",
        className: "gallery-theme-doll",
        imageSrc: "/assets/nightmare-gallery-3-replacement.png",
        caption: "A tilted industrial hallway glowing green deep inside the factory",
      },
      {
        title: "Lab Shelves",
        className: "gallery-theme-hooks",
        imageSrc: "/assets/nightmare-gallery-4.png",
        caption: "Nightmare Factory lab room lined with shelves and glowing bottles",
      },
      {
        title: "Surgery Chamber",
        className: "gallery-theme-tanks",
        imageSrc: "/assets/nightmare-gallery-5.png",
        caption: "Bloody operating chamber inside the factory",
      },
      {
        title: "Operating Theater",
        className: "gallery-theme-operating",
        imageSrc: "/assets/nightmare-gallery-6.png",
        caption: "A cold operating room lined with body drawers and surgical machinery",
      },
      {
        title: "Control Furnace",
        className: "gallery-theme-furnace",
        imageSrc: "/assets/nightmare-gallery-7.png",
        caption: "Rusty gauges and warning lights glow above the factory furnace",
      },
      {
        title: "Steel Corridor",
        className: "gallery-theme-corridor",
        imageSrc: "/assets/nightmare-gallery-8.png",
        caption: "A blue-lit corridor of steel panels and sealed industrial chambers",
      },
      {
        title: "Serum Stockroom",
        className: "gallery-theme-serum",
        imageSrc: "/assets/nightmare-gallery-9.png",
        caption: "Shelves of glowing chemicals and bottles crowd the factory stockroom",
      },
      {
        title: "Burn Ward",
        className: "gallery-theme-burn",
        imageSrc: "/assets/nightmare-gallery-10.png",
        caption: "A scorched body lies under brutal red light inside the Nightmare Factory",
      },
    ],
  },
  {
    id: 2,
    slug: "lair-of-the-undead",
    title: "Lair of the Undead",
    lines: ["LAIR OF THE", "UNDEAD"],
    shortTitle: "Lair of the Undead",
    subtitle: "The Grave Stirs",
    tagline: "A thrilling Graveyard Adventure Of Horror",
    theme: "dark forest zombie lair with glowing green eyes",
    className: "theme-lair-undead",
    detailThemeClass: "detail-theme-lair-undead",
    heroBannerImage: "/assets/lair-undead-hero-banner.png",
    detailSignLabel: "Undead Lair",
    description: [
      { type: "title", text: "A Realm of Blackness" },
      "The Lair of the Undead is a terrifying attraction where the souls of the undead wander aimlessly in an eternal abyss of darkness and despair. This nightmarish realm is their eternity, and they will stop at nothing to escape their torment.",
      "The undead souls lurk in the shadows, waiting for unsuspecting victims to cross their paths. It’s as if the very essence of evil resides within these walls.",
      { type: "title", text: "Can You Make It Through?" },
      "Remember, you are the last hope for these tormented souls. They yearn for another chance at life, and they will stop at nothing to achieve it.",
      "Will you emerge victorious, escaping the clutches of the undead and returning to the safety of the living? Or will you become trapped in this nightmarish realm forever?",
    ],
    duration: "Grim Reaper",
    attractionType: "Nightmarish Realm",
    ageGuidance: "13+",
    fearRating: 4,
    scareMeterPercent: 75,
    gallery: [
      {
        title: "Undead Lair",
        className: "gallery-undead-title",
        imageSrc: "/assets/lair-gallery-0.png",
        caption: "The blood-red Lair of the Undead title art with glowing-eyed undead closing in from the darkness",
      },
      {
        title: "Crypt Gate",
        className: "gallery-undead-gate",
        imageSrc: "/assets/lair-gallery-6.jpg",
        caption: "The glowing Lair of the Undead entrance surrounded by coffins and restless spirits",
      },
      {
        title: "Coffin Stack",
        className: "gallery-undead-stack",
        imageSrc: "/assets/lair-gallery-7.jpg",
        caption: "A towering stack of burial coffins lit by a burning lantern inside the lair",
      },
      {
        title: "Open Grave",
        className: "gallery-undead-graveglow",
        imageSrc: "/assets/lair-gallery-8.jpg",
        caption: "An open casket scene glowing purple through the fog and tangled branches",
      },
      {
        title: "Mausoleum Walk",
        className: "gallery-undead-mausoleum",
        imageSrc: "/assets/lair-gallery-9.jpg",
        caption: "Neon-soaked mausoleum walls and graveyard pathways twisting through the undead realm",
      },
      {
        title: "Hearse Hall",
        className: "gallery-undead-hearse",
        imageSrc: "/assets/lair-gallery-10.jpg",
        caption: "A haunted hearse waits in the blue-lit corridor under hanging funeral moss",
      },
      {
        title: "Restless Souls",
        className: "gallery-undead-souls",
        imageSrc: "/assets/lair-gallery-11.jpg",
        caption: "Two undead figures rise beside a hearse beneath electric violet moonlight",
      },
      {
        title: "Burial Descent",
        className: "gallery-undead-descent",
        imageSrc: "/assets/lair-gallery-12.jpg",
        caption: "A red-lit coffin corridor dropping deeper into the skull-lined burial chamber",
      },
    ],
  },
  {
    id: 3,
    slug: "voodoo-bayou",
    title: "Voodoo Bayou",
    lines: ["VOODOO", "BAYOU"],
    shortTitle: "Voodoo Bayou",
    subtitle: "Swamp Ritual",
    tagline: "A Terrifying Treetop Adventure",
    theme: "voodoo skulls, candles, swamp ritual",
    className: "theme-voodoo-bayou",
    detailThemeClass: "detail-theme-voodoo-bayou",
    heroBannerImage: "/assets/voodoo-bayou-hero-banner.png",
    detailSignLabel: "Voodoo Bayou",
    detailVideoSrc: "/assets/voodoo-bayou-trailer.mp4",
    detailVideoType: "video/mp4",
    description: [
      { type: "title", text: "Experience Powerful Witchcraft" },
      "A tribe of Voodoo Witch Doctors inhabits the treetops on the bayou of Lake Hickory Haunts! Be cautious – No matter who it is, they can’t be trusted! The power of their witchcraft and sorcery is not to be reckoned or bartered with! The, now undead, pirates of Shipwrecked learned that the hard way on a dark and stormy night many years ago…",
    ],
    duration: "Papa Legba",
    attractionType: "SWAMP MAZE / OUTDOOR",
    ageGuidance: "13+",
    fearRating: 4,
    gallery: [
      {
        title: "Fog Walkway",
        className: "gallery-bayou-shrine",
        imageSrc: "/assets/voodoo-gallery-1-replacement.jpg",
        caption: "A fog-soaked treetop walkway lit by blazing orange and violet swamp light",
      },
      {
        title: "Bayou Bridge",
        className: "gallery-bayou-mask",
        imageSrc: "/assets/voodoo-gallery-2-replacement.jpg",
        caption: "A vertical view of the swamp bridge glowing purple and green through the trees",
      },
      {
        title: "Lantern Trail",
        className: "gallery-bayou-dock",
        imageSrc: "/assets/voodoo-gallery-3-replacement.jpg",
        caption: "A lantern-lit bayou passage with shadowy figures forming in the haze",
      },
      {
        title: "Bone Shack",
        className: "gallery-bayou-bones",
        imageSrc: "/assets/voodoo-gallery-4-replacement.jpg",
        caption: "A shrine room packed with hanging bones, relics, and ritual remains",
      },
      {
        title: "Candle Corner",
        className: "gallery-bayou-circle",
        imageSrc: "/assets/voodoo-gallery-5-replacement.jpg",
        caption: "A towering vertical scene of skulls, candles, vines, and a seated swamp relic",
      },
      {
        title: "Parlor Ritual",
        className: "gallery-bayou-parlor",
        imageSrc: "/assets/voodoo-gallery-6-replacement.jpg",
        caption: "A candle-filled Voodoo parlor layered with relics, roots, and eerie blue window light",
      },
      {
        title: "Bayou Organ",
        className: "gallery-bayou-organ",
        imageSrc: "/assets/voodoo-gallery-7-replacement.jpg",
        caption: "A haunted organ room glowing with candles deep inside the bayou cabin",
      },
    ],
  },
  {
    id: 4,
    slug: "shipwrecked",
    title: "Shipwrecked",
    lines: ["SHIPWRECKED"],
    shortTitle: "Shipwrecked",
    subtitle: "Sunken Terror",
    tagline: "An Exciting Adventure at Sea",
    theme: "haunted broken ship in stormy ocean",
    className: "theme-shipwrecked",
    detailThemeClass: "detail-theme-shipwrecked",
    heroBannerImage: "/assets/shipwrecked-hero-banner.png",
    detailSignLabel: "Shipwrecked",
    description: [
      { type: "title", text: "Stormy Secrets at Sea" },
      "On a dark and stormy night many years ago, a crew of pirates were sailing near the shores of Lake Hickory Haunts. As the pirates approached the shore, the storm intensified under the spells cast by the voodoo witches of the bayou, until suddenly, a massive Kraken erupted out of the water, devouring the entire crew of pirates, and demolishing their ship! Afterward, the storm ceased, and the waters were calm. Until one night, many months later, a massive cyclone formed in the water! Suddenly, a new ghastly pirate ship sailed out of the cyclone, full of the same crew of pirates... except now, they were soulless, ghostly versions of their former selves.",
      { type: "title", text: "Escape from the Vengeful Crew" },
      "Now, this vicious crew of undead pirates has laid claim to a part of Lake Hickory Haunts with a brand new town full of stolen treasure, precious loot, and traps for any outsider who dares to enter... Their new and sea-worthy ship is docked nearby in the harbor in case of any trouble. Beware, these pirates are skeptical of all who enter and are not to be bartered with! Can you survive Shipwrecked, or will you be caught in the crossfire and made to walk the plank of the ship?",
    ],
    duration: "9 - 12 MIN",
    attractionType: "WALKTHROUGH / SCENIC MAZE",
    ageGuidance: "10+",
    fearRating: 5,
    scareMeterPercent: 90,
    gallery: [
      {
        title: "Undead Captain",
        className: "gallery-ship-deck",
        cardClassName: "attraction-detail-gallery-card-logo",
        hideOverlay: true,
        imageSrc: "/assets/shipwrecked-logo-bottom.jpg",
        caption: "Shipwrecked attraction design",
      },
      {
        title: "Harbor Entrance",
        className: "gallery-ship-hold",
        imageSrc: "/assets/ship-gallery-2-replacement.jpg",
        caption: "A crazed sailor lunging forward through the ship’s timbers",
      },
      {
        title: "Smuggler Passage",
        className: "gallery-ship-rigging",
        imageSrc: "/assets/ship-gallery-3-replacement.jpg",
        caption: "A haunted passage of nets, timbers, and cargo lit in icy blue and amber",
      },
      {
        title: "Red Tide Path",
        className: "gallery-ship-captain",
        imageSrc: "/assets/ship-gallery-4-replacement.png",
        caption: "A fiery path through the wreck under crimson sky and ghostly purple light",
      },
      {
        title: "Netted Alley",
        className: "gallery-ship-sea",
        imageSrc: "/assets/ship-gallery-5-replacement.png",
        caption: "A towering vertical alley of sails, nets, and lantern glow inside the wreck",
      },
      {
        title: "Drowned Crew",
        className: "gallery-ship-drowned",
        imageSrc: "/assets/ship-gallery-6-replacement.png",
        caption: "A shadowed pirate figure stalks the Shipwrecked harbor under toxic light",
      },
    ],
  },
  {
    id: 5,
    slug: "aquaphobia",
    title: "Aquaphobia",
    lines: ["AQUAPHOBIA"],
    shortTitle: "Aquaphobia",
    subtitle: "Drown in Fear",
    tagline: "A Thrilling Waterfront Adventure of Horror",
    theme: "underwater horror, drowning hand, green water",
    className: "theme-aquaphobia",
    detailThemeClass: "detail-theme-aquaphobia",
    heroBannerImage: "/assets/aquaphobia-hero-banner.png",
    detailSignLabel: "Aquaphobia",
    detailVideoSrc: "/assets/aquaphobia-trailer.mp4",
    detailVideoType: "video/mp4",
    description: [
      { type: "title", text: "Unparalleled Horror Experiences" },
      "Years ago, a prosperous fishing village on the shores of Lake Hickory Haunts ended up destroying the lake's ecosystem by taking what they could get their greedy hands on while dumping more and more trash into the waters. A vicious water monster known as Vodyanoi was FURIOUS. After destroying their dam, flooding the village, and dragging many villagers into his underwater dwelling to serve him as slaves, the village has risen from the depths!",
      { type: "title", text: "Innovative Horror Attraction" },
      "Aquaphobia at Lake Hickory Haunts is not just an attraction; it's an experience. Our innovative horror attraction is filled with surprises, suspense, and storytelling to create a truly unique and thrilling adventure. Our waterfront feature brings horror to life in a way no other attraction has done before.",
      "If you're able to make it across the floating dock and enter the village you'll encounter seductive sirens, possessed fishermen, sea witches, and of course... Vodyanoi.",
    ],
    duration: "Vodyanoi",
    attractionType: "Sunken Village",
    ageGuidance: "12+",
    fearRating: 5,
    scareMeterPercent: 90,
    gallery: [
      { title: "Drowning Hall", className: "gallery-aqua-hall", imageSrc: "/assets/aquaphobia-gallery-1.png", caption: "A drowning soul surfacing from the black water" },
      { title: "Flood Dock", className: "gallery-aqua-hand", imageSrc: "/assets/aquaphobia-gallery-2-replacement.jpg", caption: "A glowing dock and flooded railings cutting through the dark water village" },
      { title: "Aquaphobia Sign", className: "gallery-aqua-tank", imageSrc: "/assets/aquaphobia-gallery-3-replacement.jpg", caption: "The Aquaphobia sign looms over the entrance like a warning from the deep" },
      { title: "Village Walk", className: "gallery-aqua-depths", imageSrc: "/assets/aquaphobia-gallery-4-replacement.jpg", caption: "A haunted village path lit by blue water glow and burning lanterns" },
      { title: "Seafood Alley", className: "gallery-aqua-surface", imageSrc: "/assets/aquaphobia-gallery-5-replacement.jpg", caption: "A twisting lane of shoreline shacks washed in orange and blue light" },
      { title: "Waterside Rise", className: "gallery-aqua-rise", imageSrc: "/assets/aquaphobia-gallery-6-replacement.png", caption: "The drowned village rises above the waterline in blazing purple and gold haze" },
      { title: "Mist Harbor", className: "gallery-aqua-harbor", imageSrc: "/assets/aquaphobia-gallery-7-replacement.png", caption: "A misty harbor scene with boats, cabins, and ghostly waterfront reflections" },
      { title: "Dock House", className: "gallery-aqua-dockhouse", imageSrc: "/assets/aquaphobia-gallery-8-replacement.png", caption: "A waterside shack glows above the dock beneath purple fog and blue lantern light" },
      { title: "Flooded Turn", className: "gallery-aqua-turn", imageSrc: "/assets/aquaphobia-gallery-9-replacement.png", caption: "A tall flooded corner of the village wrapped in nets, timber, and lantern glow" },
    ],
  },
  {
    id: 6,
    slug: "extinction",
    title: "Extinction",
    lines: ["EXTINCTION"],
    shortTitle: "Extinction",
    subtitle: "Prime Domination",
    tagline: "A Chilling and Otherworldly Experience",
    theme: "roaring dinosaur monster in ruined city",
    className: "theme-extinction",
    detailThemeClass: "detail-theme-extinction",
    heroBannerImage: "/assets/extinction-hero-banner.png",
    detailSignLabel: "Extinction",
    detailVideoSrc: "/assets/extinction-trailer.mp4",
    detailVideoType: "video/mp4",
    description: [
      { type: "title", text: "Adventure into the Abyss" },
      "Welcome to Extinction 2.0, a bone-chilling haunted attraction like no other. Deep beneath the murky waters of Lake Hickory, a powerful and superior alien hybrid named Kluath has emerged from the abyss. Its insidious goal: world domination through the annihilation of the human race.",
      "In the depths of its sea laboratory, Kluath conducts monstrous experiments, combining humans, sea creatures, and other abominations to create a mutated army destined to bring about the downfall of mankind. The sheer power and unstoppable force of Kluath are unimaginable.",
      { type: "title", text: "Will You Join the Killing Machine?" },
      "As you step into Extinction 2.0, you have a choice to make. Will you join Kluath's killing machine and become a part of its malevolent plan? Or will you face the terrifying reality of extinction?",
      "Prepare yourself for an immersive experience like no other. The haunting atmosphere will engulf you as you navigate through Kluath's lair of horrors.",
      "Enter if you dare, but be warned, the fate of mankind hangs in the balance.",
    ],
    duration: "Kluath",
    attractionType: "The Abyss",
    ageGuidance: "13+",
    fearRating: 5,
    gallery: [
      { title: "Lab Breach", className: "gallery-ext-lab", imageSrc: "/assets/extinction-gallery-1.png", caption: "Kluath emerges through the glowing lab mist" },
      { title: "Extinction Gate", className: "gallery-ext-eye", imageSrc: "/assets/extinction-gallery-2-replacement.png", caption: "The Extinction facility blazes with neon warning lights and toxic vapor" },
      { title: "Lab Exterior", className: "gallery-ext-city", imageSrc: "/assets/extinction-gallery-3-replacement.jpg", caption: "A wider view of the extinction lab glowing green, gold, and violet through the fog" },
      { title: "Waste Chamber", className: "gallery-ext-specimen", imageSrc: "/assets/extinction-gallery-4-replacement.jpg", caption: "Radioactive barrels and ruptured machinery ooze through the alien chamber" },
      { title: "Specimen Pod", className: "gallery-ext-roar", imageSrc: "/assets/extinction-gallery-5-replacement.jpg", caption: "An alien specimen waits in its pod beneath green lab light" },
      { title: "Toxic Corridor", className: "gallery-ext-toxic", imageSrc: "/assets/extinction-gallery-6-replacement.jpg", caption: "A tall corridor of glowing tanks, pipes, and chemical waste deep in the lab" },
      { title: "Biohazard Hall", className: "gallery-ext-biohazard", imageSrc: "/assets/extinction-gallery-7-replacement.jpg", caption: "A shadowed figure stalks the biohazard hall under violent neon lab colors" },
      { title: "Blue Chamber", className: "gallery-ext-chamber", imageSrc: "/assets/extinction-gallery-8-replacement.jpg", caption: "A mist-filled chamber glows blue around strange equipment and unseen creatures" },
      { title: "Alien Pod", className: "gallery-ext-pod", imageSrc: "/assets/extinction-gallery-9-replacement.jpg", caption: "A contained alien lurks beside warning lights and radioactive storage units" },
      { title: "Predator Close-Up", className: "gallery-ext-predator", imageSrc: "/assets/extinction-gallery-10-replacement.png", caption: "A monstrous alien predator emerges through green fog in a full-height portrait" },
    ],
  },
  {
    id: 7,
    slug: "aftermath",
    title: "Aftermath",
    lines: ["AFTERMATH"],
    shortTitle: "Aftermath",
    subtitle: "The inhabitants",
    tagline: "A Post-Apocalyptic Nightmare",
    theme: "post-apocalyptic gas mask figure in ruined city",
    className: "theme-aftermath",
    detailThemeClass: "detail-theme-aftermath",
    heroBannerImage: "/assets/aftermath-hero-banner.png",
    detailSignLabel: "Aftermath",
    detailVideoSrc: "/assets/aftermath-the-survivors.mp4",
    detailVideoType: "video/mp4",
    description: [
      { type: "title", text: "Aggressive Survivalists" },
      "Those who survive Extinction must inhabit the city of Aftermath, a post-apocalyptic city with a giant territorial wall surrounding it. Using busses, cars, metal, and anything else they can get their hands on; survivalists have built a small city surrounded by walls to protect themselves from outside threats. Aftermath is populated by those who have survived Extinction.",
      { type: "title", text: "Can You Survive the Aftermath?" },
      "Tread lightly! The inhabitants of Aftermath are extremely aggressive and defensive. In a world of limited resources, these survivalists will do whatever it takes to survive! Anything and anyone that doesn't live within their walls is a threat to their survival. Using guns, man-made weapons, and tools; these once-civilized humans are now a force to be reckoned with!",
    ],
    duration: "Shephead",
    attractionType: "Post- Apoc",
    ageGuidance: "13+",
    fearRating: 4,
    gallery: [
      { title: "Wasteland Street", className: "gallery-after-street", imageSrc: "/assets/aftermath-gallery-1.png", caption: "Ruined bus yard glowing red and blue in the fallout haze" },
      { title: "Aftermath Gate", className: "gallery-after-mask", imageSrc: "/assets/aftermath-gallery-2-replacement.jpg", caption: "The Aftermath entrance opens into a wrecked street of rusted vehicles and warning lights" },
      { title: "Burn Zone", className: "gallery-after-lights", imageSrc: "/assets/aftermath-gallery-3-replacement.jpg", caption: "A mangled bus yard fills with smoke, debris, and violent fallout color" },
      { title: "Crash Lane", className: "gallery-after-checkpoint", imageSrc: "/assets/aftermath-gallery-4-replacement.jpg", caption: "Purple haze rolls through the crashed transport lane beyond the barricades" },
      { title: "Dead End", className: "gallery-after-hall", imageSrc: "/assets/aftermath-gallery-5-replacement.jpg", caption: "A ruined school bus sits beneath the dead end sign in the survivor stronghold" },
      { title: "Survivor Sweep", className: "gallery-after-sweep", imageSrc: "/assets/aftermath-gallery-6-replacement.jpg", caption: "A lone survivor searches the wreckage as blue fog cuts across the yard" },
      { title: "Fallout Scout", className: "gallery-after-scout", imageSrc: "/assets/aftermath-gallery-7-replacement.jpg", caption: "A full-height scout emerges through the neon-lit wreckage in a towering portrait" },
    ],
  },
  {
    id: 8,
    slug: "natures-revenge",
    title: "Nature's Revenge",
    lines: ["NATURE'S", "REVENGE"],
    shortTitle: "Nature's Revenge",
    subtitle: "Storm Surge",
    tagline: "Feel the wrath of Mother Nature!",
    theme: "violent storm, tornado, lightning, dark forest",
    className: "theme-natures-revenge",
    detailThemeClass: "detail-theme-natures-revenge",
    detailSignLabel: "Nature's Revenge",
    detailVideoSrc: "/assets/natures-revenge-final.mp4",
    detailVideoType: "video/mp4",
    description: [
      { type: "title", text: "Beware of Her Wrath..." },
      "In an ancient experimental Greenhouse, Nature takes her Revenge! Prepare for a breathtaking immersive encounter with the beautiful aspects of mother nature, but beware of her wrath...",
      { type: "title", text: "Is it Worth Your Life?" },
      "Nature, tired of being used, limited, and synthesized; has consumed the Greenhouse and mutated into a wrathful, horrifying freak of nature. Trees talk, plants eat people, and insects are larger than you've ever imagined. Tread carefully, nature's wisdom becomes deadly when she becomes conscious! The science-hungry botanist discovered that, the hard way.",
      "If you dare to visit the Greenhouse, you may experience beauty like you've never seen... But is it worth your life? Think twice before journeying into NATURE'S REVENGE!",
    ],
    duration: "9 - 12 MIN",
    attractionType: "OUTDOOR / STORM MAZE",
    ageGuidance: "12+",
    fearRating: 3,
    gallery: [
      { title: "Tornado Path", className: "gallery-nature-tornado", cardClassName: "attraction-detail-gallery-card-logo", hideOverlay: true, imageSrc: "/assets/natures-revenge-logo-bottom.png", caption: "Nature's Revenge attraction design" },
      { title: "Revenge Sign", className: "gallery-nature-tree", imageSrc: "/assets/natures-revenge-gallery-2-replacement.png", caption: "The glowing Nature's Revenge sign towers over the haunted greenhouse entrance" },
      { title: "Garden Gate", className: "gallery-nature-cabin", imageSrc: "/assets/natures-revenge-gallery-3-replacement.png", caption: "A blood-red garden arch leads into the overgrown revenge greenhouse" },
      { title: "Forest Stalker", className: "gallery-nature-flood", imageSrc: "/assets/natures-revenge-gallery-4-replacement.png", caption: "A towering woodland creature looms behind its next victim in the mist" },
      { title: "Glasshouse Exterior", className: "gallery-nature-eye", imageSrc: "/assets/natures-revenge-gallery-5-replacement.png", caption: "The illuminated greenhouse facade glows blue and gold beneath the canopy" },
      { title: "Bloom Chamber", className: "gallery-nature-bloom", imageSrc: "/assets/natures-revenge-gallery-6-replacement.png", caption: "Massive flowers and tangled vines overrun the greenhouse interior" },
      { title: "Vine Corridor", className: "gallery-nature-vines", imageSrc: "/assets/natures-revenge-gallery-7-replacement.png", caption: "A saturated corridor of plants and roots twists deeper into the revenge maze" },
      { title: "Tree Sentinel", className: "gallery-nature-sentinel", imageSrc: "/assets/natures-revenge-gallery-8-replacement.png", caption: "A living tree sentinel watches every step through the jungle path" },
      { title: "Potting Room", className: "gallery-nature-potting", imageSrc: "/assets/natures-revenge-gallery-9-replacement.png", caption: "An overgrown workroom hides behind warm light and shelves of twisted greenery" },
      { title: "Tool Shed", className: "gallery-nature-shed", imageSrc: "/assets/natures-revenge-gallery-10-replacement.png", caption: "Garden tools, pumpkins, and glowing shadows fill the greenhouse storage shed" },
      { title: "Mushroom Hollow", className: "gallery-nature-mushroom", imageSrc: "/assets/natures-revenge-gallery-11-replacement.png", caption: "Bioluminescent mushrooms and monstrous foliage reshape the path into a nightmare" },
      { title: "Canopy Claws", className: "gallery-nature-claws", imageSrc: "/assets/natures-revenge-gallery-12-replacement.png", caption: "Clawed limbs and glowing fungi emerge from the dark canopy overhead" },
    ],
  },
  {
    id: 9,
    slug: "decent",
    title: "Descent",
    lines: ["DESCENT"],
    shortTitle: "Descent",
    subtitle: "Lower Levels",
    tagline: "A Thrilling Underground Cave Horror Adventure",
    theme: "dark basement room, chair, horror corridor",
    className: "theme-decent",
    detailThemeClass: "detail-theme-decent",
    detailSignLabel: "Descent",
    description: [
      { type: "title", text: "Caves Full of Secrets!" },
      "Awe inspiring rock formations, water caverns, and many more wonders have attracted people to Descent for years... Now, even more discoveries have been made... If you're able to survive the journey through the claustrophobic Spider Cave and across the 50ft Steel Bridge Over Water, you'll descend into an astonishing cave system 12 feet underground (yes, actually). Although you're surrounded by wondrous beauty once making it through the sewers, you'll soon realize that the crawly things lurking in the dark are far more evolved from human nature than you imagined!",
      { type: "title", text: "Can You Escape the Caves?" },
      "Further exploration reveals that the cave systems of Descent are crawling with Albino Creatures, Abominable Spiders, Bats, and much more... Utilizing the Underground Tunnels and Caves to their advantage, you never know which direction they may come from next! Once you trek through the underground darkness and new-found (\"abandoned\") excavation site, you'll discover EXTRAORDINARY BEAUTY in the ALL-NEW and Breathtaking RELIC! This Underground journey is worth the descent to uncover the beauty that lies beneath. The question is, are you up for the task? Prepare to experience Descent; an underground, over-water, and perilous attraction like no others in the Carolina's, now BIGGER and BETTER than EVER at Lake Hickory Haunts Haunted Attraction and Theme Park.",
      "Descent is truly an underground attraction. When used, the words \"cave\" and \"underground\" should be interpreted literally. If you have a legitimate unmanageable phobia of being underground or of cave systems, please see a Lake Hickory Haunts customer management representative so we may assist you in bypassing this attraction.",
    ],
    duration: "8 - 10 MIN",
    attractionType: "INDOOR / BASEMENT HORROR",
    ageGuidance: "13+",
    fearRating: 4,
    gallery: [
      { title: "Concrete Room", className: "gallery-decent-room", cardClassName: "attraction-detail-gallery-card-logo", hideOverlay: true, imageSrc: "/assets/descent-logo-bottom.jpg", caption: "Descent attraction design" },
      { title: "Descent Gate", className: "gallery-decent-gate", imageSrc: "/assets/descent-gallery-2-replacement.jpg", caption: "The cave entrance waits below" },
      { title: "Tunnel Drop", className: "gallery-decent-drop", imageSrc: "/assets/descent-gallery-3-replacement.jpg", caption: "A narrow path plunges underground" },
      { title: "Lantern Passage", className: "gallery-decent-lantern", imageSrc: "/assets/descent-gallery-4-replacement.jpg", caption: "Lantern light guides the dark corridor" },
      { title: "Warning Sign", className: "gallery-decent-sign", imageSrc: "/assets/descent-gallery-5-replacement.png", caption: "The descent begins at the edge" },
      { title: "Cave Stalker", className: "gallery-decent-stalker", imageSrc: "/assets/descent-gallery-6-replacement.png", caption: "Something hungry lurks in the cave" },
      { title: "Buried Path", className: "gallery-decent-path", imageSrc: "/assets/descent-gallery-7-replacement.png", caption: "The bridge disappears into the dark" },
    ],
  },
  {
    id: 10,
    slug: "big-top-circus",
    title: "Big Top Circus",
    lines: ["BIG TOP", "CIRCUS"],
    shortTitle: "Big Top Circus",
    subtitle: "Freak Show",
    tagline: "Where applause becomes screaming.",
    theme: "creepy circus tent, freak show sign, carnival lights",
    className: "theme-big-top-circus",
    detailThemeClass: "detail-theme-big-top-circus",
    detailSignLabel: "Big Top Circus",
    detailVideoSrc: "/assets/big-top-circus-promo-2023.mp4",
    detailVideoType: "video/mp4",
    description: [
      { type: "title", text: "Experience Boss's Clown Army" },
      "Boss's Big Top Circus is BACK and BIGGER than EVER! Boss the Clown has one goal, to transform all humans into clowns; so he and his evil clown army can take over the world by any means necessary! Let's just say, Boss doesn't like humans very much. This year, Boss and his clown army have been hard at work, creating brand new and mesmerizing experiences, in order to lure humans into his top secret laboratory!",
      { type: "title", text: "The ALL-NEW Big Top Circus" },
      "The ALL-NEW Freak Show and ALL-NEW FunHouse of sweets & treats may be tempting, but watch out... Boss has hidden tricks up his sleeves and around every corner! Whatever you do... DO NOT enter his TOP SECRET Laboratory. If you do find yourself in Boss's Laboratory, you must make a choice; Either be turned into a clown or die! Our suggestion, give up! Boss is no bozo, and him and his clowns don't clown around (well, maybe sometimes). Either way, Boss is a force NOT to be reckoned with. It's all fun and games until you're turned into a clown, or is that when the fun and games begin? We recommend not finding out for yourself. Beware of Boss the Clown's top secret Laboratory!",
    ],
    duration: "10 - 12 MIN",
    attractionType: "CARNIVAL HORROR / OUTDOOR",
    ageGuidance: "10+",
    fearRating: 3,
        gallery: [
          { title: "Freak Banner", className: "gallery-circus-banner", cardClassName: "attraction-detail-gallery-card-logo", hideOverlay: true, imageSrc: "/assets/big-top-circus-logo-bottom.jpeg", caption: "Big Top Circus attraction design" },
          { title: "Midway Front", className: "gallery-circus-midway", imageSrc: "/assets/big-top-circus-gallery-2-replacement.png", caption: "The Big Top midway glows with striped tents, clown figures, and carnival lights" },
          { title: "Toybox Terror", className: "gallery-circus-showcase", imageSrc: "/assets/big-top-circus-gallery-3-replacement.png", caption: "A packed clown showroom of oversized heads, puppets, and carnival nightmares" },
          { title: "Clown Lab", className: "gallery-circus-lab", imageSrc: "/assets/big-top-circus-gallery-4-replacement.png", caption: "Boss's twisted laboratory crackles with neon machinery and hanging bodies" },
          { title: "Cotton Candy Storm", className: "gallery-circus-clouds", imageSrc: "/assets/big-top-circus-gallery-5-replacement.png", caption: "A surreal cloud chamber swirls with glowing faces and hypnotic carnival color" },
          { title: "Candy Chamber", className: "gallery-circus-cotton", imageSrc: "/assets/big-top-circus-gallery-6-replacement.png", caption: "Cotton candy haze and giant sweets turn the funhouse into a fluorescent trap" },
          { title: "Mask Chamber", className: "gallery-circus-mask", imageSrc: "/assets/big-top-circus-gallery-7-replacement.png", caption: "Glowing clown masks and blacklight clouds crowd every inch of the circus maze" },
          { title: "Sugar Spiral", className: "gallery-circus-candy", imageSrc: "/assets/big-top-circus-gallery-8-replacement.png", caption: "A vertical candy maze of giant lollipops and glowing fog rises overhead" },
          { title: "Shock Table", className: "gallery-circus-voltage", imageSrc: "/assets/big-top-circus-gallery-9-replacement.png", caption: "A full-height victim slumps beneath crackling circus machinery in Boss's lab" },
          { title: "Madness Wall", className: "gallery-circus-graffiti", imageSrc: "/assets/big-top-circus-gallery-10-replacement.png", caption: "Graffiti screams across the circus walls in a blacklight alley of chaos" },
          { title: "Vortex Walker", className: "gallery-circus-vortex", imageSrc: "/assets/big-top-circus-gallery-11-replacement.png", caption: "A towering clown figure stands inside the spinning tunnel under violent neon light" },
          { title: "Fun House", className: "gallery-circus-funhouse", imageSrc: "/assets/big-top-circus-gallery-12-replacement.png", caption: "The blood-red fun house facade grins beneath carnival posters and flickering bulbs" },
          { title: "Spin Tunnel", className: "gallery-circus-spin", imageSrc: "/assets/big-top-circus-gallery-13-replacement.png", caption: "A glowing clown waits at the end of the spinning tunnel deep inside Big Top Circus" },
        ],
  },
  {
    id: 11,
    slug: "chop-shop",
    title: "Chop Shop",
    lines: ["CHOP SHOP"],
    shortTitle: "Chop Shop",
    subtitle: "Cut and Run",
    tagline: "Where steel meets flesh.",
    theme: "butcher workshop, hanging hooks, bloody table",
    className: "theme-chop-shop",
    detailThemeClass: "detail-theme-chop-shop",
    detailSignLabel: "Chop Shop",
    detailVideoSrc: "/assets/chop-shop-final.mp4",
    detailVideoType: "video/mp4",
    description: [
      { type: "title", text: "This Family \"Business\" Lost its Way!" },
      "In a dilapidated and shabby one-stop-shop, horrifying cannibals await! Featuring a Butcher + Repair Shop, Junkyard, and something called The Mangler; this \"General Store\" was booming and thriving back in the 60's & 70's. Somewhere down the line, this family \"business\" lost its way... Now, locals call it the CHOP SHOP, which no one dares to enter! If you find yourself near the Chop Shop, you should definitely run!",
      { type: "title", text: "It's Probably Too Late..." },
      "These maniacal, aggressive, and smelly cannibals are not interested in negotiating. Their only concerns are to capture and prepare their next \"meal\", and to ensure that their killing tools are sharp and operational. As a final word of warning: These cannibals are BRUTAL, MERCILESS, and down-right DISGUSTING! BEWARE of THE CHOP SHOP!",
    ],
    duration: "8 - 11 MIN",
    attractionType: "SLAUGHTERHOUSE / INDOOR",
    ageGuidance: "16+",
    fearRating: 5,
    gallery: [
      { title: "Hook Hall", className: "gallery-chop-hooks", cardClassName: "attraction-detail-gallery-card-logo", hideOverlay: true, imageSrc: "/assets/chop-shop-logo-bottom.jpg", caption: "Chop Shop attraction design" },
      { title: "General Store", className: "gallery-chop-table", imageSrc: "/assets/chop-shop-gallery-1-replacement.png", caption: "The dim one-stop-shop opens beneath molten yellow light" },
      { title: "Redline Wreck", className: "gallery-chop-tools", imageSrc: "/assets/chop-shop-gallery-2-replacement.png", caption: "A junked sedan bleeds red beside the family garage" },
      { title: "Wrapped Corridor", className: "gallery-chop-cold", imageSrc: "/assets/chop-shop-gallery-3-replacement.png", caption: "Plastic-wrapped victims sway in a blacklight passage" },
      { title: "Cannibal Kitchen", className: "gallery-chop-figure", imageSrc: "/assets/chop-shop-gallery-4-replacement.png", caption: "A slaughter kitchen hangs with strips of skin and stained cloth" },
      { title: "Butcher Table", className: "gallery-chop-table", imageSrc: "/assets/chop-shop-gallery-5-replacement.png", caption: "A gore-slick table sits in the center of the prep room" },
      { title: "Hanging Meat", className: "gallery-chop-tools", imageSrc: "/assets/chop-shop-gallery-6-replacement.png", caption: "Bones and carcasses pile beneath rows of hanging flesh" },
      { title: "Crimson Hall", className: "gallery-chop-cold", imageSrc: "/assets/chop-shop-gallery-7-replacement.png", caption: "The back corridor glows red behind dangling bodies and hooks" },
    ],
  },
  {
    id: 12,
    slug: "ghost-town",
    title: "Ghost Town",
    lines: ["GHOST TOWN"],
    shortTitle: "Ghost Town",
    subtitle: "Moonlit Haunting",
    tagline: "Where the dead still keep watch.",
    theme: "abandoned western ghost town under full moon",
    selected: true,
    className: "theme-ghost-town",
    detailThemeClass: "detail-theme-ghost-town",
    detailSignLabel: "Ghost Town",
    description: [
      { type: "title", text: "Ghastly Spirits Await" },
      "In the hollows of Lake Hickory Haunts, an \"abandoned\" town awaits. Over a century ago, this town was booming and filled with crime and anarchy, much like the wild western towns of the 1800's. Now, it's a Ghost Town. Over 100 years later, the Town is once again alive! Filled with ghastly, restless, and displeased spirits, the Ghost Town is more alive than it may look. As you make your way through the Ghost Town, beware... and respect the dead... Or else!",
    ],
    duration: "9 - 12 MIN",
    attractionType: "WESTERN GHOST WALK / OUTDOOR",
    ageGuidance: "10+",
    fearRating: 3,
    gallery: [
      { title: "Main Street", className: "gallery-ghost-main", caption: "Moonlit western main street" },
      { title: "Jail Door", className: "gallery-ghost-jail", cardClassName: "attraction-detail-gallery-card-portrait", imageSrc: "/assets/ghost-town-gallery-1-replacement.png", caption: "The Ghost Town jail glows purple beneath the night sky" },
      { title: "Outpost Gate", className: "gallery-ghost-outpost", imageSrc: "/assets/ghost-town-gallery-2-replacement.png", caption: "A weathered gateway opens into the haunted western outpost" },
      { title: "Wanted Hall", className: "gallery-ghost-wanted", cardClassName: "attraction-detail-gallery-card-portrait", imageSrc: "/assets/ghost-town-gallery-3-replacement.png", caption: "A skull-lit chandelier hangs over faded wanted posters indoors" },
      { title: "Horned Drifter", className: "gallery-ghost-drifter", imageSrc: "/assets/ghost-town-gallery-4-replacement.png", caption: "A horned drifter crawls from the shadows between rusted machinery" },
      { title: "Ghost Sheriff", className: "gallery-ghost-sheriff", imageSrc: "/assets/ghost-town-gallery-5-replacement.png", caption: "The sheriff fixes guests with an eerie stare under violet light" },
      { title: "Stagecoach Grave", className: "gallery-ghost-graves", imageSrc: "/assets/ghost-town-gallery-6-replacement.png", caption: "A web-choked stagecoach display greets passersby at the entrance" },
    ],
  },
  {
    id: 13,
    slug: "midway-mayhem",
    title: "Midway Mayhem",
    lines: ["MIDWAY", "MAYHEM"],
    shortTitle: "Midway Mayhem",
    subtitle: "Carnival Rot",
    tagline: "Where the fun bites back.",
    theme: "haunted carnival midway entrance with creepy clown faces",
    className: "theme-midway-mayhem",
    detailThemeClass: "detail-theme-midway-mayhem",
    detailSignLabel: "Midway Mayhem",
    description: [
      { type: "title", text: "Unmissable Live Performances" },
      "Prepare to be entertained with a monstrous lineup of bands taking over our new stage:",
      "Bourbon Sons: Join us on September 26th!",
      "Contagious: Don't miss them on November 1st!",
    ],
    duration: "8 - 10 MIN",
    attractionType: "MIDWAY EXPERIENCE / OPEN AIR",
    ageGuidance: "All Ages",
    fearRating: 2,
    gallery: [
      { title: "Gate", className: "gallery-midway-gate", cardClassName: "attraction-detail-gallery-card-logo", hideOverlay: true, imageSrc: "/assets/midway-mayhem-logo-bottom.png", caption: "Midway Mayhem attraction design" },
      { title: "Midway Chapel", className: "gallery-midway-games", imageSrc: "/assets/midway-mayhem-gallery-1-replacement.jpg", caption: "A glowing chapel facade anchors the midway beneath neon forest light" },
      { title: "Haunted House Row", className: "gallery-midway-tunnel", imageSrc: "/assets/midway-mayhem-gallery-2-replacement.png", caption: "A sprawling haunted house frontage stretches across the midway" },
      { title: "Pumpkin Plaza", className: "gallery-midway-booth", imageSrc: "/assets/midway-mayhem-gallery-3-replacement.jpg", caption: "Crowds surge past the giant pumpkin centerpiece toward the stage" },
      { title: "Monster Roll Call", className: "gallery-midway-crowd", imageSrc: "/assets/midway-mayhem-gallery-4-replacement.jpg", caption: "Midway monsters flood the path under red, green, and blue stage beams" },
      { title: "Stage Crowd", className: "gallery-midway-games", imageSrc: "/assets/midway-mayhem-gallery-5-replacement.jpg", caption: "Guests pack the midway while performers take over the stage" },
      { title: "Dance Line", className: "gallery-midway-tunnel", imageSrc: "/assets/midway-mayhem-gallery-6-replacement.jpg", caption: "A full cast charges across the stage in a foggy dance break" },
      { title: "Night Show", className: "gallery-midway-booth", imageSrc: "/assets/midway-mayhem-gallery-7-replacement.jpg", caption: "The stage glows turquoise as the crowd watches the night show" },
      { title: "Mummy Facade", className: "gallery-midway-crowd", imageSrc: "/assets/midway-mayhem-gallery-8-replacement.jpg", caption: "The Curse of the Mummy facade burns gold against the dark midway" },
      { title: "Midway Vista", className: "gallery-midway-games", imageSrc: "/assets/midway-mayhem-gallery-9-replacement.jpg", caption: "A wide nighttime view frames the stage and facades across the midway" },
      { title: "Crowd Overview", className: "gallery-midway-tunnel", imageSrc: "/assets/midway-mayhem-gallery-10-replacement.jpg", caption: "An overhead look captures the packed Midway Mayhem crowd at night" },
    ],
  },
];

const lairOfTheUndead = attractions.find((attraction) => attraction.slug === "lair-of-the-undead");

if (lairOfTheUndead) {
  lairOfTheUndead.subtitle = null;
  lairOfTheUndead.detailVideoEmbedUrl = "https://www.youtube.com/embed/vlEx55_HzHQ?controls=1&rel=0&modestbranding=1&playsinline=1";
  lairOfTheUndead.description = [
    { type: "title", text: "Undead Spirits, Zombies, and Ghosts" },
    "Outside the Nightmare Factory, haunted crypts and graveyards are inhabited by lost souls, wandering in despair. These souls are trapped in a realm between reality and dream, and they will latch onto whatever they can to become alive once more! Beware, these living dead creatures look as if they're alive, but they're not... or are they? Some of these foul creatures have some soul left, some do not. You are their last chance at life! Beware of ghosts, zombies, poltergeists, and spirits haunting this land of the dead... Tread lightly, they will play with your mind and emotions to lure you in with insidious tricks.",
    { type: "title", text: "Can You Make It Through or Will You Join Them?" },
    "The Lair of the Undead is a terrifying attraction where the souls of the undead wander aimlessly in an eternal abyss of darkness and despair, this nightmarish realm is their eternity, and they will stop at nothing to escape their torment. It is as if the very essence of evil resides within! Explore \"abandoned\" Mausoleums, Crypts, and Graveyards! Prepare to encounter movie-like Zombies, Ghosts, and Unseen spirits sure to send chills down your spine... Will you make it through this haunted graveyard alive, or become trapped among the LAIR OF THE UNDEAD? Come Experience Lair of the Undead and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const voodooBayou = attractions.find((attraction) => attraction.slug === "voodoo-bayou");

if (voodooBayou) {
  voodooBayou.detailVideoEmbedUrl = "https://www.youtube.com/embed/PdFrtn-y49Y?controls=1&rel=0&modestbranding=1&playsinline=1";
  voodooBayou.gallery = [
    {
      title: "Bayou Title",
      className: "gallery-bayou-title",
      imageSrc: "/assets/voodoo-bayou-gallery-title-2026.png",
      caption: "The Voodoo Bayou title art over bark with a stitched voodoo doll centerpiece",
    },
    ...(voodooBayou.gallery ?? []),
  ];
  voodooBayou.subtitle = null;
  voodooBayou.description = [
    { type: "title", text: "Experience Mystifying Enchantments" },
    {
      type: "rich",
      segments: [
        "A tribe of Voodoo Witch Doctors inhabits the treetops on the bayou of Lake Hickory Haunts! Be cautious – No matter who it is, they can’t be trusted! The power of their witchcraft and sorcery is not to be reckoned or bartered with! The, now undead, pirates of ",
        { type: "link", href: "/attractions/shipwrecked", label: "Shipwrecked" },
        " learned that the hard way on a dark and stormy night many years ago… and the battle between these sorcerers and the pirates continues to this day. Beware, their sly and cunning ways are so convincing, sometimes it’s impossible not to give in to their tempting smiles and deceitful tricks. Don’t make the mistake of trusting a witch doctor in the village by the bayou… You’ve been warned!",
      ],
    },
    { type: "title", text: "Explore the Tree-Tops of Lake Hickory Haunts!" },
    "Voodoo Bayou features a 20+ feet tall tree-top maze, winding through the air in the woods of Lake Hickory Haunts, sure to have your pulse racing and heart pounding! Climb into the treetops above Lake Hickory to explore a mysterious maze of voodoo shacks and treacherous pathways. If you have a severe phobia of heights, please see a customer service representative prior to entering the haunt, and we will be glad to assist you in bypassing this attraction. Come Experience Voodoo Bayou and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const shipwrecked = attractions.find((attraction) => attraction.slug === "shipwrecked");

if (shipwrecked) {
  shipwrecked.subtitle = null;
  shipwrecked.detailVideoEmbedUrl = "https://www.youtube.com/embed/XKe07X-7MS0?controls=1&rel=0&modestbranding=1&playsinline=1";
  shipwrecked.detailVideoSrc = "/assets/shipwrecked-trailer.mp4";
  shipwrecked.detailVideoType = "video/mp4";
  shipwrecked.videoUpdate = [
    { type: "label", text: "Attraction Update:" },
    { type: "feature", text: "Shipwrecked Reimagined & Expanded" },
    "Shipwrecked is being upgraded and expanded up into the air, over the water, and on the ground with all-new scenes, mind-blowing special effects, and so much more. Get ready to be immersed into this thrilling pirate adventure like never before! Featuring a brand new walkthrough pirate ship floating on the water, multi-level saloon, seaside cove, and a town crawling with undead pirates.",
  ];
  shipwrecked.description = [
      { type: "title", text: "Stormy Secrets at Sea" },
      {
        type: "rich",
      segments: [
        "On a dark and stormy night many years ago, a crew of pirates were sailing near the shores of Lake Hickory. As the pirates approached the shore, the storm intensified under the spells cast by the ",
        { type: "link", href: "/attractions/voodoo-bayou", label: "Voodoo Witches" },
        " of the bayou, until suddenly, a massive Kraken erupted out of the water, devouring the entire crew of pirates, and demolishing their ship! Afterward, the storm ceased, and the waters were calm. Until one night, many months later, a massive cyclone formed in the water! Suddenly, a new ghastly pirate ship sailed out of the cyclone, full of the same crew of pirates... except now, they were soulless, ghostly versions of their former selves.",
      ],
    },
    { type: "title", text: "Escape from the Vengeful Crew" },
    "Now, this vicious crew of undead pirates has laid claim to a part of Lake Hickory Haunts with a brand new town full of stolen treasure, precious loot, and traps for any outsider who dares to enter... Their new and sea-worthy ship is docked nearby in the harbor in case of any trouble. Beware, these pirates are skeptical of all who enter and are not to be bartered with! Can you survive Shipwrecked, or will you be caught in the crossfire and made to walk the plank of the ship? Come Experience Shipwrecked and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const aquaphobia = attractions.find((attraction) => attraction.slug === "aquaphobia");

if (aquaphobia) {
  aquaphobia.gallery = [
    {
      title: "Aquaphobia Title",
      className: "gallery-aqua-title",
      imageSrc: "/assets/aquaphobia-gallery-title-2026.png",
      caption: "The Aquaphobia title art glowing over a submerged teal water backdrop",
    },
    ...(aquaphobia.gallery ?? []),
  ];
  aquaphobia.subtitle = null;
  aquaphobia.videoUpdate = [
    { type: "label", text: "Attraction Update:" },
    { type: "feature", text: "Aquaphobia Expansion" },
    "Aquaphobia's sunken, possessed village is being expanded and improved this year with an all-new Fishing Hut in the town. Be on the lookout for more surprise upgrades and improvements in your journey!",
    "STAY TUNED to see what's coming to Lake Hickory Haunts 2026! Follow our social media pages for updates and sneak peeks on our upcoming 15th Year of Fear.",
  ];
  aquaphobia.description = [
    { type: "title", text: "The Sunken Fishing Village Has Risen" },
    "Years ago, a prosperous fishing village on the shores of Lake Hickory Haunts ended up destroying the lake's ecosystem by taking what they could get their greedy hands on while dumping more and more trash into the waters. A vicious water monster known as Vodyanoi was FURIOUS. After destroying their dam, flooding the village, and dragging many villagers into his underwater dwelling to serve him as slaves, the village has risen from the depths!",
    { type: "title", text: "Waterfront Haunted Attraction" },
    "Aquaphobia at Lake Hickory Haunts is not just an attraction; it's an immersive nautical experience filled with thrills around every corner. This innovative horror attraction is filled with surprises, suspense, and storytelling to create a truly unique and thrilling adventure. Warning: You may get wet! This waterfront feature brings horror to life in a way no other haunted attraction has done before. If you're able to make it across the floating dock and enter the village you'll encounter seductive sirens, sharks, possessed fishermen, sea witches, Vodyanoi, and more! Come Experience Aquaphobia and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const extinction = attractions.find((attraction) => attraction.slug === "extinction");

if (extinction) {
  extinction.detailVideoEmbedUrl = "https://www.youtube.com/embed/Wme8pc7W0SQ?controls=1&rel=0&modestbranding=1&playsinline=1";
  extinction.gallery = [
    {
      title: "Extinction Title",
      className: "gallery-ext-title",
      imageSrc: "/assets/extinction-gallery-title-2026.jpg",
      caption: "The Extinction title graphic over hazard stripes with a glowing biohazard emblem",
    },
    ...(extinction.gallery ?? []),
  ];
  extinction.subtitle = null;
  extinction.tagline = "A chilling and otherworldly Sci-fy experience";
  extinction.description = [
    { type: "title", text: "Adventure into the Abyss" },
    "Welcome to Extinction, a bone-chilling haunted attraction like no other. Deep beneath the murky waters of Lake Hickory, a powerful and superior alien hybrid named Kluath has emerged from the abyss. Its insidious goal: world domination through the annihilation of the human race.",
    "In the depths of its sea laboratory, Kluath conducts monstrous experiments, combining humans, sea creatures, and other abominations to create a mutated army destined to bring about the downfall of mankind. The sheer power and unstoppable force of Kluath are unimaginable.",
    { type: "title", text: "Will You Survive the Extinction?" },
    "As you step into Extinction 2.0, you have a choice to make. Will you join Kluath's killing machine and become a part of its malevolent plan? Or will you face the terrifying reality of extinction?",
    "Prepare yourself for an immersive experience like no other. The haunting atmosphere will engulf you as you navigate through Kluath's lair of horrors.",
    "Enter if you dare, but be warned, the fate of mankind hangs in the balance. Come Experience Extinction and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const aftermath = attractions.find((attraction) => attraction.slug === "aftermath");

if (aftermath) {
  aftermath.gallery = [
    {
      title: "Aftermath Title",
      className: "gallery-after-title",
      imageSrc: "/assets/aftermath-gallery-title-2026.jpg",
      caption: "The Aftermath title art over a burning skyline with blood-red fallout splatter",
    },
    ...(aftermath.gallery ?? []),
  ];
  aftermath.detailVideoEmbedUrl = "https://www.youtube.com/embed/apwLGiUGb0s?controls=1&rel=0&modestbranding=1&playsinline=1";
  aftermath.subtitle = null;
  aftermath.description = [
    { type: "title", text: "The Wasteland of Survivalists" },
    "Those who survive Extinction must inhabit the city of Aftermath, a post-apocalyptic city with a giant territorial wall surrounding it. Using busses, cars, metal, and anything else they can get their hands on; survivalists have built a small city surrounded by walls to protect themselves from outside threats. Aftermath is populated by those who have survived Extinction.",
    { type: "title", text: "Can You Survive the Aftermath?" },
    "Tread lightly! The survivors of Aftermath are extremely aggressive and defensive. In a world of limited resources, these survivalists will do whatever it takes to survive! Anything and anyone that doesn't live within their walls is a threat to their survival. Using guns, man-made weapons, and tools; these once-civilized humans are now a force to be reckoned with! Come Experience Aftermath and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const naturesRevenge = attractions.find((attraction) => attraction.slug === "natures-revenge");

if (naturesRevenge) {
  naturesRevenge.lines = ["NATURE'S REVENGE"];
  naturesRevenge.subtitle = null;
  naturesRevenge.heroBannerImage = "/assets/natures-revenge-hero-banner.webp";
  naturesRevenge.detailVideoEmbedUrl = "https://www.youtube.com/embed/qJUCC_07cg4?controls=1&rel=0&modestbranding=1&playsinline=1";
  naturesRevenge.description = [
    { type: "title", text: "Beware of Her Wrath..." },
    "In an ancient experimental Greenhouse, Nature takes her Revenge! Prepare for a breathtaking immersive encounter with the beautiful aspects of mother nature, but beware of her wrath... Nature, tired of being used, limited, and synthesized; has consumed the Greenhouse and mutated into a wrathful, horrifying freak of nature. Trees talk, plants eat people, and insects are larger than you've ever imagined! Tread carefully, nature's wisdom becomes deadly when she becomes conscious! The science-hungry botanist discovered that, the hard way.",
    { type: "title", text: "Beauty Beyond this World!" },
    "If you dare to visit the Greenhouse, you will experience beauty and awe-inspiring immersive environments unlike anything you've ever seen, but be prepared to face nature, LARGER than life! Think twice before journeying into NATURE'S REVENGE! Come Experience Nature's Revenge and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const descent = attractions.find((attraction) => attraction.slug === "decent");

if (descent) {
  descent.subtitle = null;
  descent.heroBannerImage = "/assets/descent-hero-banner.webp";
  descent.videoUpdate = [
    { type: "label", text: "Attraction Update:" },
    { type: "feature", text: "Descent Expansion" },
    "The last section of our underground (Yes, it's actually underground!) attraction, Descent, is being expanded once again after the new 50ft overwater steel bridge and Spider Cave two years ago with an all-new massive abandoned mine and a cavern known as \"The Relic\"! Be prepared to experience the scares in the eerie, creature-ridden caves like never before. Don't let the beauty and realisticness of the stalactites and all-inspiring cave formations distract you from the bat caves, spiders, and abominations hiding all around you, waiting to strike!",
  ];
  descent.description = [
    { type: "title", text: "Unparalleled Horror Experiences" },
    "Awe inspiring rock formations, water caverns, and many more wonders have attracted people to Descent for years... Now, even more discoveries have been made... If you're able to survive the journey through the claustrophobic Spider Cave and across the 50ft Steel Bridge Over Water, you'll descend into an astonishing cave system 12 feet underground (yes, actually). Although you're surrounded by wondrous beauty once making it through the sewers, you'll soon realize that the crawly things lurking in the dark are far more evolved from human nature than you imagined!",
    { type: "title", text: "Can You Escape the Caves?" },
    "Further exploration reveals that the cave systems of Descent are crawling with Albino Creatures, Abominable Spiders, Bats, and much more... Utilizing the Underground Tunnels and Caves to their advantage, you never know which direction they may come from next! Once you trek through the underground darkness and new-found (\"abandoned\") excavation site, you'll discover EXTRAORDINARY BEAUTY in the ALL-NEW and Breathtaking RELIC! This Underground journey is worth the descent to uncover the beauty that lies beneath. The question is, are you up for the task? Prepare to experience Descent; an underground, over-water, and perilous attraction like no others in the Carolina's, now BIGGER and BETTER than EVER at Lake Hickory Haunts Haunted Attraction and Theme Park. Come Experience Descent and 12 other attractions at Lake Hickory Haunts!",
    "Descent is truly an underground attraction. When used, the words \"cave\" and \"underground\" should be interpreted literally. If you have a legitimate unmanageable phobia of being underground or of cave systems, please see a Lake Hickory Haunts customer management representative so we may assist you in bypassing this attraction.",
  ];
}

const bigTopCircus = attractions.find((attraction) => attraction.slug === "big-top-circus");

if (bigTopCircus) {
  bigTopCircus.subtitle = null;
  bigTopCircus.tagline = "A Creepy Clown Adventure";
  bigTopCircus.heroBannerImage = "/assets/big-top-circus-hero-banner.webp";
  bigTopCircus.detailVideoEmbedUrl = "https://www.youtube.com/embed/VgSCOzFjy0Y?controls=1&rel=0&modestbranding=1&playsinline=1";
  bigTopCircus.description = [
    { type: "title", text: "Experience Boss the Clown's Army" },
    "Boss the Clown has one goal, to transform all humans into clowns; so he and his evil clown army can take over the world by any means necessary! Let's just say, Boss doesn't like humans very much. Boss and his clown army have been hard at work, creating new and mesmerizing experiences, to lure humans into his top secret laboratory!",
    { type: "title", text: "The Freak Show, FunHouse, and Boss's Top-Secret Laboratory" },
    "The Freak Show and FunHouse of sweets & treats may be tempting but watch out... Boss has hidden tricks up his sleeves and around every corner! Whatever you do... DO NOT enter his TOP SECRET Laboratory. If you do find yourself in Boss's Laboratory, you must make a choice; Either be turned into a clown or die! Our suggestion, give up! Boss is no bozo, and him and his clowns don't clown around (well, maybe sometimes). Either way, Boss is a force NOT to be reckoned with. It's all fun and games until you're turned into a clown, or is that when the fun and games begin? We recommend not finding out for yourself. Beware of Boss the Clown's top secret Laboratory! Come Experience Big Top Circus and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const chopShop = attractions.find((attraction) => attraction.slug === "chop-shop");

if (chopShop) {
  chopShop.subtitle = null;
  chopShop.tagline = "Horrifying Cannibals Await";
  chopShop.heroBannerImage = "/assets/chop-shop-hero-banner.webp";
  chopShop.detailVideoEmbedUrl = "https://www.youtube.com/embed/ckrvWSu1C0I?controls=1&rel=0&modestbranding=1&playsinline=1";
  chopShop.description = [
    { type: "title", text: "This Family \"Business\" Lost its Way!" },
    "In a dilapidated and shabby one-stop-shop, horrifying cannibals await! Featuring a Butcher + Repair Shop, Junkyard, and something called The Mangler; this \"General Store\" was booming and thriving back in the 60's & 70's. Somewhere down the line, this family \"business\" lost its way... Now, locals call it the CHOP SHOP, which no one dares to enter! If you find yourself near the Chop Shop, you should definitely run!",
    { type: "title", text: "Prepare to Run!" },
    "These maniacal, aggressive, and smelly cannibals are not interested in negotiating. Their only concerns are to capture and prepare their next \"meal\", and to ensure that their killing tools are sharp and operational. As a final word of warning: These cannibals are BRUTAL, MERCILESS, and down-right DISGUSTING! BEWARE of THE CHOP SHOP! Come Experience Chop Shop and 12 other attractions at Lake Hickory Haunts!",
  ];
}

const ghostTown = attractions.find((attraction) => attraction.slug === "ghost-town");

if (ghostTown) {
  ghostTown.gallery = [
    {
      title: "Ghost Town Title",
      className: "gallery-ghost-title",
      imageSrc: "/assets/ghost-town-gallery-title-2026.webp",
      caption: "The Ghost Town title art with shadowed hands pressing through the haze",
    },
    ...(ghostTown.gallery ?? []),
  ];
  ghostTown.subtitle = null;
  ghostTown.tagline = "An “Abandoned” Frontier…";
}

const midwayOfMayhem = attractions.find((attraction) => attraction.slug === "midway-mayhem");

if (midwayOfMayhem) {
  midwayOfMayhem.title = "Midway of Mayhem";
  midwayOfMayhem.lines = ["MIDWAY OF", "MAYHEM"];
  midwayOfMayhem.shortTitle = "Midway of Mayhem";
  midwayOfMayhem.detailSignLabel = "Midway of Mayhem";
  midwayOfMayhem.heroBannerImage = "/assets/midway-mayhem-hero-banner.webp";
  midwayOfMayhem.detailVideoEmbedUrl = "https://www.youtube.com/embed/tjW-aT7vhmg?controls=1&rel=0&modestbranding=1&playsinline=1";
  midwayOfMayhem.subtitle = null;
  midwayOfMayhem.tagline = null;
  midwayOfMayhem.description = [
    { type: "title", text: "Unforgettable Live Performances" },
    "During your visit at Lake Hickory Haunts, don't forget to experience all that the Midway of Mayhem has to offer! Featuring Interactive Monsters, Live DJ Music, breathtaking Photo-Ops, Midway Attractions, Escape Rooms, Concessions, VIP Lounge, and MORE! Don't miss our special guests and concerts, happening on the Midway of Mayhem and Lake Hickory Haunts stage on select nights.",
  ];
  if (midwayOfMayhem.gallery?.[0]) {
    midwayOfMayhem.gallery[0].caption = "Midway of Mayhem attraction design";
  }
  if (midwayOfMayhem.gallery?.[9]) {
    midwayOfMayhem.gallery[9].caption = "An overhead look captures the packed Midway of Mayhem crowd at night";
  }
}

const midwayIndex = attractions.findIndex((attraction) => attraction.slug === "midway-mayhem");

if (midwayIndex > 0) {
  const [midwayFirst] = attractions.splice(midwayIndex, 1);
  attractions.unshift(midwayFirst);
}

attractions.forEach((attraction, index) => {
  attraction.id = index + 1;
});

export function getAttractionBySlug(slug) {
  return attractions.find((attraction) => attraction.slug === slug);
}

export function getDefaultAttractionGallery() {
  return defaultGallery;
}
