import { Item } from '../models/Item';
import { Outfit } from '../models/Outfit';
import { SlotCategory } from '../models/SlotCategory';

export interface RandomizeOutfitOptions {
  catalog: readonly Item[];
  baseBody: Item;
  rng?: () => number;
}

export class OutfitRandomizer {
  randomize(options: RandomizeOutfitOptions): Outfit {
    const { catalog, baseBody, rng = Math.random } = options;

    const itemsByCategory = new Map<SlotCategory, Item[]>();
    for (const item of catalog) {
      const list = itemsByCategory.get(item.slotCategory) ?? [];
      list.push(item);
      itemsByCategory.set(item.slotCategory, list);
    }

    const pickOne = (category: SlotCategory): Item | undefined => {
      const items = itemsByCategory.get(category);
      if (!items || items.length === 0) return undefined;
      const index = Math.floor(rng() * items.length);
      return items[index];
    };

    const chosenItems: Item[] = [];

    // 1. Hair
    const hairBack = pickOne(SlotCategory.HAIR_BACK);
    if (hairBack) chosenItems.push(hairBack);

    const hairFront = pickOne(SlotCategory.HAIR_FRONT);
    if (hairFront) chosenItems.push(hairFront);

    // 2. Face
    const eyes = pickOne(SlotCategory.EYES);
    if (eyes) chosenItems.push(eyes);

    const mouth = pickOne(SlotCategory.MOUTH);
    if (mouth) chosenItems.push(mouth);

    // 3. Clothing: Choose between OnePiece or Tops+Bottoms
    const dresses = itemsByCategory.get(SlotCategory.ONE_PIECE) ?? [];
    const tops = itemsByCategory.get(SlotCategory.TOPS) ?? [];
    const bottoms = itemsByCategory.get(SlotCategory.BOTTOMS) ?? [];

    const preferDress = dresses.length > 0 && (tops.length === 0 || bottoms.length === 0 || rng() < 0.4);

    if (preferDress && dresses.length > 0) {
      const dress = pickOne(SlotCategory.ONE_PIECE);
      if (dress) chosenItems.push(dress);
    } else {
      const top = pickOne(SlotCategory.TOPS);
      if (top) chosenItems.push(top);

      const bottom = pickOne(SlotCategory.BOTTOMS);
      if (bottom) chosenItems.push(bottom);
    }

    // 4. Shoes
    const shoes = pickOne(SlotCategory.SHOES);
    if (shoes) chosenItems.push(shoes);

    // 5. Accessory (e.g. 70% chance)
    if (rng() < 0.7) {
      const accessory = pickOne(SlotCategory.ACCESSORY);
      if (accessory) chosenItems.push(accessory);
    }

    // 6. Background
    const background = pickOne(SlotCategory.BACKGROUND);
    if (background) chosenItems.push(background);

    return Outfit.create({
      baseBody,
      initialItems: chosenItems,
    });
  }
}
