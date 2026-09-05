import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AvatarCompanion } from './AvatarCompanion';
import { Outfit } from '../../domain/models/Outfit';
import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';

describe('AvatarCompanion component', () => {
  const dummyBody = new Item({
    id: 'body_default',
    name: 'からだ',
    slotCategory: SlotCategory.BASE_BODY,
    svgContent: '<ellipse cx="150" cy="200" rx="30" ry="60" fill="#FFE0BD"/>',
  });

  it('renders loading placeholder when outfit is null', () => {
    render(<AvatarCompanion outfit={null} tapCountTrigger={0} lastEarned={0} />);
    expect(screen.getByText(/読み込み中/i)).toBeInTheDocument();
  });

  it('renders character preview and speech bubble when outfit is provided', () => {
    const outfit = Outfit.create({ baseBody: dummyBody });
    render(<AvatarCompanion outfit={outfit} tapCountTrigger={0} lastEarned={0} />);
    expect(screen.getByTestId('avatar-companion')).toBeInTheDocument();
  });

  it('shows reaction when tapCountTrigger changes', () => {
    const outfit = Outfit.create({ baseBody: dummyBody });
    const { rerender } = render(
      <AvatarCompanion outfit={outfit} tapCountTrigger={0} lastEarned={0} />
    );
    rerender(
      <AvatarCompanion outfit={outfit} tapCountTrigger={1} lastEarned={5} />
    );
    expect(screen.getByTestId('avatar-companion')).toBeInTheDocument();
  });
});
