/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  act,
  fireEvent,
  queryByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChangePassword from "..";
import jwt_decode from "jwt-decode";
import { useMessage } from "../../../../context/MessageContext";

jest.mock("jwt-decode", () => jest.fn());

jest.mock("../../../../context/MessageContext");

const hook = { useMessage };
const STATE_SPY = jest.spyOn(hook, "useMessage");
const CLICK_HANDLER = jest.fn();

STATE_SPY.mockReturnValue({
  setMessage: CLICK_HANDLER,
});

describe("Change password tests", () => {
  const server = setupServer(
    rest.put(`*/employee/changePassword/id`, (req, res, ctx) => {
      return res(ctx.status(200, "OK"));
    })
  );

  beforeAll(() => server.listen());

  afterAll(() => server.close());

  it("should show required for all 3 inputs", async () => {
    render(<ChangePassword />, { wrapper: MemoryRouter });

    act(() => {
      userEvent.click(screen.getByText("CONFIRMAR"));
    });

    await waitFor(() => {
      expect(screen.getByText("Senha antiga obrigatória")).toBeInTheDocument();
      expect(screen.getByText("Nova senha obrigatória")).toBeInTheDocument();
      expect(
        screen.getByText("Confirmação da senha obrigatória")
      ).toBeInTheDocument();
    });
  });

  it("should show minimum lenght of 6 characteres in each input", async () => {
    render(<ChangePassword />, { wrapper: MemoryRouter });

    const inputOldPassword = screen
      .getByTestId("input-oldPassword")
      .querySelector("input");
    const inputNewPassword = screen
      .getByTestId("input-newPassword")
      .querySelector("input");
    const inputConfirmNewPassword = screen
      .getByTestId("input-confirmNewPassword")
      .querySelector("input");

    fireEvent.change(inputOldPassword, {
      target: { value: "123" },
    });
    fireEvent.change(inputNewPassword, { target: { value: "345" } });
    fireEvent.change(inputConfirmNewPassword, { target: { value: "345" } });

    act(() => {
      userEvent.click(screen.getByText("CONFIRMAR"));
    });

    await waitFor(() => {
      expect(
        screen.getByText("A senha antiga deve possuir no mínimo 6 caracteres")
      ).toBeInTheDocument();
      expect(
        screen.getByText("A nova senha deve possuir no mínimo 6 caracteres")
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "A confirmação da nova senha deve possuir no mínimo 6 caracteres"
        )
      ).toBeInTheDocument();
    });
  });

  it("should show sucess modal when you change the password", async () => {

    server.use(
      rest.put(`*/employee/changePassword/id`, (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    render(<ChangePassword />, { wrapper: MemoryRouter });
    const inputOldPassword = screen
      .getByTestId("input-oldPassword")
      .querySelector("input");
    const inputNewPassword = screen
      .getByTestId("input-newPassword")
      .querySelector("input");
    const inputConfirmNewPassword = screen
      .getByTestId("input-confirmNewPassword")
      .querySelector("input");
    fireEvent.change(inputOldPassword, {
      target: { value: "12345678" },
    });
    fireEvent.change(inputNewPassword, {
      target: { value: "34567891" },
    });
    fireEvent.change(inputConfirmNewPassword, {
      target: { value: "34567891" },
    });

    await waitFor(() => {
         expect(CLICK_HANDLER).toHaveBeenCalledWith({
           content: "Funcionário cadastrado com sucesso!",
           display: true,
           severity: "success",
         });
    });
  });
});

