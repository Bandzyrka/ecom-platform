import React, { ChangeEvent, FormEvent, useState } from "react";

import { FormInput} from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import { SignInContainer, ButtonsContainer, TitleContainer } from "./sign-in.styles";

const defaultFormFields = {
  password: "",
  email: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const { password, email } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <SignInContainer>
      <TitleContainer > I have a account</TitleContainer>
      <span className="subtitle"> Use your email and password to sign in</span>
      <form onSubmit={handleSubmit} role='form'>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          label="email"
          handleChange={undefined}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          label="password"
          handleChange={undefined}
        />
        <ButtonsContainer>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart)}
            styles="googleButtonStyle"
          >
            {" "}
            Sign In With Google{" "}
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
