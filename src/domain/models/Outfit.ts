import { Item } from './Item';
import { SlotCategory } from './SlotCategory';

export interface CreateOutfitProps {
  baseBody: Item;
  initialItems?: Item[];
}

export class Outfit {
  private readonly itemsMap: ReadonlyMap<SlotCategory, Item>;

  private constructor(itemsMap: Map<SlotCategory, Item>) {
    const baseBody = itemsMap.get(SlotCategory.BASE_BODY);
    if (!baseBody) {
      throw new Error('Outfit must always include a base body item');
    }
    this.itemsMap = new Map(itemsMap);
  }

  static create(props: CreateOutfitProps): Outfit {
    if (props.baseBody.slotCategory !== SlotCategory.BASE_BODY) {
      throw new Error('Base body item must belong to BASE_BODY slot category');
    }

    const map = new Map<SlotCategory, Item>();
    map.set(SlotCategory.BASE_BODY, props.baseBody);

    let outfit = new Outfit(map);

    if (props.initialItems) {
      for (const item of props.initialItems) {
        outfit = outfit.equip(item);
      }
    }

    return outfit;
  }

  getItem(slotCategory: SlotCategory): Item | undefined {
    return this.itemsMap.get(slotCategory);
  }

  hasItem(slotCategory: SlotCategory): boolean {
    return this.itemsMap.has(slotCategory);
  }

  getAllItems(): readonly Item[] {
    return Array.from(this.itemsMap.values());
  }

  getItemsSortedByLayer(): readonly Item[] {
    return Array.from(this.itemsMap.values()).sort((a, b) => a.zIndex - b.zIndex);
  }

  equip(newItem: Item): Outfit {
    const newMap = new Map<SlotCategory, Item>(this.itemsMap);

    // 1. Remove any currently equipped items whose slot is conflicted by newItem
    for (const conflictSlot of newItem.conflictSlots) {
      newMap.delete(conflictSlot);
    }

    // 2. Remove any currently equipped item that declares a conflict with newItem's slotCategory
    for (const [slot, equippedItem] of newMap.entries()) {
      if (equippedItem.conflictSlots.includes(newItem.slotCategory)) {
        newMap.delete(slot);
      }
    }

    // 3. Equip newItem in its slot
    newMap.set(newItem.slotCategory, newItem);

    return new Outfit(newMap);
  }

  unequip(slotCategory: SlotCategory): Outfit {
    const existing = this.itemsMap.get(slotCategory);
    if (!existing) {
      return this;
    }

    if (!existing.isRemovable) {
      throw new Error(`Cannot unequip non-removable item in slot: ${slotCategory}`);
    }

    const newMap = new Map<SlotCategory, Item>(this.itemsMap);
    newMap.delete(slotCategory);
    return new Outfit(newMap);
  }

  clone(): Outfit {
    return new Outfit(new Map(this.itemsMap));
  }
}

