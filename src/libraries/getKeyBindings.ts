import { Direction } from '../constants';

export const getKeyBindings = (
    onMovement: (direction: Direction) => void,
    onPickUpItem: () => void,
) => ({
    w: () => onMovement(Direction.North),
    a: () => onMovement(Direction.West),
    s: () => onMovement(Direction.South),
    d: () => onMovement(Direction.East),
    e: () => onPickUpItem(),
});
