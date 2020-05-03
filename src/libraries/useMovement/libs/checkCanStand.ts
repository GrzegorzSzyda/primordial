import { map } from '../../../constants/map';
import { PositionT } from '../../../types/PositionT';

export const checkCanStand = (position: PositionT): boolean =>
    map[position.y][position.x].canStand;
