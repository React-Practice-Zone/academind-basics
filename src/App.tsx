import { CoreConcept } from "./components/core-concept.component";
import { Header } from "./components/header.component";
import { RandomWordParagraph } from "./components/paragraph.component";
import reactImage from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";
import { useState } from "react";

function App() {
  // * 2nd element should start from 'set' - this is a naming convention in React
  const [tabComponent, setTab] = useState(0);

  return (
    <>
      <Header image={reactImage} />
      <main>
        <section id="core-concept">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              imageUrl={componentsImage}
            />
            {/* <CoreConcept />
            <CoreConcept />
            <CoreConcept /> */}
          </ul>
        </section>
        <h2>Time to get's started</h2>
      </main>
      <RandomWordParagraph />
    </>
  );
}

export default App;
