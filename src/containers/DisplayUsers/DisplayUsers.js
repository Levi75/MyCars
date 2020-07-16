import React from "react";
import Styles from "./DisplayUsers.module.scss";
import Users from "./Users/Users";
import axios from "axios";
import { MDBRow } from "mdbreact";
import Spinner from "../../helper/HelperSpinner/HelperSpinner";

export default function DisplayCars() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/users/list");
      setUsers(response.data);
      setIsLoading(false);
      return;
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      return;
    }
  };

  React.useMemo(() => {
    getUsers();
  }, []);

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div className={Styles.DisplayCars}>
      <h1 className="p-5 display-4 text-center"> Пользователи </h1>
      {/* <MDBRow> */}
      {users.map((user, index) => {
        return (
          <Users
            user={user}
            key={index}
            getUsers={getUsers}
            setIsLoading={setIsLoading}
          />
        );
      })}
      {/* </MDBRow> */}
    </div>
  );
}
