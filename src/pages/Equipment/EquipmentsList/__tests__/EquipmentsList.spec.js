import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EquipmentsList from "..";

describe("EquipmentsList unit tests and integration tests", () => {
  it("should EquipmentsList render correctly", () => {
    const { debug } = render(<EquipmentsList />, { wrapper: MemoryRouter });
    debug();
  });
});
