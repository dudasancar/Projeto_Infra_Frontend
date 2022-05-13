/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";
import { useMessage } from "../../../../context/MessageContext";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import Login from "..";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddEditEmployee from "..";

jest.mock("../../../../context/MessageContext");

const hook = { useMessage };
const STATE_SPY = jest.spyOn(hook, "useMessage");
const CLICK_HANDLER = jest.fn();

STATE_SPY.mockReturnValue({
  setMessage: CLICK_HANDLER,
});

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Edit of employee tests", () => {
  it("should test if input email textfield doesnt accept fields that are not emails", () => {
    render(<AddEditEmployee />, { wrapper: MemoryRouter });

    const input = screen.getByTestId("input-email").querySelector("input");
    expect(input.type).toBe("email");
  });

  it("should test if name and email are required fields", async () => {
    render(<AddEditEmployee />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByText("SALVAR"));

    await waitFor(() => {
      expect(screen.getByText("Nome obrigatório")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("E-mail obrigatório")).toBeInTheDocument();
    });
  });

  it("should show sucess message when everything is okay", async () => {
    const server = setupServer(
      rest.put(`*/equipment/id`, (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    server.listen();
    render(<AddEditEmployee />, { wrapper: MemoryRouter });

    const inputEmail = screen.getByTestId("input-email").querySelector("input");
    const inputName = screen.getByTestId("input-name").querySelector("input");
    const inputType = screen.getByTestId("input-type").querySelector("input");

    fireEvent.change(inputEmail, {
      target: { value: "email@email.com" },
    });
    fireEvent.change(inputName, { target: { value: "mateus" } });
    fireEvent.change(inputType, { target: { value: "dp" } });
    act(() => {
      userEvent.click(screen.getByText("SALVAR"));
    });

    await waitFor(() => {
      expect(CLICK_HANDLER).toHaveBeenCalledWith({
        content: "Funcionário cadastrado com sucesso!",
        display: true,
        severity: "success",
      });
    });

    server.close();
  });

  it("should navigate to list of employees after success", async () => {
    const server = setupServer(
      rest.put(`*/equipment/id`, (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    server.listen();
    render(
      <AddEditEmployee />,{ wrapper: MemoryRouter }
    );

    const inputEmail = screen.getByTestId("input-email").querySelector("input");
    const inputName = screen.getByTestId("input-name").querySelector("input");
    const inputType = screen.getByTestId("input-type").querySelector("input");

    fireEvent.change(inputEmail, {
      target: { value: "email@email.com" },
    });
    fireEvent.change(inputName, { target: { value: "mateus" } });
    fireEvent.change(inputType, { target: { value: "dp" } });
    act(() => {
      userEvent.click(screen.getByText("SALVAR"));
    });

    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalledTimes(1);
    });
  });
});
