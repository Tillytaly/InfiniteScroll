import { SinglePerson } from "../SinglePerson";
import { IMoreAndMorePeopleProps } from "./types";
// import { ObjectValidation } from "../../../../../Validation/ObjectValidation";
const MoreAndMorePeople = ({ people }: IMoreAndMorePeopleProps) => {
  // for (const person of people) {
  //   ObjectValidation.isObjectLiteralEmpty(person);
  // }

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
