export interface ImageExporter {
  exportSvgToPng(svgElement: SVGSVGElement, filename?: string): Promise<void>;
}

export class CanvasImageExporter implements ImageExporter {
  async exportSvgToPng(
    svgElement: SVGSVGElement,
    filename: string = 'kisekae-avatar.png'
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const serializer = new XMLSerializer();
        let svgString = serializer.serializeToString(svgElement);

        // Ensure proper namespace
        if (!svgString.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)) {
          svgString = svgString.replace(
            /^<svg/,
            '<svg xmlns="http://www.w3.org/2000/svg"'
          );
        }

        const width = 600;
        const height = 800;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error('Canvas 2D context is not supported');
        }

        const svgBlob = new Blob([svgString], {
          type: 'image/svg+xml;charset=utf-8',
        });
        const URL = window.URL || window.webkitURL || window;
        const blobUrl = URL.createObjectURL(svgBlob);

        const img = new Image();
        img.onload = () => {
          try {
            ctx.drawImage(img, 0, 0, width, height);
            URL.revokeObjectURL(blobUrl);

            const pngUrl = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.download = filename;
            downloadLink.href = pngUrl;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            resolve();
          } catch (err) {
            reject(err);
          }
        };

        img.onerror = (err) => {
          URL.revokeObjectURL(blobUrl);
          reject(err);
        };

        img.src = blobUrl;
      } catch (err) {
        reject(err);
      }
    });
  }
}

