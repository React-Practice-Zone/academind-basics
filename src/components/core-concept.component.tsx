import type { CoreConceptProps } from "../interfaces/core-concept-props.interface";

export function CoreConcept({
  title,
  description,
  imageUrl,
}: CoreConceptProps) {
  return (
    <li className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-16 h-16 object-contain mb-2"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </li>
  );
}
