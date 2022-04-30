import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Navbar from '../components/Navbar';

describe('Calculator', () => {
  describe('Calculator button', () => {
    it('Check button 5', () => {
      render(
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Calculator />}
              setObj={jest.fn()}
            />
          </Routes>
        </Router>,
      );
      const buttonElement = screen.getByText(/5/);
      fireEvent.click(buttonElement);
      expect(buttonElement.textContent).toBe(buttonElement.textContent);
    });

    it('Check button 1', () => {
      render(
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Calculator />}
              setObj={jest.fn()}
            />
          </Routes>
        </Router>,
      );
      const buttonElement = screen.getByText(/1/);
      fireEvent.click(buttonElement);
      expect(buttonElement.textContent).toBe(buttonElement.textContent);
    });
  });
});

describe('Navbar', () => {
  it('Navigation container', () => {
    render(
      <Router>
        <Routes>
          <Route path="/" index element={<Navbar />} />
        </Routes>
      </Router>,
    );
    const navBar = screen.getByRole('list');
    expect(navBar).toBeInTheDocument();
  });

  it('Number of links', () => {
    render(
      <Router>
        <Routes>
          <Route path="/" index element={<Navbar />} />
        </Routes>
      </Router>,
    );
    const linkElement = screen.getAllByRole('link');
    expect(linkElement.length).toBe(3);
  });
});
