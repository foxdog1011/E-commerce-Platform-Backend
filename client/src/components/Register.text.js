import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Register from './Register';

// Mock the axios module
jest.mock('axios');

describe('Register Component', () => {
  test('renders Register component', () => {
    render(<Register />);
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  test('allows user to fill out form', () => {
    render(<Register />);
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });

    expect(screen.getByLabelText(/Username/i)).toHaveValue('testuser');
    expect(screen.getByLabelText(/Password/i)).toHaveValue('password');
  });

  test('submits the form successfully', async () => {
    const responseMessage = 'User registered successfully!';
    axios.post.mockResolvedValueOnce({ data: responseMessage });

    render(<Register />);

    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/register', { username: 'testuser', password: 'password' });
      expect(screen.getByText(responseMessage)).toBeInTheDocument();
    });
  });

  test('handles registration error', async () => {
    const errorMessage = 'There was an error registering the user!';
    axios.post.mockRejectedValueOnce(new Error(errorMessage));

    render(<Register />);

    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/register', { username: 'testuser', password: 'password' });
      expect(screen.queryByText(errorMessage)).toBeNull();
    });
  });
});
