import { mkdirSync, writeFileSync } from "node:fs";

// Rename the Planet
// One line renaming a planet and saying why it earns the name:
// Neptune becomes "The Bouncer" — 2,100 km/h winds, minus 200 degrees,
// and it still won't let a single comet past the velvet rope.

const ENTRY =
  "Renaming Neptune 'The Bouncer': 2,100 km/h winds, minus 200 degrees, and it still won't let a single comet past the velvet rope.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
