/* eslint-disable testing-library/no-node-access */
import React from "react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";
import { useMessage } from "../../../../context/MessageContext";
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

const server = setupServer(
  rest.get(`*/employee/id`, (req, res, ctx) => {
    return res(ctx.status(400));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("Add employee tests", () => {
  it("should require name and email before send", async () => {
    render(<AddEditEmployee />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByText("SALVAR"));

    await waitFor(() => {
      expect(screen.getByText("E-mail obrigatório")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Nome obrigatório")).toBeInTheDocument();
    });
  });

  it("should show success modal and navigate", async () => {
    server.use(
      rest.post(`*/employee`, (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );

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
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/listarFuncionarios");
    });
  });
});
