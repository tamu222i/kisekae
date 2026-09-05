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

  it('renders categories structured in 2 distinct rows of 5', () => {
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
    // 2 row children
    const rows = tablist?.children;
    expect(rows?.length).toBe(2);

    // Row 1 (clothes, shoes, accessories): 5 tabs
    expect(rows?.[0].querySelectorAll('button[role="tab"]')).toHaveLength(5);
    // Row 2 (hair, face, background): 5 tabs
    expect(rows?.[1].querySelectorAll('button[role="tab"]')).toHaveLength(5);
  });
});
