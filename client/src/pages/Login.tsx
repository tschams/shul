import React from "react";
import { Input } from "../components/Input";

function _Login() {
  return (
    <form noValidate autoComplete="off">
      <Input />
    </form>
  );
}

export const Login = React.memo(_Login);
