import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUdername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  // 초기값을 undefined로 설정
  const [error, setError] = useState();
  // state대신 input에 ref로 연결
  const nameInputRef = useRef(); 
  const ageInputRef = useRef(); 

  // const usernameChangeHandler = (event) => {
  //   setEnteredUdername(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    //onSubmit 기본 동작을 멈춤
    event.preventDefault();
    console.log(nameInputRef.current.value);

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    
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

    /* 초기화 */
    // setEnteredUdername("");
    // setEnteredAge("");
    // useRef로는 초기화 작업때 dom의 값을 직접 변경하는 방법 밖에 없음. 
    // dom을 리액트가 아닌 직접 변경하는건 좋은 방법이 아니지만 이런 경우에는 사용해도 괜찮음.
    // 이렇게 값만 읽을때는 state보다는 ref를 사용하여 코드를 줄이면 좋음.
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    
  };

  const errorHandler = ()=>{
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      {/* <ErrorModal title={error.title} message={error.message} /> */}
      <Card className={styles.input}>
        {/* htmlFor: props속성이며, js에서 for에 해당함 */}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit" onConfirm={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
