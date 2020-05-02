import { Directions } from '../../../constants/directions';
import { Keyboard } from '../../../constants/keyboard';

export const getDirectionByKeyCode = (key: Keyboard): Directions => {
    switch (key) {
        case Keyboard.W:
            return Directions.North;
        case Keyboard.A:
            return Directions.West;
        case Keyboard.S:
            return Directions.South;
        case Keyboard.D:
            return Directions.East;
    }
};
