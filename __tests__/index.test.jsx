/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home", () => {
  it("Welcome to next eksisterer ikke", () => {
    render(<Home />);
    const welcometoNext = screen.queryByText("heading", {
      name: /welcome to next/i
    });

    expect(welcometoNext).not.toBeInTheDocument();
  });

  it("Om Meg eksisterer", () => {
    render(<Home />);
    const banner = screen.getByRole("banner", {
      name: /Header for logo og navigasjon/i
    });
    expect(banner).toBeInTheDocument();
  });
});
