import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserEmailAndPassword,
} from "../../utils/firebase/firebase.util";

import FormInput from "../form-input/form-input.component";
import ButtonDesign from "../buttons/button.component";

import "./sign-in-form.style.scss";

const inititalFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(inititalFormField);

  const { email, password } = formField;

  const resetFormField = () => {
    setFormField(inititalFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserEmailAndPassword(email, password);
      // console.log(respone);
      resetFormField();

    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorect password for email");
          break;

        case "auth/user-not-found":
          alert("no user esxit with this email");
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  const changeHanler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
   
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <h3>Sign in with your Email and Password</h3>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHanler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHanler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <ButtonDesign type="submit">Sign In</ButtonDesign>
          <ButtonDesign
            type="button"
            onClick={signInWithGoogle}
            buttonType="google"
          >
            Google Sign In
          </ButtonDesign>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
