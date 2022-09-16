import { SinglePerson } from "../SinglePerson";
import { IMoreAndMorePeopleProps } from "./types";

const MoreAndMorePeople = ({ people }: IMoreAndMorePeopleProps) => {
  return (
    <>
      {people.map((person, index) => {
        return (
          <SinglePerson
            key={index}
            avatar={person.avatar}
            name={person.name}
            surname={person.surname}
            gender={person.gender}
            age={person.age}
          />
        );
      })}
    </>
  );
};

export default MoreAndMorePeople;
