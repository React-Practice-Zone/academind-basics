export function CoreConcept({
  title: string,
  description: string,
  imageUrl: string,
}) {
  return (
    <li>
      <img src={imageUrl} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
