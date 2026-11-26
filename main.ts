import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Renaming Neptune 'The Bouncer': 2,100 km/h winds, minus 200 degrees, and it still won't let anything in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
