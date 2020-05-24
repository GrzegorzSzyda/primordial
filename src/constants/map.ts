import { Texture } from './Texture';
import { ItemId } from './ItemId';
import { TileT } from '../types/TileT';

export const MAP: TileT[] = [
    {
        id: 'tile-0-0',
        textures: [Texture.Grass],
        position: [0, 0],
        isBlockade: false,
        items: [],
    },
    {
        id: 'tile-0-1',
        textures: [Texture.Grass],
        position: [0, 1],
        isBlockade: false,
        items: [{ id: 'turnip-1', itemId: ItemId.Turnip }],
    },
    {
        id: 'tile-1-0',
        textures: [Texture.Grass],
        position: [1, 0],
        isBlockade: false,
        items: [{ id: 'carrot-1', itemId: ItemId.Carrot }],
    },
    {
        id: 'tile-1-1',
        textures: [Texture.Wall],
        position: [1, 1],
        isBlockade: true,
        items: [],
    },
];
