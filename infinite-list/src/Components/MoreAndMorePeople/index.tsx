import { SinglePerson } from "../SinglePerson";
import { IMoreAndMorePeopleProps } from "./types";
import { IHuman } from "../../Types";

const MoreAndMorePeople = ({ people }: IMoreAndMorePeopleProps<IHuman>) => {
  return (
    <>
      {people.map(({id, avatar, name, surname, gender, age}) => {
        return (
          <SinglePerson
            key={id}
            avatar={avatar}
            name={name}
            surname={surname}
            gender={gender}
            age={age}
          />
        );
      })}
    </>
  );
};

export default MoreAndMorePeople;
