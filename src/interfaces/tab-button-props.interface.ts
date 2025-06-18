import type { ReactNode } from "react";

export interface TabButtonProps {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}
