import { Direction } from '../constants';
import { PositionT } from '../types';

export const getNewPosition = (direction: Direction, position: PositionT): PositionT => {
    switch (direction) {
        case Direction.North:
            return [position[0], position[1] - 1];
        case Direction.West:
            return [position[0] - 1, position[1]];
        case Direction.South:
            return [position[0], position[1] + 1];
        case Direction.East:
            return [position[0] + 1, position[1]];
    }
};
