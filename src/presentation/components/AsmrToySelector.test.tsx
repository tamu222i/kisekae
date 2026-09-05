import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AsmrToySelector } from './AsmrToySelector';
import { DEFAULT_ASMR_TOYS } from '../../infrastructure/assets/asmrToysData';

describe('AsmrToySelector component', () => {
  it('renders all toys with active and unlock status', () => {
    const onSelectMock = vi.fn();
    const onUnlockMock = vi.fn();

    render(
      <AsmrToySelector
        toys={DEFAULT_ASMR_TOYS}
        activeToyId="toy_bubble_wrap"
        isUnlocked={(id) => id === 'toy_bubble_wrap'}
        onSelectToy={onSelectMock}
        onUnlockToy={onUnlockMock}
        coins={100}
      />
    );

    expect(screen.getByText('ぷちぷちバブルラップ')).toBeInTheDocument();
    expect(screen.getByText('使用中')).toBeInTheDocument();
  });

  it('handles unlocking a locked toy when coins are sufficient', () => {
    const onSelectMock = vi.fn();
    const onUnlockMock = vi.fn();

    render(
      <AsmrToySelector
        toys={DEFAULT_ASMR_TOYS}
        activeToyId="toy_bubble_wrap"
        isUnlocked={(id) => id === 'toy_bubble_wrap'}
        onSelectToy={onSelectMock}
        onUnlockToy={onUnlockMock}
        coins={200}
      />
    );

    // Soap cutting has unlockCost 50
    const unlockButtons = screen.getAllByRole('button');
    const soapUnlockBtn = unlockButtons.find((btn) =>
      btn.textContent?.includes('50')
    );
    expect(soapUnlockBtn).toBeDefined();

    if (soapUnlockBtn) {
      fireEvent.click(soapUnlockBtn);
      expect(onUnlockMock).toHaveBeenCalledWith('toy_soap_cutting');
    }
  });

  it('filters toys by category', () => {
    const onSelectMock = vi.fn();
    const onUnlockMock = vi.fn();

    render(
      <AsmrToySelector
        toys={DEFAULT_ASMR_TOYS}
        activeToyId="toy_bubble_wrap"
        isUnlocked={(id) => id === 'toy_bubble_wrap'}
        onSelectToy={onSelectMock}
        onUnlockToy={onUnlockMock}
        coins={200}
      />
    );

    // Initial state: both bubble wrap and potato chips are present
    expect(screen.getByText('ぷちぷちバブルラップ')).toBeInTheDocument();
    expect(screen.getByText('パリパリポテトチップス')).toBeInTheDocument();

    // Click "たべもの" filter tab
    const foodTab = screen.getByRole('button', { name: /たべもの/i });
    fireEvent.click(foodTab);

    // Potato chips should be visible, bubble wrap should be filtered out
    expect(screen.getByText('パリパリポテトチップス')).toBeInTheDocument();
    expect(screen.queryByText('ぷちぷちバブルラップ')).not.toBeInTheDocument();
  });
});
