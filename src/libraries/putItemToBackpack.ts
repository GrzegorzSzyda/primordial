import { BackpackT, ItemT } from '../types';

export const putItemToBackpack = (backpack: BackpackT, items: ItemT[]): BackpackT => ({
    ...backpack,
    items: [...backpack.items, ...items],
});
