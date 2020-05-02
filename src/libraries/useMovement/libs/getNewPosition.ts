import { Directions } from '../../../constants/directions';
import { PositionT } from '../../../types/PositionT';

export const getNewPosition = (position: PositionT, direction: Directions): PositionT => {
    switch (direction) {
        case Directions.North:
            return { ...position, y: position.y - 1 };
        case Directions.South:
            return { ...position, y: position.y + 1 };
        case Directions.West:
            return { ...position, x: position.x - 1 };
        case Directions.East:
            return { ...position, x: position.x + 1 };
    }
};
