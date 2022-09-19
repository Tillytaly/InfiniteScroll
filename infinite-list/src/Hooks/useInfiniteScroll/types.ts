import React from "react";

export type TLoadMoreRef = React.RefObject<HTMLDivElement>;

export type TUseInfiniteScrollProps = () => Promise<void>;

export type TUseInfiniteScrollReturn = {
  loadMoreRef: TLoadMoreRef;
};
