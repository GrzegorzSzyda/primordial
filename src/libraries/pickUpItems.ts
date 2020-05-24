import { BackpackT, PositionT, TileT } from '../types';
import { getItemsByPosition } from './getItemsByPosition';

export const pickUpItems = (
    map: TileT[],
    setMap: React.Dispatch<React.SetStateAction<TileT[]>>,
    backpack: BackpackT,
    setBackpack: React.Dispatch<React.SetStateAction<BackpackT>>,
    position: PositionT,
) => {
    const items = getItemsByPosition(map, position);
    if (!items.length) return;
    setBackpack((backpack) => ({
        ...backpack,
        items: [...backpack.items, ...items],
    }));
    setMap((map) =>
        map.map((tile) => {
            const isRightPosition =
                tile.position[0] !== position[0] || tile.position[1] !== position[1];
            if (isRightPosition) return tile;
            return { ...tile, items: [] };
        }),
    );
};
