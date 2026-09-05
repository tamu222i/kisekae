import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AsmrUpgradePanel } from './AsmrUpgradePanel';

describe('AsmrUpgradePanel component', () => {
  it('renders upgrade levels and costs, disables button when cannot afford', () => {
    const onUpgradeTapMock = vi.fn();
    const onUpgradeAutoMock = vi.fn();

    render(
      <AsmrUpgradePanel
        coins={10}
        tapPowerLevel={1}
        tapPowerUpgradeCost={25}
        onUpgradeTapPower={onUpgradeTapMock}
        autoCollectorLevel={0}
        autoCollectorUpgradeCost={50}
        onUpgradeAutoCollector={onUpgradeAutoMock}
        coinsPerSec={0}
      />
    );

    expect(screen.getByText(/タップパワー/)).toBeInTheDocument();
    expect(screen.getByText(/自動コイン収集/)).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    // Both buttons should be disabled because coins = 10 < 25 and 50
    expect(buttons[0]).toBeDisabled();
    expect(buttons[1]).toBeDisabled();
  });

  it('calls upgrade callback when button is clicked and affordable', () => {
    const onUpgradeTapMock = vi.fn();
    const onUpgradeAutoMock = vi.fn();

    render(
      <AsmrUpgradePanel
        coins={100}
        tapPowerLevel={1}
        tapPowerUpgradeCost={25}
        onUpgradeTapPower={onUpgradeTapMock}
        autoCollectorLevel={0}
        autoCollectorUpgradeCost={50}
        onUpgradeAutoCollector={onUpgradeAutoMock}
        coinsPerSec={0}
      />
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).not.toBeDisabled();
    fireEvent.click(buttons[0]);
    expect(onUpgradeTapMock).toHaveBeenCalled();
  });
});
