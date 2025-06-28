import React from "react";

function App() {
  const [buttonClicked, setButtonClicked] = React.useState(undefined);

  const handleClick = (button) => {
    if (button === "Yes") {
      setButtonClicked("highlight-green");
    } else if (button === "No") {
      setButtonClicked("highlight-red");
    } else setButtonClicked(undefined);
  };

  return (
    <div id="app">
      <h1 className={buttonClicked ? buttonClicked : undefined}>
        CSS is great!
      </h1>
      <menu>
        <li>
          <button onClick={() => handleClick("Yes")}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleClick("No")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
