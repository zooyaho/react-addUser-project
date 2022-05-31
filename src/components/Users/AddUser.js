import React, { useState } from "react";
import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUdername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // 초기값을 undefined로 설정
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUdername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    //onSubmit 기본 동작을 멈춤
    event.preventDefault();
    
    /* 유효성 검사 */
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // 공백으로 입력한 경우
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    }
    if (+enteredAge < 1) {
      // 나이를 0이하로 입력한 경우
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0)."
      });
      return;
    }

    // App.js에 추가할 userName, userAge 전달
    props.onAddUser(enteredUsername, enteredAge);
    // 초기화
    setEnteredUdername("");
    setEnteredAge("");
  };

  const errorHandler = ()=>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      {/* <ErrorModal title={error.title} message={error.message} /> */}
      <Card className={styles.input}>
        {/* htmlFor: props속성이며, js에서 for에 해당함 */}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit" onConfirm={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
