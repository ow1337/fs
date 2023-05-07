import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function withAuthAdmin(Component) {
  function WithAuthAdmin(props) {
    const { currentUser } = useContext(AuthContext);
    if (currentUser && currentUser.role === "admin") {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }

  return WithAuthAdmin;
}

export default withAuthAdmin;
