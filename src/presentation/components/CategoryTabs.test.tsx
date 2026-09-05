import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CategoryTabs } from './CategoryTabs';
import { SlotCategory } from '../../domain/models/SlotCategory';

describe('CategoryTabs Component', () => {
  it('renders all 10 dress-up category tabs without horizontal scrolling container', () => {
    const onSelect = vi.fn();
    const isEquipped = (cat: SlotCategory) => cat === SlotCategory.TOPS;

    render(
      <CategoryTabs
        selectedCategory={SlotCategory.TOPS}
        onSelectCategory={onSelect}
        isSlotEquipped={isEquipped}
      />
    );

    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(10);

    // Verify grid layout is applied (not overflow-x-auto)
    const tablist = screen.getByRole('tablist');
    expect(tablist.className).toContain('grid');
    expect(tablist.className).not.toContain('overflow-x-auto');
  });

  it('triggers onSelectCategory when clicked', () => {
    const onSelect = vi.fn();
    render(
      <CategoryTabs
        selectedCategory={SlotCategory.TOPS}
        onSelectCategory={onSelect}
        isSlotEquipped={() => false}
      />
    );

    const bottomsTab = screen.getByRole('tab', { name: /ボトムス/i });
    fireEvent.click(bottomsTab);
    expect(onSelect).toHaveBeenCalledWith(SlotCategory.BOTTOMS);
  });

  it('renders categories structured in 3 distinct rows to prevent text crushing', () => {
    const onSelect = vi.fn();
    const { container } = render(
      <CategoryTabs
        selectedCategory={SlotCategory.TOPS}
        onSelectCategory={onSelect}
        isSlotEquipped={() => false}
      />
    );

    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).not.toBeNull();
    // 3 row children
    const rows = tablist?.children;
    expect(rows?.length).toBe(3);

    // Row 1 (clothes & shoes): 4 tabs
    expect(rows?.[0].querySelectorAll('button[role="tab"]')).toHaveLength(4);
    // Row 2 (hair & accessories): 3 tabs
    expect(rows?.[1].querySelectorAll('button[role="tab"]')).toHaveLength(3);
    // Row 3 (face & background): 3 tabs
    expect(rows?.[2].querySelectorAll('button[role="tab"]')).toHaveLength(3);
  });
});
