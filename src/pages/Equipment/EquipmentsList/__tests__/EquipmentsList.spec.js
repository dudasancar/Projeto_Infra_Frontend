import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EquipmentsList from "..";
import { setupWorker, rest } from "msw";
import { setupServer } from "msw/node";

const equipmentpageErrors = console.error.bind(console.error);

describe("EquipmentsList unit tests and integration tests", () => {
  beforeAll(() => {
    console.error = (errormessage) => {
      const suppressedErrors = errormessage.toString().includes("Warning:");

      !suppressedErrors && equipmentpageErrors(errormessage);
    };
  });

  afterAll(() => {
    console.error = equipmentpageErrors;
  });

  it("should mock data Indisponivel tobeInDocument 1 times", async () => {
    const server = setupServer(
      rest.get(`*/equipment`, (req, res, ctx) => {
        return res(
          ctx.json([
            {
              collaborator: null,
              collaborator_id: null,
              collaborators: [],
              created_at: "2022-05-16T19:58:53.728Z",
              id: "19a6ab4f-c0f2-42b8-8843-b4d6ab9b60ef",
              model: "Dell Inspirion V8",
              name: "GX2-118",
              serial_number: "ADFYRTE654453GSYE0",
              situation: "Indisponivel",
              status: "ativo",
              type: "Notebook",
            },
          ])
        );
      })
    );

    server.listen();

    render(<EquipmentsList />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getAllByText("Indisponivel")).toHaveLength(1);
    });

    server.close();
  });

  it("should not show undefined when a value is passed as undefined", async () => {
    const server = setupServer(
      rest.get(`*/equipment`, (req, res, ctx) => {
        return res(
          ctx.json([
            {
              collaborator: null,
              collaborator_id: null,
              collaborators: [],
              created_at: "2022-05-16T19:58:53.728Z",
              id: "19a6ab4f-c0f2-42b8-8843-b4d6ab9b60ef",
              model: undefined,
              name: undefined,
              serial_number: "ADFYRTE654453GSYE0",
              situation: undefined,
              status: undefined,
              type: undefined,
            },
          ])
        );
      })
    );

    server.listen();

    render(<EquipmentsList />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.queryByText("undefined")).toBeNull();
    });

    server.close();
  });
});
