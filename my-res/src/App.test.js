import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from '../components/BookingForm';
import Header from '../components/Header';

test('Renders BookingForm with initial state', () => {
  render(<BookingForm />);
  
  // Check if form elements are rendered
  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const dateInput = screen.getByLabelText('Date');
  const timeInput = screen.getByLabelText('Time');
  const submitButton = screen.getByRole('button', { name: 'Submit' });
  
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(timeInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('Submitting the form with valid data', () => {
  render(<BookingForm />);
  
  // Fill in the form fields
  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const dateInput = screen.getByLabelText('Date');
  const timeInput = screen.getByLabelText('Time');
  const submitButton = screen.getByRole('button', { name: 'Submit' });
  
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(dateInput, { target: { value: '2024-02-21' } });
  fireEvent.change(timeInput, { target: { value: '12:00 PM' } });
  
  // Submit the form
  fireEvent.click(submitButton);
  
  // Assert that form submission was successful
  // For example, you can check if a success message is displayed
  const successMessage = screen.getByText('Your booking has been confirmed.');
  expect(successMessage).toBeInTheDocument();

  test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
   userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
   expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);


})
});
