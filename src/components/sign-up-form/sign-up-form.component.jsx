import { useState, useContext } from "react";

import {
  createAuthUserEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

import FormInput from "../form-input/form-input.component";
import ButtonDesign from "../buttons/button.component";

import { UserContext } from "../../contexts/user.context.component";

import "./sign-up-form.style.scss";

const inititalFormField = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(inititalFormField);

  // console.log(formField);

  const { userName, email, password, confirmPassword } = formField;

  const { setCurrentUser } = useContext(UserContext);


  // console.log("hit");

  const resetFormField = () => {
    setFormField(inititalFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { userName });
      
      resetFormField();
      setCurrentUser(user);
      // console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Can not create user, email already in use");
      }
      console.log("user creation is error", error);
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div>
      <h2>Don't have an account?</h2>
      <h3>Sign up with your Email and Password</h3>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="User Name"
          type="text"
          required
          onChange={changeHandler}
          name="userName"
          value={userName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />

        <ButtonDesign type="submit">Submit</ButtonDesign>
      </form>
    </div>
  );
};

export default SignUpForm;
