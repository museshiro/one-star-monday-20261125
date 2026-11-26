import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday as a restaurant: a diner at Table 9 gets
// Sunday roast served cold and grey, renamed on the bill as Monday.
const PART_A = "One star. Table 9: my Sunday roast arrived cold and grey, ";
const PART_B = "billed as the Monday Surprise, plus a mandatory weekend surcharge.";
const LINE = PART_A + PART_B;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
