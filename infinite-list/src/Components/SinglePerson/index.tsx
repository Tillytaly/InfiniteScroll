import styles from "./singlePerson.module.scss";
import { ISinglePerson } from "./types";
// import { PrimitivesValidation } from "../../../../../Validation/PrimitivesValidation";

const {card, paragraph, photo} = styles

const SinglePerson = ({
  avatar,
  name,
  surname,
  gender,
  age,
}: ISinglePerson) => {
//   const stringsToValidate = [avatar, name, surname];

//   stringsToValidate.forEach((string) => {
//     if (string === avatar) {
//       PrimitivesValidation.isImage(avatar);
//     }
//     PrimitivesValidation.isLongEnough(1, string);
//   });

//   PrimitivesValidation.isNumberGreaterThan(0, age);

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
