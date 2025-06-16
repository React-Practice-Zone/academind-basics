import { getRandomInt } from "./utils/get-random-int.util";

const RandomWords = [
  "Fundamental",
  "Crucial",
  "Essential",
  "Vital",
  "Integral",
  "Indispensable",
  "Key",
  "Pivotal",
  "Core",
  "Primary",
];

export function RandomWordParagraph() {
  return (
    <p>
      {RandomWords[getRandomInt(4)]} React concepts I will need for almost every
      app I gonna build
    </p>
  );
}
