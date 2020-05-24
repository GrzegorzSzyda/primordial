import { PositionT, TileT } from '../types';

export const getTileByPosition = (map: TileT[], position: PositionT) =>
    map.find(
        (tile) => tile.position[0] === position[0] && tile.position[1] === position[1],
    );
