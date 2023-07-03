import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
const Register = () => {
  const { all } = useContext(AuthContext);
  console.log(all.token[0]);

  const printval = () => {
    console.log(all.token[0]);
  };
  return (
    <div>
      <button
        onClick={() => {
          all.token[1]({ name: "maaz" });
          console.log("old or new check ", all.token[0]);
          printval();
        }}
      >
        Context Change Button
      </button>
    </div>
  );
};

export default Register;
//This is component which will be using context and the states defined in context
