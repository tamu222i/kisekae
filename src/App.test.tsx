import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Kisekae App Integration', () => {
  it('loads and renders the game UI with character preview and tabs', async () => {
    render(<App />);

    expect(screen.getByText(/きせかえゲーム/i)).toBeInTheDocument();

    // Wait for async load of default outfit
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /おまかせ/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /リセット/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /PNG保存/i })).toBeInTheDocument();
    });

    // Check category tabs exist
    expect(screen.getByRole('tab', { name: /トップス/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /ボトムス/i })).toBeInTheDocument();
  });

  it('allows clicking category tabs and selecting items', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /トップス/i })).toBeInTheDocument();
    });

    // Switch to accessory tab
    const accTab = screen.getByRole('tab', { name: /アクセサリー/i });
    fireEvent.click(accTab);

    // Check accessory items appear
    await waitFor(() => {
      expect(screen.getByText('ねこみみカチューシャ')).toBeInTheDocument();
    });

    // Click to equip cat ears
    const catEarsBtn = screen.getByText('ねこみみカチューシャ').closest('button');
    expect(catEarsBtn).toBeInTheDocument();
    fireEvent.click(catEarsBtn!);

    // Unequip button should become visible for this category
    await waitFor(() => {
      expect(screen.getByText('はずす')).toBeInTheDocument();
    });
  });

  it('handles randomize and reset button clicks', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /おまかせ/i })).toBeInTheDocument();
    });

    const randomizeBtn = screen.getByRole('button', { name: /おまかせ/i });
    await waitFor(async () => {
      fireEvent.click(randomizeBtn);
    });

    const resetBtn = screen.getByRole('button', { name: /リセット/i });
    await waitFor(async () => {
      fireEvent.click(resetBtn);
    });
  });
});
