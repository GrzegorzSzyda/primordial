import { Keyboard } from '../../../constants/keyboard';

export const checkIsKeyHandled = (keyCode: number): boolean =>
    Object.values(Keyboard).some((key) => key === keyCode);
