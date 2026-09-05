import { AsmrToy } from '../models/AsmrToy';

export interface IAsmrToyRepository {
  getAll(): Promise<readonly AsmrToy[]>;
  getById(id: string): Promise<AsmrToy | undefined>;
}
