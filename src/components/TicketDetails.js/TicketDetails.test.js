import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TicketDetails from "./TicketDetails";

describe("TicketDetails", () => {
  const selectedRow = {
    id: 1,
    subject: "Ticket Subject",
    description: "Ticket Description",
    via: { channel: "Email" },
    status: "open",
    created_at: "2022-01-01",
    updated_at: "2022-01-02",
  };

  it("renders dialog with correct subject", () => {
    const setOpenDialog = jest.fn();
    const open = true;
    render(
      <TicketDetails
        open={open}
        setOpenDialog={setOpenDialog}
        selectedRow={selectedRow}
      />
    );

    // Check if dialog is rendered
    const dialogTitle = screen.getByText(selectedRow.subject);
    expect(dialogTitle).toBeInTheDocument();
  });

  it("closes dialog on close button click", () => {
    const setOpenDialog = jest.fn();
    const open = true;
    render(
      <TicketDetails
        open={open}
        setOpenDialog={setOpenDialog}
        selectedRow={selectedRow}
      />
    );

    // Click the close button
    const closeButton = screen.getByRole("button", { name: "Close" });
    fireEvent.click(closeButton);

    // Check if setOpenDialog function is called with false
    expect(setOpenDialog).toHaveBeenCalledWith(false);
  });
});
