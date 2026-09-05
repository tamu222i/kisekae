import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AsmrToyInteractive } from './AsmrToyInteractive';
import { DEFAULT_ASMR_TOYS } from '../../infrastructure/assets/asmrToysData';

describe('AsmrToyInteractive component', () => {
  it('renders bubble wrap toy and handles clicks', () => {
    const onTapMock = vi.fn();
    const bubbleToy = DEFAULT_ASMR_TOYS[0]; // bubble wrap

    render(
      <AsmrToyInteractive
        toy={bubbleToy}
        onTap={onTapMock}
        lastEarned={1}
      />
    );

    expect(screen.getByTestId('asmr-toy-interactive')).toBeInTheDocument();
    expect(screen.getByText(bubbleToy.name)).toBeInTheDocument();

    // Click a bubble
    const bubbles = screen.getAllByRole('button');
    expect(bubbles.length).toBeGreaterThan(0);
    fireEvent.click(bubbles[0]);

    expect(onTapMock).toHaveBeenCalled();
  });

  it('renders different toys according to soundType', () => {
    const onTapMock = vi.fn();
    const slimeToy = DEFAULT_ASMR_TOYS[2]; // slime

    render(
      <AsmrToyInteractive
        toy={slimeToy}
        onTap={onTapMock}
        lastEarned={3}
      />
    );

    expect(screen.getByText(slimeToy.name)).toBeInTheDocument();
  });
});
