import { TUseAppProps, TUseApp } from "./types";
import { useFetch } from "../useFetch";
import { useInfiniteScroll } from "../useInfiniteScroll";

function useApp(endpoint: string): TUseApp {
  const { isLoading, humanData, isError, fetchHumanData, message } =
    useFetch(endpoint);
  const { loadMoreRef } = useInfiniteScroll(fetchHumanData);

  return { isLoading, humanData, isError, message, loadMoreRef };
}

export { useApp };
