import { getRandomInt } from "../utils/get-random-int.util";

const randomWords = [
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
  const words = randomWords[getRandomInt(4)];

  return (
    <p className="text-lg font-medium text-gray-700 mb-6 italic border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded">
      {words} React concepts I will need for almost every app I gonna build
    </p>
  );
}
