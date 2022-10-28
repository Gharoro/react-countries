import { useEffect } from "react";

export default function useOutsideClick(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  ref2: React.MutableRefObject<HTMLDivElement | null>,
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        ref2.current &&
        !ref2.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, ref2, setShowOptions]);
}
