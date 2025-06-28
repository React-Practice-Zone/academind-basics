import type { CoreConceptProps } from "../interfaces/core-concept-props.interface";
import { styled } from "styled-components";

const ConceptContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(255, 53, 252, 0.36);
  max-width: 45rem;
  margin: 0 auto;
`;

const ConceptImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ConceptContent = styled.div`
  flex: 1;
`;

const ConceptTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: rgb(255, 0, 204);
  margin-bottom: 0.5rem;
`;

const ConceptDescription = styled.p`
  color: rgb(255, 157, 247);
`;

export function CoreConcept({
  title,
  description,
  imageUrl,
}: CoreConceptProps) {
  return (
    <ConceptContainer>
      <ConceptImage src={imageUrl} alt={title} />
      <ConceptContent>
        <ConceptTitle>{title}</ConceptTitle>
        <ConceptDescription>{description}</ConceptDescription>
      </ConceptContent>
    </ConceptContainer>
  );
}
