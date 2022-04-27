/**
 * @jest-environment jsdom
 * @jest-environment-options {"html":"<html lang='zh-cmn-Hant'></html>"}
 */

import React from "react";
import "@testing-library/jest-dom";

import Login from "./";
import { render, screen } from "@testing-library/react";

describe("Login unit tests and integration tests", () => {
  it("should test if input email textfield doesnt accept fields that are not emails", () => {
    render(<Login />);

    // eslint-disable-next-line testing-library/no-node-access
    //const input = screen.getByTestId("input-email").querySelector("input");
    //expect(input.type).toBe("email");
  });

  it.todo("should test if input password requires at least 8 characters");
  it.todo(
    "should show an error if none or at least one of the inputs are blank"
  );
  it.todo('should call another page when "Esqueci minha senha" is clicked');
  it.todo('should call an api when "entrar" is cliqued');
  it.todo("should call an api when keyboard enter is pressed");
  it.todo("should show an error when input data is incorrect");
  it.todo("should show an success when input data is correct");
});
