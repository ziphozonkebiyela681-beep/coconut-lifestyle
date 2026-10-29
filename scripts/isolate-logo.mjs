import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function isolateLogo() {
  const inputPath = path.resolve('public/assets/aistudio/WhatsApp_Image_2026-10-28_at_10.11.33_PM_672f4b0d.jpeg');
  const outputPath = path.resolve('public/assets/coconut_logo_isolated.png');

  console.log('Reading input image:', inputPath);

  // Get raw RGBA buffer
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  const rawBuffer = await image.raw().toBuffer({ resolveWithObject: true });
  const data = rawBuffer.data;
  const channels = rawBuffer.info.channels; // 3 or 4

  // Create new RGBA buffer
  const outputData = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const destIdx = i * 4;

    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    // Calculate maximum channel and brightness
    const maxVal = Math.max(r, g, b);
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    // The background is pure black (~0 to 15)
    // The gold has high R (~180-255), medium G (~120-210), lower B (~20-100)
    let alpha = 0;
    if (brightness < 12) {
      alpha = 0;
    } else if (brightness < 30) {
      // Smooth anti-aliased edge
      alpha = Math.round(((brightness - 12) / 18) * 255);
    } else {
      alpha = 255;
    }

    outputData[destIdx] = r;
    outputData[destIdx + 1] = g;
    outputData[destIdx + 2] = b;
    outputData[destIdx + 3] = alpha;
  }

  // Trim transparent borders to get clean bounding box
  await sharp(outputData, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .trim({ threshold: 5 })
    .png({ quality: 100 })
    .toFile(outputPath);

  console.log('Successfully saved isolated transparent logo to:', outputPath);
}

isolateLogo().catch((err) => {
  console.error('Error isolating logo:', err);
  process.exit(1);
});
