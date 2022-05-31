import React from "react";
import styles from './AddUser.module.css';

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    //onSubmit 기본 동작을 멈춤
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      {/* htmlFor: props속성이며, js에서 for에 해당함 */}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
