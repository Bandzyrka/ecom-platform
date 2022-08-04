import { ChangeEvent, FormEvent, useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useDispatch } from "react-redux";
import { SignUpContainer, TitleContainer } from "./sign-up.styles";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { signUpStart } from "../../redux/user/user.actions";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      resetFormFields();
      dispatch(signUpStart({email, password, displayName}));
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormFields({...formFields, [name]: value})
  };
  
  return (
    <SignUpContainer>
        <TitleContainer> I do not have a account </TitleContainer>
        <span className="subtitle">
          {" "}
          Sign up using your email and password{" "}
        </span>
        <form onSubmit={handleSubmit}>
          <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
          label="Display Name" handleChange={undefined}           />
          <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          label="email" handleChange={undefined}           />
          <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          label="Password" handleChange={undefined}           />
          <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
          label="Confirm Password" handleChange={undefined}          />
          <CustomButton type="submit"> Sign Up</CustomButton>
        </form>
      </SignUpContainer>
  )
}

export default SignUpForm;
