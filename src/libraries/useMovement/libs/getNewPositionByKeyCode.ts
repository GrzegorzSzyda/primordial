import { PositionT } from '../../../types/PositionT';
import { checkCanStand } from './checkCanStand';
import { checkIsKeyHandled } from './checkIsKeyHandled';
import { getDirectionByKeyCode } from './getDirectionByKeyCode';
import { getNewPosition } from './getNewPosition';

export const getNewPositionByKeyCode = (
    keyCode: number,
    prevPosition: PositionT,
): PositionT => {
    if (!checkIsKeyHandled(keyCode)) return prevPosition;
    const direction = getDirectionByKeyCode(keyCode);
    const newPosition = getNewPosition(prevPosition, direction);
    const canStand = checkCanStand(newPosition);
    if (canStand) return getNewPosition(prevPosition, direction);
    return prevPosition;
};
