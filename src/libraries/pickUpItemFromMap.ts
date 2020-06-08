import { PositionT, TileT } from '../types';

export const pickUpItemFromMap = (map: TileT[], heroPosition: PositionT): TileT[] =>
    map.map((tile) => {
        const isRightPosition =
            tile.position[0] !== heroPosition[0] || tile.position[1] !== heroPosition[1];

        if (isRightPosition) return tile;

        return { ...tile, items: [] };
    });
