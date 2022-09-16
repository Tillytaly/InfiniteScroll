import { TUseAppProps, TUseAppReturn } from "./types";
import { useFetch } from "../useFetch";
import { useInfiniteScroll } from "../useInfiniteScroll";
// TUseAppProps
function useApp(endpoint: string): TUseAppReturn {
  const { isLoading, humanData, isError, fetchHumanData, message } =
    useFetch(endpoint);
  const { loadMoreRef } = useInfiniteScroll(fetchHumanData);

  return { isLoading, humanData, isError, message, loadMoreRef };
}

export { useApp };
