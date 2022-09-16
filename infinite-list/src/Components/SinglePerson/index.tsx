import styles from "./singlePerson.module.scss";
import { ISinglePerson } from "./types";

const { card, paragraph, photo } = styles;

const SinglePerson = ({
  avatar,
  name,
  surname,
  gender,
  age,
}: ISinglePerson) => {
  return (
    <div className={card}>
      <img className={photo} alt="User" src={avatar}></img>
      <ul>
        <li className={paragraph}> {`${name} ${surname}`} </li>
        <li>gender: {gender}</li>
        <li> age: {age} </li>
      </ul>
    </div>
  );
};

export { SinglePerson };
