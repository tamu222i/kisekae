import { Item } from '../models/Item';
import { SlotCategory } from '../models/SlotCategory';

export interface IItemRepository {
  getAll(): Promise<readonly Item[]>;
  getByCategory(category: SlotCategory): Promise<readonly Item[]>;
  getById(id: string): Promise<Item | undefined>;
  getBaseBody(): Promise<Item>;
}

