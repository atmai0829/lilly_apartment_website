import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public/apartmentpictures";
const MAX_WIDTH = 1920;
const QUALITY = 82;

const files = await readdir(INPUT_DIR);
const images = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Compressing ${images.length} images...\n`);

for (const file of images) {
  const inputPath = join(INPUT_DIR, file);
  const before = (await stat(inputPath)).size;

  const ext = extname(file).toLowerCase();
  const name = basename(file, ext);
  const outputPath = join(INPUT_DIR, name + ".webp");

  await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  const after = (await stat(outputPath)).size;
  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(
    `  ${file} → ${name}.webp  (${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024).toFixed(0)}KB, -${saved}%)`,
  );
}

console.log(
  "\nDone. Update image paths from .jpg/.jpeg to .webp in your components.",
);
