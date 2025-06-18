function Todo({ item }) {
  return <li>{item}</li>;
}

// don't remove the export keyword here!
export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

export default function App() {
  return (
    <>
      {DUMMY_TODOS.map((todo) => (
        <Todo item={todo} />
      ))}
    </>
  );
}
