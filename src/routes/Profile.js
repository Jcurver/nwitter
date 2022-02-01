import { authService } from "fbase";
import { signOut } from "firebase/auth";
import React from "react";
import { useHistory } from "react-router";
export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    signOut();
    history.push("/")
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
