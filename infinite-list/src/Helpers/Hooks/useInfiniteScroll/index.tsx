import { useCallback, useEffect, useRef } from "react";
import { TUseInfiniteScrollProps, TUseInfiniteScrollReturn } from "./types";

function useInfiniteScroll(
  onLoad: TUseInfiniteScrollProps
): TUseInfiniteScrollReturn {
  const loadMoreRef = useRef(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting) {
      onLoad();
    }
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, []);

  return { loadMoreRef };
}

export  {useInfiniteScroll};
