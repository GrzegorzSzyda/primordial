import { useState } from 'react';
import { PositionT } from '../../types/PositionT';
import { getNewPositionByKeyCode } from './libs';

export const useMovement = (initialPosition: PositionT) => {
    const [newPosition, setNewPosition] = useState(initialPosition);
    return {
        position: newPosition,
        handleMovement: (keyCode: number) => {
            setNewPosition((prevPosition) =>
                getNewPositionByKeyCode(keyCode, prevPosition),
            );
        },
    };
};
