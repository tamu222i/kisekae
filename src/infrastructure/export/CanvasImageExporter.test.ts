import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CanvasImageExporter } from './CanvasImageExporter';

describe('CanvasImageExporter', () => {
  let exporter: CanvasImageExporter;

  beforeEach(() => {
    exporter = new CanvasImageExporter();
  });

  it('instantiates cleanly and provides exportSvgToPng method', () => {
    expect(exporter.exportSvgToPng).toBeDefined();
  });

  it('rejects gracefully if 2D context is unavailable', async () => {
    const dummySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    
    // Mock getContext to return null
    const originalCreateElement = document.createElement.bind(document);
    vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      if (tagName === 'canvas') {
        const canvas = originalCreateElement('canvas');
        vi.spyOn(canvas, 'getContext').mockReturnValue(null);
        return canvas;
      }
      return originalCreateElement(tagName);
    });

    await expect(exporter.exportSvgToPng(dummySvg)).rejects.toThrowError(
      /Canvas 2D context is not supported/i
    );

    vi.restoreAllMocks();
  });
});
