import { IItemRepository } from '../../domain/repositories/IItemRepository';
import { Outfit } from '../../domain/models/Outfit';
import { SlotCategory } from '../../domain/models/SlotCategory';
import { OutfitRandomizer } from '../../domain/services/OutfitRandomizer';

export interface EquipItemCommand {
  currentOutfit: Outfit;
  itemId: string;
}

export class EquipItemUseCase {
  constructor(private readonly repository: IItemRepository) {}

  async execute(command: EquipItemCommand): Promise<Outfit> {
    const item = await this.repository.getById(command.itemId);
    if (!item) {
      throw new Error(`Item with id "${command.itemId}" not found`);
    }

    return command.currentOutfit.equip(item);
  }
}

export interface UnequipSlotCommand {
  currentOutfit: Outfit;
  slotCategory: SlotCategory;
}

export class UnequipSlotUseCase {
  execute(command: UnequipSlotCommand): Outfit {
    return command.currentOutfit.unequip(command.slotCategory);
  }
}

export interface RandomizeOutfitCommand {
  rng?: () => number;
}

export class RandomizeOutfitUseCase {
  private readonly randomizer = new OutfitRandomizer();

  constructor(private readonly repository: IItemRepository) {}

  async execute(command?: RandomizeOutfitCommand): Promise<Outfit> {
    const catalog = await this.repository.getAll();
    const baseBody = await this.repository.getBaseBody();

    return this.randomizer.randomize({
      catalog,
      baseBody,
      rng: command?.rng,
    });
  }
}

export class ResetOutfitUseCase {
  constructor(private readonly repository: IItemRepository) {}

  async execute(): Promise<Outfit> {
    const baseBody = await this.repository.getBaseBody();

    const defaultItemIds = [
      'bg_pastel_dots',
      'hair_back_twintail_pink',
      'eyes_sparkle_blue',
      'mouth_smile_blush',
      'tops_sailor',
      'bottoms_skirt_navy',
      'shoes_loafers',
      'hair_front_bangs_pink',
      'acc_ribbon_red',
    ];

    const initialItems = [];
    for (const id of defaultItemIds) {
      const item = await this.repository.getById(id);
      if (item) {
        initialItems.push(item);
      }
    }

    return Outfit.create({
      baseBody,
      initialItems,
    });
  }
}

export class GetCatalogUseCase {
  constructor(private readonly repository: IItemRepository) {}

  async execute(): Promise<readonly import('../../domain/models/Item').Item[]> {
    return this.repository.getAll();
  }

  async getByCategory(
    category: SlotCategory
  ): Promise<readonly import('../../domain/models/Item').Item[]> {
    return this.repository.getByCategory(category);
  }
}
