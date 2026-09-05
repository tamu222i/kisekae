import { AsmrStudio } from '../../domain/models/AsmrStudio';
import { IStudioStorage } from '../../application/usecases/AsmrGameUseCases';

export const DEFAULT_STUDIO_STORAGE_KEY = 'kisekae_asmr_studio_state_v1';

export class LocalStorageStudioRepository implements IStudioStorage {
  constructor(private readonly storageKey: string = DEFAULT_STUDIO_STORAGE_KEY) {}

  async load(): Promise<AsmrStudio | null> {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return null;
      }
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return AsmrStudio.fromJSON(parsed);
    } catch (err) {
      console.warn('Failed to load ASMR studio state from localStorage:', err);
      return null;
    }
  }

  async save(studio: AsmrStudio): Promise<void> {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return;
      }
      const serialized = JSON.stringify(studio.toJSON());
      window.localStorage.setItem(this.storageKey, serialized);
    } catch (err) {
      console.warn('Failed to save ASMR studio state to localStorage:', err);
    }
  }
}
