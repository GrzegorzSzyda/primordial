import { PositionT } from '../../../types/PositionT';
import { checkIsKeyHandled } from './checkIsKeyHandled';
import { getDirectionByKeyCode } from './getDirectionByKeyCode';
import { getNewPosition } from './getNewPosition';

export const getNewPositionByKeyCode = (
    keyCode: number,
    prevPosition: PositionT,
): PositionT => {
    if (!checkIsKeyHandled(keyCode)) return prevPosition;
    const direction = getDirectionByKeyCode(keyCode);
    return getNewPosition(prevPosition, direction);
};
