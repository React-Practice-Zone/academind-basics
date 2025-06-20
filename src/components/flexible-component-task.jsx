export default function Button({ children, mode = "filled", Icon, ...props }) {
  // Todo: Build this component!

  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>
  const modeClass =
    {
      filled: "filled-button",
      outline: "outline-button",
      text: "text-button",
    }[mode] || "filled-button";

  const hasIcon = !!Icon;

  return (
    <button
      className={`button ${modeClass} ${hasIcon ? "icon-button" : ""}`}
      {...props}
    >
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

import Button from './Button';
import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';

function App() {
  return (
     <div id="app">
      <section>
        <h2>Filled Button (Default)</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button mode="filled">Filled (Default)</Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button Icon={HomeIcon}>Home</Button>
        </p>
        <p>
          <Button Icon={PlusIcon} mode="text">
            Add
          </Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log('Clicked!')}>Click me</Button>
        </p>
      </section>
    </div>
  );
}

export default App;
