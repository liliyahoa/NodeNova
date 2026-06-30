// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeNova title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeNova/i);
    expect(titleElement).toBeInTheDocument();
});
