import React from "react";
import { useState } from "react/cjs/react.production.min";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const userInfo =[
    {name: 'mark', age:22},

  ];

  return (
    <div>
      <AddUser username={userInfo} userage={userInfo} />
      <UserList users={userInfo} />
    </div>
  );
}

export default App;
