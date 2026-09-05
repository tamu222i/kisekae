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

  it('switches between Kisekae mode and ASMR studio mode', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /音フェチ/i })).toBeInTheDocument();
    });

    // Switch to ASMR studio
    const asmrBtn = screen.getByRole('button', { name: /音フェチ/i });
    fireEvent.click(asmrBtn);

    // Expect ASMR view elements to be rendered
    await waitFor(() => {
      expect(screen.getByTestId('asmr-game-view')).toBeInTheDocument();
      expect(screen.getByText(/タイクーン強化ショップ/)).toBeInTheDocument();
    });

    // Switch back to Kisekae
    const kisekaeBtn = screen.getByRole('button', { name: /きせかえ/i });
    fireEvent.click(kisekaeBtn);

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /トップス/i })).toBeInTheDocument();
    });
  });

  it('triggers twirl motion and speech bubble on outfit changes', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /おまかせ/i })).toBeInTheDocument();
    });

    const randomizeBtn = screen.getByRole('button', { name: /おまかせ/i });
    fireEvent.click(randomizeBtn);

    // Speech bubble with cute reaction should appear
    await waitFor(() => {
      expect(screen.getByText(/おまかせコーデ完成！/i)).toBeInTheDocument();
    });

    // Character preview container should have motion twirl
    const previewContainer = screen.getByTestId('character-preview-container');
    expect(previewContainer.getAttribute('data-motion')).toBe('twirl');
  });
});

