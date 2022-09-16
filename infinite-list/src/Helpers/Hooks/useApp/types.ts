import {IHuman} from "../useFetch/types"
import {TLoadMoreRef} from "../useInfiniteScroll/types"

export type TUseAppProps = {
    endpoint: string,
}

export type TUseAppReturn = {
isLoading: boolean,
humanData: IHuman[],
isError: boolean,
message: string,
loadMoreRef: TLoadMoreRef
}