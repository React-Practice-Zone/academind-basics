export function Header({ image }) {
  return (
    <header>
      <h1>Vite + React</h1>
      <img src={image} alt="" />
      <p>Welcome to your Vite + React application!</p>
      <p className="text-gray-100 text-sm leading-relaxed">
        React is a JavaScript library for building user interfaces.
      </p>
    </header>
  );
}
