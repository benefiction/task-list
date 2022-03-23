import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const headingElement = screen.getByText(/Your Favorite Task List 📋/i);
    expect(headingElement).toBeInTheDocument();
});
