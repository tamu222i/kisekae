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
});

