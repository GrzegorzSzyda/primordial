import { useState } from 'react';
import { Directions } from '../../constants/directions';
import { Keyboard } from '../../constants/keyboard';

export type PositionT = {
    x: number;
    y: number;
};

const getNewPosition = (position: PositionT, direction: Directions): PositionT => {
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

const getDirectionByKeyCode = (key: Keyboard): Directions => {
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

const checkIsKeyHandled = (keyCode: number): boolean =>
    Object.values(Keyboard).some((key) => key === keyCode);

const a = (key: number, prevPosition: PositionT): PositionT => {
    if (!checkIsKeyHandled(key)) return prevPosition;
    const direction = getDirectionByKeyCode(key);
    return getNewPosition(prevPosition, direction);
};

export const useMovement = (initialPosition: PositionT) => {
    const [newPosition, setNewPosition] = useState(initialPosition);
    return {
        position: newPosition,
        handleMovement: (event: KeyboardEvent) => {
            const key = event.keyCode;
            setNewPosition(a(key, newPosition));
        },
    };
};
