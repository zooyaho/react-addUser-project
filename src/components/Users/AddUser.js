import React from "react";

const AddUser = (props) => {

  const addUserHandler = (event)=>{
    //onSubmit 기본 동작을 멈춤
    event.preventDefault();
  };

  return (
    //htmlFor: props속성이며, js에서 for에 해당함
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
