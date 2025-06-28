export function Header({ image }) {
  return (
    <header className="flex flex-col items-center mt-8 mb-24">
      <h1>Vite + React</h1>
      <img src={image} alt="" className="mb-8 w-50 h-50" />
      <p>Welcome to your Vite + React application!</p>
      <p className="text-gray-100 text-sm leading-relaxed">
        React is a JavaScript library for building user interfaces.
      </p>
    </header>
  );
}
