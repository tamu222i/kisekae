import { describe, it, expect } from 'vitest';
import { InMemoryItemRepository } from './InMemoryItemRepository';
import { SlotCategory } from '../../domain/models/SlotCategory';
import { Item } from '../../domain/models/Item';

describe('InMemoryItemRepository', () => {
  const sampleItems = [
    new Item({
      id: 'body_default',
      name: 'ベースボディ',
      slotCategory: SlotCategory.BASE_BODY,
      svgContent: '<path id="body"/>',
      isRemovable: false,
    }),
    new Item({
      id: 'hair_1',
      name: '前髪1',
      slotCategory: SlotCategory.HAIR_FRONT,
      svgContent: '<path id="hair"/>',
    }),
    new Item({
      id: 'tops_1',
      name: 'シャツ',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<path id="tops"/>',
    }),
  ];

  it('retrieves all items in catalog', async () => {
    const repo = new InMemoryItemRepository(sampleItems);
    const all = await repo.getAll();
    expect(all).toHaveLength(3);
  });

  it('filters items by slot category', async () => {
    const repo = new InMemoryItemRepository(sampleItems);
    const tops = await repo.getByCategory(SlotCategory.TOPS);
    expect(tops).toHaveLength(1);
    expect(tops[0].id).toBe('tops_1');
  });

  it('finds item by id', async () => {
    const repo = new InMemoryItemRepository(sampleItems);
    const found = await repo.getById('hair_1');
    expect(found?.name).toBe('前髪1');

    const notFound = await repo.getById('non_existent');
    expect(notFound).toBeUndefined();
  });

  it('returns the base body item', async () => {
    const repo = new InMemoryItemRepository(sampleItems);
    const body = await repo.getBaseBody();
    expect(body.id).toBe('body_default');
    expect(body.slotCategory).toBe(SlotCategory.BASE_BODY);
  });

  it('throws error if base body is missing in catalog', async () => {
    const repo = new InMemoryItemRepository([]);
    await expect(repo.getBaseBody()).rejects.toThrowError(/Base body not found/i);
  });
});

