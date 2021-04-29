import { useCallback, useEffect } from "react";

export const useClickaway = (ref, onClickaway) => {
  const handleClickOutside = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (onClickaway) {
          onClickaway();
        }
      }
    },
    [ref, onClickaway]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
};
