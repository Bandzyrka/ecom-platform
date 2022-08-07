import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignInForm from "./../sign-in.component";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("sign-in tests", () => {
  const mockStore = configureStore();
  let store;
  store = mockStore();
  test("should render form", () => {
    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});
