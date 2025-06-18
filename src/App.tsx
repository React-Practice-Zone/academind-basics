import { CoreConcept } from "./components/core-concept.component";
import { Header } from "./components/header.component";
import { RandomWordParagraph } from "./components/paragraph.component";
import { useState } from "react";
import { TabButton } from "./components/tab-button.component";
import reactImage from "./assets/react-core-concepts.png";
import CORE_CONCEPTS from "./utils/core-concepts.util";

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
      <main className="container mx-auto px-4 py-8">
        <section id="core-concept" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Core Concepts
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CORE_CONCEPTS.map((conceptItem) => (
              <TabButton
                key={conceptItem.title}
                isSelected={selectedConcept === conceptItem.title}
                onClick={() => handleSelect(conceptItem.title)}
              >
                {conceptItem.title}
              </TabButton>
            ))}
          </div>

          <div className="flex justify-center">
            {selectedConceptData && (
              <CoreConcept
                title={selectedConceptData.title}
                description={selectedConceptData.description}
                imageUrl={selectedConceptData.imageUrl}
              />
            )}
          </div>
        </section>
      </main>
      <RandomWordParagraph />
    </div>
  );
}

export default App;
