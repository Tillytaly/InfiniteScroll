import React from "react";

export type TLoadMoreRef = React.MutableRefObject<null>;

export type TUseInfiniteScrollProps = () => Promise<void>;

export type TUseInfiniteScrollReturn = {
  loadMoreRef: TLoadMoreRef;
};
