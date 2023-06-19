import React from "react";
import Input from "../input/Input";
import { Button } from "../shared";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [{ email, password }, setFormFields] = useState(defaultFormFields);
  const handleChange = (e) => {};
  return (
    <form>
      <Input
        label="Email"
        attributes={{
          type: "email",
          required,
        }}
      />
      <Input
        label="Password"
        attributes={{
          type: "password",
          required,
        }}
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default SignInForm;
