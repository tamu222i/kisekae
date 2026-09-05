import { IItemRepository } from '../../domain/repositories/IItemRepository';
import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';

export class InMemoryItemRepository implements IItemRepository {
  private readonly items: Map<string, Item> = new Map();

  constructor(initialItems: readonly Item[] = []) {
    for (const item of initialItems) {
      this.items.set(item.id, item);
    }
  }

  async getAll(): Promise<readonly Item[]> {
    return Array.from(this.items.values());
  }

  async getByCategory(category: SlotCategory): Promise<readonly Item[]> {
    return Array.from(this.items.values()).filter(
      (item) => item.slotCategory === category
    );
  }

  async getById(id: string): Promise<Item | undefined> {
    return this.items.get(id);
  }

  async getBaseBody(): Promise<Item> {
    const body = Array.from(this.items.values()).find(
      (item) => item.slotCategory === SlotCategory.BASE_BODY
    );
    if (!body) {
      throw new Error('Base body not found in catalog');
    }
    return body;
  }
}

