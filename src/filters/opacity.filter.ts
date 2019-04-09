import { Filter } from '../types/filter.type';
import { normalizeNumberPercentage } from '../utils/filter.utils';

export const opacity: Filter = (imageData, opacity = '1') => {
  const amount = normalizeNumberPercentage(opacity);
  const { data } = imageData;
  const { length } = data;
  console.log('opacity', amount)

  // in rgba world, the 4th entry is the alpha channel
  for (let i = 3; i < length;) {
    data[i] *= amount;
    i += 4;
  }

  return imageData;
};
