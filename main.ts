// One-star review of Monday as a restaurant: the diner ordered the weekend,
// Monday arrived undercooked instead, and the bill still charged for both.
import { mkdirSync, writeFileSync } from "node:fs";

const RATING = "One star.";
const ORDER = "I ordered the weekend;";
const SERVED = "Monday arrived instead, undercooked,";
const BILL = "and the waiter charged me for both.";

const line = [RATING, ORDER, SERVED, BILL].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
