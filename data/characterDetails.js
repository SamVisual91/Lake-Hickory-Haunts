import characterIdentityOverrides from "./characterIdentityOverrides.json";

const baseCharacterDetails = [
  {
    id: "bloody-mira",
    name: "Bloody Mira",
    subtitle: "Shrieking Dollmaker of Black Pines",
    description:
      "Bloody Mira wanders the treeline with a shredded plaything in one hand and a scream in the other. She hunts close, moves fast, and turns every wrong turn into a personal invitation.",
    accent: "silver",
    threatLevel: 5,
    quote: "Come closer. I made this one just for you.",
    weaponOfChoice: "Razor Doll",
    knownFor: "Shriek Bursts",
    heroImage: "/assets/characters-carousel-1.png",
    gallery: [
      "/assets/characters-carousel-1.png",
      "/assets/characters-carousel-5.png",
      "/assets/characters-carousel-10.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Maximum" },
      { icon: "zone", label: "Lurking In", value: "Black Pines" },
      { icon: "sound", label: "Signature", value: "Shriek Burst" },
      { icon: "clock", label: "Best Avoided", value: "After Dark" },
    ],
  },
  {
    id: "deepjaw",
    name: "Deepjaw",
    subtitle: "Flood-Tunnel Ambusher",
    description:
      "Deepjaw drags itself out of the flood channels and onto the midway when the fog turns blue. The closer you get, the more the claws come first and the smile arrives second.",
    accent: "cyan",
    threatLevel: 4,
    quote: "The water heard you before I did.",
    weaponOfChoice: "Hooked Claws",
    knownFor: "Gutter Snarls",
    heroImage: "/assets/characters-carousel-2.png",
    gallery: [
      "/assets/characters-carousel-2.png",
      "/assets/characters-carousel-6.png",
      "/assets/characters-carousel-11.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "High" },
      { icon: "zone", label: "Lurking In", value: "Flood Tunnels" },
      { icon: "sound", label: "Signature", value: "Gutter Snarl" },
      { icon: "clock", label: "Best Avoided", value: "Heavy Fog" },
    ],
  },
  {
    id: "the-hollow",
    legacySlugs: ["the-hollow"],
    name: "The Hollow",
    subtitle: "Foundry Phantom Beneath the Rust",
    description:
      "The Hollow slips through the foundry dark like a shape scraped out of smoke, rust, and furnace breath. It watches from the seams, drags iron through the corridor, and closes in once everyone looks the wrong way.",
    accent: "orange",
    threatLevel: 5,
    quote: "You hear the boiler before you ever see me.",
    weaponOfChoice: "Boiler Hook",
    knownFor: "Rust Ambushes",
    titleScratch: "/assets/orange-scratch.png",
    heroImage: "/assets/characters-carousel-3.png",
    gallery: [
      "/assets/characters-carousel-3.png",
      "/assets/characters-carousel-8.png",
      "/assets/characters-carousel-9.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Severe" },
      { icon: "zone", label: "Lurking In", value: "Foundry Hall" },
      { icon: "sound", label: "Signature", value: "Boiler Drag" },
      { icon: "clock", label: "Best Avoided", value: "Final Queue" },
    ],
  },
  {
    id: "vesper-wraith",
    name: "Vesper Wraith",
    subtitle: "Winged Terror in Violet Static",
    description:
      "Vesper Wraith appears when the dark starts humming back. Its wings eat the light, its eyes glow first, and every step toward it feels like you just accepted a dare you cannot undo.",
    accent: "violet",
    threatLevel: 5,
    quote: "Listen closely. The dark is calling you back.",
    weaponOfChoice: "Talon Wings",
    knownFor: "Static Screeches",
    heroImage: "/assets/characters-carousel-4.png",
    gallery: [
      "/assets/characters-carousel-4.png",
      "/assets/characters-carousel-2.png",
      "/assets/characters-carousel-6.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Extreme" },
      { icon: "zone", label: "Lurking In", value: "Static Nest" },
      { icon: "sound", label: "Signature", value: "Wing Rattle" },
      { icon: "clock", label: "Best Avoided", value: "Power Surges" },
    ],
  },
  {
    id: "rat",
    legacySlugs: ["red-mercy"],
    name: "RAT",
    subtitle: "Scrap-Tunnel Vermin King",
    description:
      "RAT crawls out of the foundry dark with a rusted grin, fast hands, and a hunger that never stays hidden for long. It darts low, hits quick, and turns every tunnel into a trap that feels alive.",
    accent: "crimson",
    threatLevel: 5,
    quote: "You hear the scratching too late.",
    weaponOfChoice: "Scrap Claws",
    knownFor: "Tunnel Ambushes",
    heroImage: "/assets/characters-carousel-5.png",
    gallery: [
      "/assets/characters-carousel-5.png",
      "/assets/characters-carousel-1.png",
      "/assets/characters-carousel-3.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Maximum" },
      { icon: "zone", label: "Lurking In", value: "Blood Alley" },
      { icon: "sound", label: "Signature", value: "Hunter Cry" },
      { icon: "clock", label: "Best Avoided", value: "Crowd Splits" },
    ],
  },
  {
    id: "riftbone",
    name: "Riftbone",
    subtitle: "Bone-Masked Rift Breaker",
    description:
      "Riftbone looks like someone fused a ruin, a ribcage, and a grudge. Sparks crackle off the armor while it closes the gap, hammer raised, like the whole midway is one long impact zone.",
    accent: "magenta",
    threatLevel: 4,
    quote: "Every spark means I am one step closer.",
    weaponOfChoice: "Rift Hammer",
    knownFor: "Circuit Slams",
    heroImage: "/assets/characters-carousel-6.png",
    gallery: [
      "/assets/characters-carousel-6.png",
      "/assets/characters-carousel-4.png",
      "/assets/characters-carousel-8.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "High Impact" },
      { icon: "zone", label: "Lurking In", value: "Rift Yard" },
      { icon: "sound", label: "Signature", value: "Circuit Slam" },
      { icon: "clock", label: "Best Avoided", value: "When Sparks Fly" },
    ],
  },
  {
    id: "deadly-delilah",
    name: "Deadly Delilah",
    subtitle: "Neon Nurse of Ward 13",
    description:
      "Deadly Delilah glows like bad medicine in a cracked glass vial. She studies the line, finds the one that looks brave, and smiles like she already knows how the experiment ends.",
    accent: "neon-lime",
    threatLevel: 4,
    quote: "Hold still. This part gets interesting.",
    weaponOfChoice: "Neon Syringe",
    knownFor: "Live Experiments",
    heroImage: "/assets/characters-carousel-7.png",
    gallery: [
      "/assets/characters-carousel-7.png",
      "/assets/characters-carousel-2.png",
      "/assets/characters-carousel-10.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Toxic" },
      { icon: "zone", label: "Lurking In", value: "Ward 13" },
      { icon: "sound", label: "Signature", value: "Glass Clink" },
      { icon: "clock", label: "Best Avoided", value: "Intake Hour" },
    ],
  },
  {
    id: "furnace-warden",
    name: "Furnace Warden",
    subtitle: "Gatekeeper of the Burn Hall",
    description:
      "The Furnace Warden stomps forward like every plate on that mask was forged out of punishment. When it points at you, the fire behind it feels suddenly a whole lot closer.",
    accent: "ember",
    threatLevel: 4,
    quote: "The gate is hot. So is your last warning.",
    weaponOfChoice: "Foundry Axe",
    knownFor: "Iron Breath",
    heroImage: "/assets/characters-carousel-8.png",
    gallery: [
      "/assets/characters-carousel-8.png",
      "/assets/characters-carousel-3.png",
      "/assets/characters-carousel-9.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Brutal" },
      { icon: "zone", label: "Lurking In", value: "Burn Gate" },
      { icon: "sound", label: "Signature", value: "Iron Breath" },
      { icon: "clock", label: "Best Avoided", value: "Heat Rise" },
    ],
  },
  {
    id: "the-outlaw",
    name: "The Outlaw",
    subtitle: "Last Gun at Dead Lantern",
    description:
      "The Outlaw never looks rushed. Lantern up, revolver steady, he waits until the panic hits and then steps in like he has been promised the final word all season long.",
    accent: "ember",
    threatLevel: 3,
    quote: "You can draw first. It will not help.",
    weaponOfChoice: "Revolver",
    knownFor: "Last Shots",
    heroImage: "/assets/characters-carousel-9.png",
    gallery: [
      "/assets/characters-carousel-9.png",
      "/assets/characters-carousel-8.png",
      "/assets/characters-carousel-11.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Cold Steel" },
      { icon: "zone", label: "Lurking In", value: "Dead Lantern" },
      { icon: "sound", label: "Signature", value: "Hammer Click" },
      { icon: "clock", label: "Best Avoided", value: "Last Call" },
    ],
  },
  {
    id: "shock-harlequin",
    name: "Shock Harlequin",
    subtitle: "Storm-Door Riot Clown",
    description:
      "Shock Harlequin comes screaming through the blue static like the whole haunt is one huge stage entrance. It doesn’t creep. It crashes into the scene and drags your attention with it.",
    accent: "electric",
    threatLevel: 5,
    quote: "Smile. I love a loud entrance.",
    weaponOfChoice: "Shock Axe",
    knownFor: "Voltage Screams",
    heroImage: "/assets/characters-carousel-10.png",
    gallery: [
      "/assets/characters-carousel-10.png",
      "/assets/characters-carousel-1.png",
      "/assets/characters-carousel-11.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Unhinged" },
      { icon: "zone", label: "Lurking In", value: "Storm Hall" },
      { icon: "sound", label: "Signature", value: "Voltage Scream" },
      { icon: "clock", label: "Best Avoided", value: "Flash Bursts" },
    ],
  },
  {
    id: "ringmaster-ruin",
    legacySlugs: ["boss-the-clown"],
    name: "Ringmaster Ruin",
    subtitle: "Midway Headliner of Ruin",
    description:
      "Ringmaster Ruin is what happens when the showman never leaves the stage. Mallet in hand, grin carved deep, he reaches for guests like the whole midway belongs to his final act.",
    accent: "royal-blue",
    threatLevel: 5,
    quote: "Step right up. The finale is about to begin.",
    weaponOfChoice: "Carnival Mallet",
    knownFor: "Midway Mayhem",
    heroImage: "/assets/characters-carousel-11.png",
    gallery: [
      "/assets/characters-carousel-11.png",
      "/assets/characters-carousel-10.png",
      "/assets/characters-carousel-6.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Headliner" },
      { icon: "zone", label: "Lurking In", value: "Main Midway" },
      { icon: "sound", label: "Signature", value: "Carnival Laugh" },
      { icon: "clock", label: "Best Avoided", value: "Closing Run" },
    ],
  },
  {
    id: "scarlet-showman",
    name: "Scarlet Showman",
    subtitle: "Carnival Master of the Crimson Midway",
    description:
      "Scarlet Showman steps out of the haze with a grin made for bad endings and a hand already reaching for the next soul in line. He moves like the whole midway is his stage and every guest is part of the act.",
    accent: "crimson",
    threatLevel: 5,
    quote: "Come a little closer. The show starts with you.",
    weaponOfChoice: "Ringmaster Cane",
    knownFor: "Finale Calls",
    heroImage: "/assets/characters-new-ringmaster-red.png",
    gallery: [
      "/assets/characters-new-ringmaster-red.png",
      "/assets/characters-carousel-11.png",
      "/assets/characters-new-lurker-gnash.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Headliner" },
      { icon: "zone", label: "Lurking In", value: "Crimson Midway" },
      { icon: "sound", label: "Signature", value: "Barker Laugh" },
      { icon: "clock", label: "Best Avoided", value: "After Last Call" },
    ],
  },
  {
    id: "violet-prophet",
    name: "Violet Prophet",
    subtitle: "Dust-Crowned Oracle of the Static",
    description:
      "Violet Prophet never hurries. He studies the crowd through cracked lenses and waits for the brave ones to look back. By the time the smoke turns purple, he already knows exactly where they will run.",
    accent: "violet",
    threatLevel: 4,
    quote: "I saw you coming long before the gates opened.",
    weaponOfChoice: "Hex Lantern",
    knownFor: "Silent Readings",
    heroImage: "/assets/characters-new-purple-prophet.png",
    gallery: [
      "/assets/characters-new-purple-prophet.png",
      "/assets/characters-carousel-4.png",
      "/assets/characters-carousel-6.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Unsettling" },
      { icon: "zone", label: "Lurking In", value: "Static Chapel" },
      { icon: "sound", label: "Signature", value: "Dust Whisper" },
      { icon: "clock", label: "Best Avoided", value: "At Closing Fog" },
    ],
  },
  {
    id: "red-husk",
    name: "Red Husk",
    subtitle: "Flayed Crawl from the Pit",
    description:
      "Red Husk folds itself through the dark like a body that should have stayed buried. It drags close, stares longer than it should, and lunges right when guests convince themselves it cannot move any faster.",
    accent: "crimson",
    threatLevel: 5,
    quote: "Keep watching. I am almost on top of you.",
    weaponOfChoice: "Rotted Talons",
    knownFor: "Pit Crawls",
      heroImage: "/assets/characters-red-husk-orange-panel.png",
      gallery: [
        "/assets/characters-red-husk-orange-panel.png",
        "/assets/characters-carousel-5.png",
        "/assets/characters-new-surgeon-rot.png",
      ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Visceral" },
      { icon: "zone", label: "Lurking In", value: "Red Pit" },
      { icon: "sound", label: "Signature", value: "Wet Scrape" },
      { icon: "clock", label: "Best Avoided", value: "After the Siren" },
    ],
  },
  {
    id: "prism-crawler",
    name: "Prism Crawler",
    subtitle: "Candy-Coated Chaos Thing",
    description:
      "Prism Crawler looks almost playful until the color starts moving wrong and the smile stretches too far. It lunges straight through the rainbow smoke like joy turned venomous.",
    accent: "magenta",
    threatLevel: 4,
    quote: "Pretty colors. Bad idea.",
    weaponOfChoice: "Candy Claws",
    knownFor: "Neon Rushes",
    heroImage: "/assets/characters-new-rainbow-creeper.png",
    gallery: [
      "/assets/characters-new-rainbow-creeper.png",
      "/assets/characters-carousel-6.png",
      "/assets/characters-carousel-11.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Twisted" },
      { icon: "zone", label: "Lurking In", value: "Sugar Riot" },
      { icon: "sound", label: "Signature", value: "Carnival Chitter" },
      { icon: "clock", label: "Best Avoided", value: "In Blacklight" },
    ],
  },
  {
    id: "abyss-diver",
    name: "Abyss Diver",
    subtitle: "Sunken Reaper from the Green Deep",
    description:
      "Abyss Diver rises like a wreck given orders, hauling rust, pressure, and old water into the haunt. Every step sounds heavier than it should, and every swing feels meant to split the room in two.",
    accent: "teal",
    threatLevel: 4,
    quote: "Down here, everybody sinks eventually.",
    weaponOfChoice: "Dive Axe",
    knownFor: "Crushing Swings",
    heroImage: "/assets/characters-new-abyss-diver.png",
    gallery: [
      "/assets/characters-new-abyss-diver.png",
      "/assets/characters-carousel-2.png",
      "/assets/characters-carousel-8.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Heavy" },
      { icon: "zone", label: "Lurking In", value: "Drowned Works" },
      { icon: "sound", label: "Signature", value: "Hull Moan" },
      { icon: "clock", label: "Best Avoided", value: "When the Pressure Drops" },
    ],
  },
  {
    id: "gourd-grim",
    name: "Gourd Grim",
    subtitle: "Jack-O-Lantern Harvest Reaper",
    description:
      "Gourd Grim waits in the dry rows with one eye on the moon and one on the next victim. It reaches forward slowly, like it knows the fear hits harder when guests watch the hand coming.",
    accent: "crimson",
    threatLevel: 4,
    quote: "The harvest always comes due.",
    weaponOfChoice: "Harvest Hand",
    knownFor: "Cornfield Stares",
    heroImage: "/assets/characters-new-pumpkin-revenant.png",
    gallery: [
      "/assets/characters-new-pumpkin-revenant.png",
      "/assets/characters-carousel-3.png",
      "/assets/characters-carousel-8.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Seasonal" },
      { icon: "zone", label: "Lurking In", value: "Harvest Rows" },
      { icon: "sound", label: "Signature", value: "Dry Husk Drag" },
      { icon: "clock", label: "Best Avoided", value: "At Frostfall" },
    ],
  },
  {
    id: "lurker-gnash",
    name: "Lurker Gnash",
    subtitle: "Close-Quarter Bite Thing",
    description:
      "Lurker Gnash doesn’t need the whole room. It only needs the last step between safety and panic. Once the smile opens, the distance disappears with it.",
    accent: "crimson",
    threatLevel: 5,
    quote: "There you are. Close enough now.",
    weaponOfChoice: "Iron Fangs",
    knownFor: "Snap Lunges",
    heroImage: "/assets/characters-new-lurker-gnash.png",
    gallery: [
      "/assets/characters-new-lurker-gnash.png",
      "/assets/characters-new-red-husk.png",
      "/assets/characters-carousel-5.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Rabid" },
      { icon: "zone", label: "Lurking In", value: "Close Hall" },
      { icon: "sound", label: "Signature", value: "Jaw Clatter" },
      { icon: "clock", label: "Best Avoided", value: "When the Lights Dip" },
    ],
  },
  {
    id: "surgeon-rot",
    name: "Surgeon Rot",
    subtitle: "Many-Eyed Doctor of the Last Ward",
    description:
      "Surgeon Rot studies guests the way a butcher studies cuts. It reaches out with wet hands and too many eyes, like the next experiment has already been chosen before the scream starts.",
    accent: "teal",
    threatLevel: 5,
    quote: "Hold still. I need a better look inside.",
    weaponOfChoice: "Bone Saw",
    knownFor: "Ward Extractions",
    heroImage: "/assets/characters-new-surgeon-rot.png",
    gallery: [
      "/assets/characters-new-surgeon-rot.png",
      "/assets/characters-new-red-husk.png",
      "/assets/characters-carousel-7.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Clinical" },
      { icon: "zone", label: "Lurking In", value: "Last Ward" },
      { icon: "sound", label: "Signature", value: "Wet Grip" },
      { icon: "clock", label: "Best Avoided", value: "During Intake" },
    ],
  },
  {
    id: "ivy-wraith",
    name: "Ivy Wraith",
    subtitle: "Root-Bound Hunter of the Green Dark",
    description:
      "Ivy Wraith grows out of the walls like the haunt itself finally got hungry. Leaves, bark, and rot move together around a face that looks almost human until it starts reaching.",
    accent: "neon-lime",
    threatLevel: 4,
    quote: "The woods are awake now.",
    weaponOfChoice: "Rooted Hands",
    knownFor: "Vine Ambushes",
    heroImage: "/assets/characters-new-ivy-wraith.png",
    gallery: [
      "/assets/characters-new-ivy-wraith.png",
      "/assets/characters-carousel-7.png",
      "/assets/characters-new-ragmask.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Overgrown" },
      { icon: "zone", label: "Lurking In", value: "Green Dark" },
      { icon: "sound", label: "Signature", value: "Leaf Crackle" },
      { icon: "clock", label: "Best Avoided", value: "When the Fog Turns Green" },
    ],
  },
  {
    id: "ragmask",
    name: "Ragmask",
    subtitle: "Neon-Rot Doll of the Hollow Glow",
    description:
      "Ragmask floats forward like a broken toy given one awful command. The face grins too wide, the hands come first, and the green haze behind it makes every step feel swallowed.",
    accent: "rainbow",
    threatLevel: 4,
    quote: "Reach for me. I dare you.",
    weaponOfChoice: "Threadbare Grip",
    knownFor: "Glow Lunges",
    heroImage: "/assets/characters-new-ragmask.png",
    gallery: [
      "/assets/characters-new-ragmask.png",
      "/assets/characters-carousel-7.png",
      "/assets/characters-new-ivy-wraith.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Haunting" },
      { icon: "zone", label: "Lurking In", value: "Hollow Glow" },
      { icon: "sound", label: "Signature", value: "Rag Whisper" },
      { icon: "clock", label: "Best Avoided", value: "In Dead Silence" },
    ],
  },
  {
    id: "werewolf",
    name: "Werewolf",
    subtitle: "Moon-Cursed Hunter of the Green Run",
    description:
      "Werewolf stalks low through the green haze with torn flannel, wet fangs, and the kind of patience that only breaks when the line finally gets too close. Once it lunges, the whole path feels too narrow to escape.",
    accent: "green",
    threatLevel: 5,
    quote: "Run if you want. I like the chase better.",
    weaponOfChoice: "Rending Claws",
    knownFor: "Moonrush Attacks",
    heroImage: "/assets/characters-werewolf-costume.png",
    gallery: [
      "/assets/characters-werewolf-costume.png",
      "/assets/characters-new-ivy-wraith.png",
      "/assets/characters-new-ward-bane.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Savage" },
      { icon: "zone", label: "Lurking In", value: "Green Run" },
      { icon: "sound", label: "Signature", value: "Lunar Snarl" },
      { icon: "clock", label: "Best Avoided", value: "When the Fog Turns Wild" },
    ],
  },
    {
      id: "eden-of-nr",
      name: "Eden of NR",
      subtitle: "Bloom-Bound Watcher of the Green Aqua",
    description:
      "Eden of NR steps out of the overgrowth like the haunt itself learned how to hunt. Petals, bark, and damp roots cling to every movement, and the closer guests get, the more the woods seem to lean in with it.",
    accent: "aqua-green",
    threatLevel: 4,
    quote: "Every path grows back into my hands.",
    weaponOfChoice: "Bloomed Tendrils",
    knownFor: "Verdant Ambushes",
    heroImage: "/assets/characters-new-bloom-stalker.png",
    gallery: [
      "/assets/characters-new-bloom-stalker.png",
      "/assets/characters-new-ivy-wraith.png",
      "/assets/characters-new-ragmask.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Overtaking" },
      { icon: "zone", label: "Lurking In", value: "Green Aqua" },
      { icon: "sound", label: "Signature", value: "Root Creak" },
        { icon: "clock", label: "Best Avoided", value: "When the Canopy Hums" },
      ],
    },
    {
      id: "splitbloom",
      name: "Splitbloom",
      subtitle: "Two-Faced Bloom of the Green Divide",
      description:
        "Splitbloom stares with one face that grins and another that breaks. It leans in through the green haze like the woods tore a person in half and taught both sides how to hunt.",
      accent: "neon-lime",
      threatLevel: 4,
      quote: "One side welcomes you. The other side feeds.",
      weaponOfChoice: "Grasping Hands",
      knownFor: "Split-Face Lunges",
      heroImage: "/assets/characters-splitbloom.png",
      gallery: [
        "/assets/characters-splitbloom.png",
        "/assets/characters-new-bloom-stalker.png",
        "/assets/characters-new-ivy-wraith.png",
      ],
      stats: [
        { icon: "skull", label: "Fear Level", value: "Unsettling" },
        { icon: "zone", label: "Lurking In", value: "Green Divide" },
        { icon: "sound", label: "Signature", value: "Twin Scream" },
        { icon: "clock", label: "Best Avoided", value: "When the Path Splits" },
      ],
    },
    {
      id: "widow-veil",
      name: "Widow Veil",
      subtitle: "Fan-Bearing Mourner of the Purple Run",
    description:
      "Widow Veil drifts through the wet dark with a black fan and a stare that lands before her footsteps do. She turns slowly, lets the silence tighten, and makes every guest feel chosen before the chase begins.",
    accent: "violet",
    threatLevel: 4,
    quote: "Do not mistake grace for mercy.",
    weaponOfChoice: "Razor Fan",
    knownFor: "Silent Turns",
    heroImage: "/assets/characters-new-widow-veil.png",
    gallery: [
      "/assets/characters-new-widow-veil.png",
      "/assets/characters-new-purple-prophet.png",
      "/assets/characters-carousel-4.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Elegant" },
      { icon: "zone", label: "Lurking In", value: "Purple Run" },
      { icon: "sound", label: "Signature", value: "Fan Snap" },
      { icon: "clock", label: "Best Avoided", value: "After Midnight" },
    ],
  },
  {
    id: "nurse-nocturne",
    name: "Nurse Nocturne",
    hiddenFromLineup: true,
    subtitle: "Needle Saint of the Violet Ward",
    description:
      "Nurse Nocturne leans in with a shining needle and a look that says the procedure has already started. The closer the lights buzz overhead, the steadier her hand becomes.",
    accent: "violet",
    threatLevel: 5,
    quote: "This sting means you are still awake.",
    weaponOfChoice: "Catheter Spike",
    knownFor: "Ward Rushes",
    heroImage: "/assets/characters-new-nurse-nocturne.png",
    gallery: [
      "/assets/characters-new-nurse-nocturne.png",
      "/assets/characters-new-surgeon-rot.png",
      "/assets/characters-carousel-7.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Lethal" },
      { icon: "zone", label: "Lurking In", value: "Violet Ward" },
      { icon: "sound", label: "Signature", value: "Metal Scrape" },
      { icon: "clock", label: "Best Avoided", value: "During Intake" },
    ],
  },
  {
    id: "ward-bane",
    name: "Ward Bane",
    subtitle: "Breather Butcher of the Green Theater",
    description:
      "Ward Bane does not rush. It stares through the mask, lets the tubes sway, and waits for panic to meet it halfway. By the time guests decide to move, the room already feels sealed shut.",
    accent: "green",
    threatLevel: 5,
    quote: "Breathe deeper. I want to hear the fear.",
    weaponOfChoice: "Surgical Tubing",
    knownFor: "Close Examinations",
    heroImage: "/assets/characters-new-ward-bane.png",
    gallery: [
      "/assets/characters-new-ward-bane.png",
      "/assets/characters-new-surgeon-rot.png",
      "/assets/characters-new-abyss-diver.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Suffocating" },
      { icon: "zone", label: "Lurking In", value: "Green Theater" },
      { icon: "sound", label: "Signature", value: "Mask Hiss" },
      { icon: "clock", label: "Best Avoided", value: "When the Doors Lock" },
    ],
  },
  {
    id: "sugarshock",
    name: "Sugarshock",
    subtitle: "Cupcake Brute of the Pink Panic",
    description:
      "Sugarshock swings sweet with one hand and smashes hard with the other. She grins through the fog, lets the pink smoke rise, and turns every bright corner into a terrible surprise.",
    accent: "magenta",
    threatLevel: 4,
    quote: "Dessert is the part where you scream.",
    weaponOfChoice: "Cake Mallet",
    knownFor: "Frosted Beatdowns",
    heroImage: "/assets/characters-new-sugarshock.png",
    gallery: [
      "/assets/characters-new-sugarshock.png",
      "/assets/characters-new-rainbow-creeper.png",
      "/assets/characters-carousel-11.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Crushing" },
      { icon: "zone", label: "Lurking In", value: "Pink Panic" },
      { icon: "sound", label: "Signature", value: "Candy Crack" },
      { icon: "clock", label: "Best Avoided", value: "After the Confetti" },
    ],
  },
  {
    id: "lantern-lacey",
    name: "Lantern Lacey",
    subtitle: "Harvest Doll in the Ember Hall",
    description:
      "Lantern Lacey peeks around the corner like she has been waiting there all night. She moves slow enough to be seen, then smiles just before guests realize how close she already is.",
    accent: "ember",
    threatLevel: 4,
    quote: "Peekaboo only works once.",
    weaponOfChoice: "Hooked Nails",
    knownFor: "Corner Watches",
    heroImage: "/assets/characters-new-lantern-lacey.png",
    gallery: [
      "/assets/characters-new-lantern-lacey.png",
      "/assets/characters-new-pumpkin-revenant.png",
      "/assets/characters-carousel-3.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Creeping" },
      { icon: "zone", label: "Lurking In", value: "Ember Hall" },
      { icon: "sound", label: "Signature", value: "Toy Giggle" },
      { icon: "clock", label: "Best Avoided", value: "At Last Lantern" },
    ],
  },
  {
    id: "red-refrain",
    name: "Red Refrain",
    subtitle: "Crooked Clown of the Crimson Stage",
    description:
      "Red Refrain tilts into view already laughing, like the punchline landed before the guests knew there was a joke. The grin never breaks, and neither does the pressure once the red light hits.",
    accent: "crimson",
    threatLevel: 4,
    quote: "The joke gets sharper every time I tell it.",
    weaponOfChoice: "Barbed Smile",
    knownFor: "Stage Stalks",
    heroImage: "/assets/characters-new-red-refrain.png",
    gallery: [
      "/assets/characters-new-red-refrain.png",
      "/assets/characters-new-ringmaster-red.png",
      "/assets/characters-carousel-5.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Unnerving" },
      { icon: "zone", label: "Lurking In", value: "Crimson Stage" },
      { icon: "sound", label: "Signature", value: "Crooked Laugh" },
      { icon: "clock", label: "Best Avoided", value: "When the House Lights Drop" },
    ],
  },
  {
    id: "nightcarver",
    name: "Nightcarver",
    subtitle: "Chainsaw Widow of the Black Flood",
    description:
      "Nightcarver stands in the rain like the whole world stopped just to hear the engine idle. She does not need to run. The rev alone makes the path in front of her feel closed.",
    accent: "silver",
    threatLevel: 5,
    quote: "You heard me coming. That was the warning.",
    weaponOfChoice: "Chainsaw",
    knownFor: "Final Rev",
    heroImage: "/assets/characters-new-nightcarver.png",
    gallery: [
      "/assets/characters-new-nightcarver.png",
      "/assets/characters-carousel-1.png",
      "/assets/characters-carousel-10.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Relentless" },
      { icon: "zone", label: "Lurking In", value: "Black Flood" },
      { icon: "sound", label: "Signature", value: "Saw Rev" },
      { icon: "clock", label: "Best Avoided", value: "When the Rain Starts" },
    ],
  },
  {
    id: "tomb-sever",
    name: "Tomb Sever",
    subtitle: "Anubis-Bound Judge of the Dust Gate",
    description:
      "Tomb Sever points like a sentence already passed. Wrapped in old rites and carrying a relic that should have stayed buried, it turns the path ahead into something ceremonial and final.",
    accent: "crimson",
    threatLevel: 4,
    quote: "The dead are patient. I am not.",
    weaponOfChoice: "Jackal Relic",
    knownFor: "Dust Summons",
    heroImage: "/assets/characters-tomb-sever-red-panel.png",
    gallery: [
      "/assets/characters-tomb-sever-red-panel.png",
      "/assets/characters-carousel-3.png",
      "/assets/characters-new-pumpkin-revenant.png",
    ],
    stats: [
      { icon: "skull", label: "Fear Level", value: "Ancient" },
      { icon: "zone", label: "Lurking In", value: "Dust Gate" },
      { icon: "sound", label: "Signature", value: "Sand Hiss" },
      { icon: "clock", label: "Best Avoided", value: "At Dead Dusk" },
    ],
  },
];

export function slugifyCharacterName(name) {
  return String(name ?? "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function mergeCharacterIdentity(character) {
  const identityOverride = characterIdentityOverrides?.[character.id];

  if (!identityOverride || typeof identityOverride !== "object") {
    return character;
  }

  const mergedLegacySlugs = Array.from(
    new Set([...(character.legacySlugs ?? []), ...(identityOverride.legacySlugs ?? [])].filter(Boolean)),
  );

  return {
    ...character,
    ...identityOverride,
    legacySlugs: mergedLegacySlugs,
  };
}

const removedCharacterNames = new Set([
  "moria",
  "moira",
  "silence",
  "thesheriff",
  "theringmaster",
  "sirkracken",
  "redhusk",
  "prismcrawler",
  "overgrown",
  "goudagrim",
  "gourdgrim",
  "themutant",
  "possesseddiver",
  "squeeks",
  "edenofnr",
  "splitbloom",
  "windowveil",
  "widowveil",
  "wardbane",
  "sugarshock",
  "lanternlacey",
  "redrefrain",
  "nightcarver",
  "tombsever",
]);

function normalizeCharacterKey(name) {
  return String(name ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

export const characterDetails = baseCharacterDetails
  .map(mergeCharacterIdentity)
  .filter((character) => !removedCharacterNames.has(normalizeCharacterKey(character.name)));
export const lineupCharacters = characterDetails.filter((character) => !character.hiddenFromLineup);

export function getCharacterSlug(character) {
  return character?.slug ?? slugifyCharacterName(character?.name ?? character?.id);
}

export function getCharacterRouteAliases(character) {
  return Array.from(
    new Set(
      [getCharacterSlug(character), character?.id, ...(character?.legacySlugs ?? [])].filter(Boolean),
    ),
  );
}

export function findCharacterIndexBySlug(slug) {
  return characterDetails.findIndex((character) => getCharacterRouteAliases(character).includes(slug));
}

export function findCharacterBySlug(slug) {
  const index = findCharacterIndexBySlug(slug);
  return index === -1 ? null : characterDetails[index];
}
