import { CoreConcept } from "./components/core-concept.component";
import { Header } from "./components/header.component";
import { RandomWordParagraph } from "./components/paragraph.component";
import { useState } from "react";
import { TabButton } from "./components/tab-button.component";
import reactImage from "./assets/react-core-concepts.png";
import CORE_CONCEPTS from "./utils/core-concepts.util";
import { styled } from "styled-components";

const MainH2 = styled.h2`
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
  margin: 0 0 1.5rem 0;
  color: #a18aba;
`;

const ExamplesSection = styled.section`
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ConceptContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  width: 90%;
  max-width: 50rem;
  margin: auto;
`;

function App() {
  // * 2nd element should start from 'set' - this is a naming convention in React
  const [selectedConcept, setSelectedConcept] = useState("Components");

  function handleSelect(conceptTitle: string) {
    setSelectedConcept(conceptTitle);
  }

  const selectedConceptData = CORE_CONCEPTS.find(
    (concept) => concept.title === selectedConcept
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header image={reactImage} />
      <Main>
        <ExamplesSection id="examples">
          <MainH2>Core Concepts</MainH2>

          <ButtonContainer>
            <menu>
              {CORE_CONCEPTS.map((conceptItem) => (
                <TabButton
                  key={conceptItem.title}
                  isSelected={selectedConcept === conceptItem.title}
                  onClick={() => handleSelect(conceptItem.title)}
                >
                  {conceptItem.title}
                </TabButton>
              ))}
            </menu>
          </ButtonContainer>

          <ConceptContainer>
            {selectedConceptData && (
              <CoreConcept
                title={selectedConceptData.title}
                description={selectedConceptData.description}
                imageUrl={selectedConceptData.imageUrl}
              />
            )}
          </ConceptContainer>
        </ExamplesSection>
      </Main>
      <RandomWordParagraph />
    </div>
  );
}

export default App;
