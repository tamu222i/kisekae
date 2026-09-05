import { AsmrToy } from '../../domain/models/AsmrToy';
import { IAsmrToyRepository } from '../../domain/repositories/IAsmrToyRepository';

export class InMemoryAsmrToyRepository implements IAsmrToyRepository {
  private readonly toysById: Map<string, AsmrToy>;

  constructor(initialToys: readonly AsmrToy[]) {
    this.toysById = new Map();
    for (const toy of initialToys) {
      this.toysById.set(toy.id, toy);
    }
  }

  async getAll(): Promise<readonly AsmrToy[]> {
    return Array.from(this.toysById.values());
  }

  async getById(id: string): Promise<AsmrToy | undefined> {
    return this.toysById.get(id);
  }
}
