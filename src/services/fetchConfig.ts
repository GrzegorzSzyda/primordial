import { MAP } from '../constants/map';
import { TileT } from '../types/TileT';

type FetchConfigResponseT = {
    map: TileT[];
};

export const fetchConfig = (): Promise<FetchConfigResponseT> =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(() => ({ map: MAP }));
