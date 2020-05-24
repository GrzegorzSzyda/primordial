import { Texture } from '../constants/Texture';
import { ItemT } from './ItemT';
import { PositionT } from './PositionT';

export type TileT = {
    id: string;
    textures: Texture[];
    position: PositionT;
    isBlockade: boolean;
    items: ItemT[];
};
