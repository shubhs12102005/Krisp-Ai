import { useState } from "react";

/**
 * Custom hook for collapsible tabs and accordion state
 */
export function useAccordion(initialOpenIndices = [0]) {
  const [openItems, setOpenItems] = useState(
    initialOpenIndices.reduce((acc, idx) => ({ ...acc, [idx]: true }), {})
  );

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const isItemOpen = (index) => Boolean(openItems[index]);

  return {
    openItems,
    toggleItem,
    isItemOpen
  };
}
