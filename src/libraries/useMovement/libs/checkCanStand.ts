import { config } from '../../../constants/map';
import { PositionT } from '../../../types/PositionT';

export const checkCanStand = (position: PositionT): boolean =>
    config[position.y][position.x].canStand;
