export type TRandomUser = {
  dob: { date: string; age: number };
  name: { title: string; first: string; last: string };
  picture: { large: string; medium: string; thumbnail: string };
  gender: string;
};

export type TPromiseObject = {
  results: TRandomUser[];
};

type TFetchData = () => Promise<void>;

export type TUseFetch<T> = {
  isLoading: boolean;
  humanData: T[];
  isError: boolean;
  message: string;
  fetchHumanData: TFetchData;
};
