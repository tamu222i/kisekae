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
    const slimeToy = DEFAULT_ASMR_TOYS.find((t) => t.soundType === 'slime')!;

    render(
      <AsmrToyInteractive
        toy={slimeToy}
        onTap={onTapMock}
        lastEarned={3}
      />
    );

    expect(screen.getByText(slimeToy.name)).toBeInTheDocument();
  });

  it('renders potato chips and shaved ice toys with interactive feedback', () => {
    const onTapMock = vi.fn();
    const chipsToy = DEFAULT_ASMR_TOYS.find((t) => t.soundType === 'potato_chips')!;

    const { rerender } = render(
      <AsmrToyInteractive
        toy={chipsToy}
        onTap={onTapMock}
        lastEarned={5}
      />
    );

    expect(screen.getByText(chipsToy.name)).toBeInTheDocument();

    const iceToy = DEFAULT_ASMR_TOYS.find((t) => t.soundType === 'shaved_ice')!;
    rerender(
      <AsmrToyInteractive
        toy={iceToy}
        onTap={onTapMock}
        lastEarned={8}
      />
    );

    expect(screen.getByText(iceToy.name)).toBeInTheDocument();
  });
});
