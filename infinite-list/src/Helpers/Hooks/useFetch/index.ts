import { useCallback, useEffect, useState } from "react";
import { IHuman, TPromiseObject, TUseFetch } from "./types";
import { v4 as uuidv4 } from "uuid";


function useFetch (endpoint: string): TUseFetch {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false);
  const [humanData, setHumanData] = useState<IHuman[]>([]);

  const fetchHumanData = useCallback(async () => {
    try {
      setIsLoading(true);
      setMessage('...loading')
      const data = await fetch(endpoint);

      const response: TPromiseObject = await data.json();

      response.results.forEach((result) => {
        setHumanData((prev) => {
          const newHuman: IHuman = {
            id: uuidv4(),
            avatar: result.picture.large,
            name: result.name.first,
            surname: result.name.last,
            age: result.dob.age,
            gender: result.gender,
          };
          return [...prev, newHuman];
        });
      });
    } catch (error) {
      setIsError(true);
      setMessage("Ooops...something went wrong :(")
      
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    if (!message) return
    const timeout = setTimeout(() => {
      setIsError(false)
      setMessage('')
    }, 5000)

    return () => clearTimeout(timeout)
  }, [message])

  useEffect(() => {
    fetchHumanData();
  }, [fetchHumanData]);


  return { isLoading, humanData, isError, fetchHumanData, message };
};

export {useFetch};
