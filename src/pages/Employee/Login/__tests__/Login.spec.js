/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";
import { useMessage } from "../../../../context/MessageContext";

import Login from "..";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
jest.mock("../../../../context/MessageContext");

const hook = { useMessage };
const STATE_SPY = jest.spyOn(hook, "useMessage");
const CLICK_HANDLER = jest.fn();

STATE_SPY.mockReturnValue({
  setMessage: CLICK_HANDLER,
});

describe("Login unit tests and integration tests", () => {
  it("should test if input email textfield doesnt accept fields that are not emails", () => {
    render(<Login />, { wrapper: MemoryRouter });

    const input = screen.getByTestId("input-email").querySelector("input");
    expect(input.type).toBe("email");
  });

  it("should test if email and password are required fields", async () => {
    render(<Login />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByText("ENTRAR"));

    await waitFor(() => {
      expect(screen.getByText("E-mail obrigatório")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Senha obrigatória")).toBeInTheDocument();
    });
  });

  it("should test if input password requires at least 6 characters", async () => {
    render(<Login />, { wrapper: MemoryRouter });

    const input = screen.getByTestId("input-password").querySelector("input");

    fireEvent.change(input, { target: { value: "111" } });

    act(() => {
      userEvent.click(screen.getByText("ENTRAR"));
    });

    await waitFor(() => {
      expect(
        screen.getByText("A senha deve possuír no mínimo 6 caracteres"),
      ).toBeInTheDocument();
    });
  });

  it.todo(
    "should show an error if none or at least one of the inputs are blank",
  );
  it.todo('should call another page when "Esqueci minha senha" is clicked');
  it.todo('should call an api when "entrar" is cliqued');
  it('should show an error when "entrar" is clicked and service is broken', async () => {
    const serverlog = setupServer(
      rest.post(`*/auth/login`, (req, res, ctx) => {
        return res(ctx.status(200));
      }),
    );

    serverlog.listen();
    render(<Login />, { wrapper: MemoryRouter });

    const inputEmail = screen.getByTestId("input-email").querySelector("input");
    const inputPassword = screen
      .getByTestId("input-password")
      .querySelector("input");

    fireEvent.change(inputEmail, {
      target: { value: "email@email.com" },
    });
    fireEvent.change(inputPassword, { target: { value: "123456" } });

    act(() => {
      userEvent.click(screen.getByText("ENTRAR"));
    });

    await waitFor(() => {
      expect(CLICK_HANDLER).toHaveBeenCalledWith({
        content: "Ocorreu um erro ao tentar efetuar o login!",
        display: true,
        severity: "error",
      });
    });

    serverlog.close();
  });
  it.todo("should call an api when keyboard enter is pressed");
  it.todo("should show an error whene input email is incorrct");
  it.todo("should show an error when input password is correct");
});
