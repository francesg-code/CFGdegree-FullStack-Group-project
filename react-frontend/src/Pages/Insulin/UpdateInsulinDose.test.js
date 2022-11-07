import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import UpdateInsulinDose from "./UpdateInsulinDose";

test("Insulin dose input should be rendered", () => {
    render(<UpdateInsulinDose />, {wrapper: MemoryRouter});
    const insulinDoseInputElement = screen.getByPlaceholderText(/Insulin dose/);
    expect(insulinDoseInputElement).toBeInTheDocument();
});

test("Date/time input should be rendered", () => {
    render(<UpdateInsulinDose />, {wrapper: MemoryRouter});
    const dateTimeInputElement = screen.getByTestId("date/time");
    expect(dateTimeInputElement).toBeInTheDocument();
});

test("Submit button should be rendered", () => {
    render(<UpdateInsulinDose />, {wrapper: MemoryRouter});
    const buttonElement = screen.getByTestId("submit-button");
    expect(buttonElement).toBeInTheDocument();
});

test("Submit button should be disabled when no input has been entered", () => {
    render(<UpdateInsulinDose />, {wrapper: MemoryRouter});
    const buttonElement = screen.getByTestId("submit-button");
    expect(buttonElement).toBeDisabled();
})

test("Insulin dose input should be empty", () => {
    render(<UpdateInsulinDose />, {wrapper: MemoryRouter});
    const insulinDoseInputElement = screen.getByPlaceholderText(/Insulin dose/);
    const testValue = "test"
    fireEvent.change(insulinDoseInputElement, { target: {value: testValue}});
    expect(insulinDoseInputElement.value).toBe(testValue);
})

test("Date/time input should be empty", () => {
    render(<UpdateInsulinDose />, {wrapper: MemoryRouter});
    const dateTimeInputElement = screen.getByTestId("date/time");
    const testValue = "test";
    fireEvent.change(dateTimeInputElement, { target: {value: testValue}});
    expect(dateTimeInputElement.value).toBe(testValue);
});


test("button should not be disabled when inputs have been entered", () => {
    render(<UpdateInsulinDose />, {wrapper: MemoryRouter});
    const buttonElement = screen.getByTestId("submit-button");
    const insulinDoseInputElement = screen.getByPlaceholderText(/Insulin dose/);
    const testValue = "test";
    fireEvent.change(insulinDoseInputElement, { target: {value: testValue}});
    expect(buttonElement).not.toBeDisabled();
});