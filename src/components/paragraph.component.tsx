import { getRandomInt } from "../utils/get-random-int.util";
import { styled } from "styled-components";

const StyledParagraph = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
  margin-bottom: 1.5rem;
  font-style: italic;
  border-left: 4px solid #f63b92;
  padding-left: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(166, 0, 255, 0.38);
  border-radius: 0.25rem;
  max-width: 50rem;
  margin: 1.5rem auto;
  text-align: center;
`;

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
    <StyledParagraph>
      {words} React concepts I will need for almost every app I gonna build
    </StyledParagraph>
  );
}
