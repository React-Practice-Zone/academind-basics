import type { TabButtonProps } from "../interfaces/tab-button-props.interface";

export function TabButton({ children, isSelected, onClick }: TabButtonProps) {
  return (
    <button className={isSelected ? "active" : ""} onClick={onClick}>
      {children}
    </button>
  );
}
