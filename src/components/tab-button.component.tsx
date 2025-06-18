import type { TabButtonProps } from "../interfaces/tab-button-props.interface";

export function TabButton({ children, isSelected, onClick }: TabButtonProps) {
  return (
    <button
      className={`px-5 py-2 font-medium text-sm transition-all duration-200 ${
        isSelected
          ? "bg-white text-black shadow-inner border border-gray-200"
          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
      }`}
      style={{
        borderRadius: "8px",
        boxShadow: isSelected
          ? "inset 0 1px 3px rgba(0,0,0,0.1)"
          : "0 1px 2px rgba(0,0,0,0.05)",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
