import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AsmrGameView } from './AsmrGameView';
import { Outfit } from '../../domain/models/Outfit';
import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';
import { InMemoryAsmrToyRepository } from '../../infrastructure/repositories/InMemoryAsmrToyRepository';
import { DEFAULT_ASMR_TOYS } from '../../infrastructure/assets/asmrToysData';
import { AsmrStudio } from '../../domain/models/AsmrStudio';
import { IStudioStorage } from '../../application/usecases/AsmrGameUseCases';

class MockStorage implements IStudioStorage {
  async load(): Promise<AsmrStudio | null> {
    return AsmrStudio.createDefault('toy_bubble_wrap');
  }
  async save(): Promise<void> {}
}

describe('AsmrGameView component', () => {
  const dummyBody = new Item({
    id: 'body_default',
    name: 'からだ',
    slotCategory: SlotCategory.BASE_BODY,
    svgContent: '<ellipse cx="150" cy="200" rx="30" ry="60" fill="#FFE0BD"/>',
  });

  it('renders avatar companion, active toy, upgrades, and selector', async () => {
    const outfit = Outfit.create({ baseBody: dummyBody });
    const toyRepo = new InMemoryAsmrToyRepository(DEFAULT_ASMR_TOYS);
    const storage = new MockStorage();

    render(
      <AsmrGameView
        outfit={outfit}
        toyRepo={toyRepo}
        studioStorage={storage}
      />
    );

    expect(await screen.findByTestId('asmr-game-view')).toBeInTheDocument();
    expect(await screen.findByTestId('avatar-companion')).toBeInTheDocument();
    expect(await screen.findByTestId('asmr-toy-interactive')).toBeInTheDocument();
    expect(screen.getByText(/タイクーン強化ショップ/)).toBeInTheDocument();
    expect(screen.getByText(/おもちゃコレクション/)).toBeInTheDocument();
  });
});
