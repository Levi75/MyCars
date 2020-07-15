import React from "react";
import Styles from "./DisplayUsers.module.scss";
import Users from "./users/Users";
import axios from "axios";
import { MDBRow } from "mdbreact";

export default function DisplayCars() {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users/list");
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useMemo(() => {
    getUsers();
  }, []);

  return (
    <div className={Styles.DisplayCars}>
      <h1 className="p-5 display-4 text-center"> Пользователи </h1>
      {/* <MDBRow> */}
      {users.map((user, index) => {
        return <Users user={user} key={index} getUsers={getUsers} />;
      })}
      {/* </MDBRow> */}
    </div>
  );
}
