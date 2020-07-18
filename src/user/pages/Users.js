import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
      {id :'u1',
      name :'prasadi sewwandi',
      image : require('../pictures/a.jpg'),
      places : 3                
     }
];

  return <UsersList items={USERS} />;
};

export default Users;
