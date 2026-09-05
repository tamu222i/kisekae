import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CharacterPreview } from './CharacterPreview';
import { Outfit } from '../../domain/models/Outfit';
import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';

describe('CharacterPreview Component', () => {
  it('renders SVG layers in correct z-index order', () => {
    const body = new Item({
      id: 'body_1',
      name: 'からだ',
      slotCategory: SlotCategory.BASE_BODY,
      svgContent: '<path id="svg-body"/>',
    });
    const tops = new Item({
      id: 'tops_1',
      name: 'トップス',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<path id="svg-tops"/>',
    });

    const outfit = Outfit.create({
      baseBody: body,
      initialItems: [tops],
    });

    const { container } = render(<CharacterPreview outfit={outfit} />);
    const layers = container.querySelectorAll('[data-layer]');
    expect(layers).toHaveLength(2);
    expect(layers[0].getAttribute('data-layer')).toBe(SlotCategory.BASE_BODY);
    expect(layers[1].getAttribute('data-layer')).toBe(SlotCategory.TOPS);
  });

  it('applies appropriate motion animation classes', () => {
    const body = new Item({
      id: 'body_1',
      name: 'からだ',
      slotCategory: SlotCategory.BASE_BODY,
      svgContent: '<path id="svg-body"/>',
    });
    const outfit = Outfit.create({ baseBody: body });

    // Idle
    const { container: idleContainer, rerender } = render(
      <CharacterPreview outfit={outfit} motion="idle" />
    );
    expect(idleContainer.firstChild).toHaveClass('animate-avatar-breathe');

    // Twirl
    rerender(<CharacterPreview outfit={outfit} motion="twirl" />);
    expect(idleContainer.firstChild).toHaveClass('animate-avatar-twirl');
    expect(idleContainer.textContent).toContain('✨');

    // Punch
    rerender(<CharacterPreview outfit={outfit} motion="punch" />);
    expect(idleContainer.firstChild).toHaveClass('animate-avatar-punch');

    // Kick
    rerender(<CharacterPreview outfit={outfit} motion="kick" />);
    expect(idleContainer.firstChild).toHaveClass('animate-avatar-kick');
  });

  it('supports includeBackground=false for transparent character sprite cutout', () => {
    const body = new Item({
      id: 'body_1',
      name: 'からだ',
      slotCategory: SlotCategory.BASE_BODY,
      svgContent: '<path id="svg-body"/>',
    });
    const bg = new Item({
      id: 'bg_1',
      name: 'はいけい',
      slotCategory: SlotCategory.BACKGROUND,
      svgContent: '<rect id="svg-bg"/>',
    });
    const outfit = Outfit.create({
      baseBody: body,
      initialItems: [bg],
    });

    const { container } = render(
      <CharacterPreview outfit={outfit} includeBackground={false} />
    );

    const layers = container.querySelectorAll('[data-layer]');
    expect(layers).toHaveLength(1);
    expect(layers[0].getAttribute('data-layer')).toBe(SlotCategory.BASE_BODY);

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('bg-transparent');
  });
});

