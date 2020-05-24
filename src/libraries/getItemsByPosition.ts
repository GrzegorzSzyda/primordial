import { PositionT, TileT } from '../types';
import { getTileByPosition } from './getTileByPosition';

export const getItemsByPosition = (map: TileT[], position: PositionT) =>
    getTileByPosition(map, position)?.items || [];
