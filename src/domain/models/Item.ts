import { SlotCategory, getSlotZIndex } from './SlotCategory';

export interface ItemProps {
  id: string;
  name: string;
  slotCategory: SlotCategory;
  svgContent: string;
  zIndex?: number;
  conflictSlots?: SlotCategory[];
  isRemovable?: boolean;
  thumbnailSvg?: string;
  description?: string;
}

export class Item {
  readonly id: string;
  readonly name: string;
  readonly slotCategory: SlotCategory;
  readonly svgContent: string;
  readonly zIndex: number;
  readonly conflictSlots: readonly SlotCategory[];
  readonly isRemovable: boolean;
  readonly thumbnailSvg: string;
  readonly description?: string;

  constructor(props: ItemProps) {
    if (!props.id || props.id.trim() === '') {
      throw new Error('Item ID must not be empty');
    }
    if (!props.name || props.name.trim() === '') {
      throw new Error('Item name must not be empty');
    }

    this.id = props.id.trim();
    this.name = props.name.trim();
    this.slotCategory = props.slotCategory;
    this.svgContent = props.svgContent;
    this.zIndex = props.zIndex ?? getSlotZIndex(props.slotCategory);
    this.conflictSlots = Object.freeze([...(props.conflictSlots ?? [])]);
    this.isRemovable = props.isRemovable ?? true;
    this.thumbnailSvg = props.thumbnailSvg ?? props.svgContent;
    this.description = props.description;
  }

  equals(other: Item): boolean {
    if (!other || !(other instanceof Item)) {
      return false;
    }
    return this.id === other.id;
  }
}
