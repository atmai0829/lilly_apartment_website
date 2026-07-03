import sharp from 'sharp';
import { copyFile, unlink } from 'fs/promises';

const tmp = 'public/apartmentpictures/_event_lounge_tmp.webp';
const dest = 'public/apartmentpictures/event_lounge.webp';

await sharp(dest)
  .rotate(90)
  .webp({ quality: 82 })
  .toFile(tmp);

await copyFile(tmp, dest);
await unlink(tmp);
console.log('Done — event_lounge.webp rotated 90° clockwise');
