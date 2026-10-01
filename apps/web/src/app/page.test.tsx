/**
 * Smoke test — verifies the home page renders without error.
 * Foundation phase: this test exists to prove the web application
 * infrastructure is wired correctly, not to test business logic.
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './page';

describe('HomePage', () => {
  it('renders the OTUA Protocol heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getByText('OTUA Protocol')).toBeDefined();
  });

  it('renders the foundation phase notice', () => {
    render(<HomePage />);
    const notices = screen.getAllByText(/foundation phase/i);
    expect(notices.length).toBeGreaterThan(0);
  });
});
