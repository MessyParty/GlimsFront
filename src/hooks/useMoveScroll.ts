import { useRef } from "react";

export default function useMoveScroll() {
  const scrollRef = useRef<Array<HTMLDivElement>>([]);

  const onMoveToElement = (index: number) => {
    scrollRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { scrollRef, onMoveToElement };
}
