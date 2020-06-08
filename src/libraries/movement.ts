import { Direction } from '../constants';
import { PositionT, TileT } from '../types';
import { getNewPosition } from './getNewPosition';
import { getTileByPosition } from './getTileByPosition';

export const movement = (map: TileT[], direction: Direction, position: PositionT) => {
    const newPosition = getNewPosition(direction, position);
    const newTile = getTileByPosition(map, newPosition);
    if (!newTile) return position;

    const isNewTileBlockade = newTile.isBlockade;
    if (isNewTileBlockade) return position;

    return newPosition;
};
