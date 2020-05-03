import { ItemNameT } from './items';

export type ItemT = {
    id: string;
    item: ItemNameT;
};

type TileT = {
    textures: Textures[];
    canStand: boolean;
    items: ItemT[];
};

type RowT = TileT[];
type MapT = RowT[];

export enum Textures {
    Grass,
    Wall,
}

const g: TileT = {
    textures: [Textures.Grass],
    canStand: true,
    items: [],
};

const t: TileT = {
    textures: [Textures.Grass],
    canStand: true,
    items: [{ id: 'turnip1', item: 'turnip' }],
};

const s: TileT = {
    textures: [Textures.Grass],
    canStand: true,
    items: [{ id: 'sword1', item: 'sword' }],
};

const w: TileT = {
    textures: [Textures.Wall],
    canStand: false,
    items: [],
};

// prettier-ignore
export const map: MapT = [
    [ w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w ],
    [ w, g, g, g, g, g, g, g, g, g, w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, w, g, g, g, g, s, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, w, w, w, w, g, w, w, w, w, w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, t, t, t, t, t, t, t, t, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, t, t, t, t, t, t, t, t, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, t, t, t, t, t, t, t, t, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, t, t, t, t, t, t, t, t, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, w ],
    [ w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w ],
];
