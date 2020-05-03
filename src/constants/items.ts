enum ItemTypes {
    Consumable,
    Weapon,
}

type ConsumableItemNameT = 'turnip';

type ConsumableItemT = {
    id: ConsumableItemNameT;
    type: ItemTypes.Consumable;
};

type WeaponItemNameT = 'sword' | 'axe';

type WeaponItemT = {
    id: WeaponItemNameT;
    type: ItemTypes.Weapon;
};

export type ItemNameT = ConsumableItemNameT | WeaponItemNameT;

type ConsumableItemsT =
    | Record<ConsumableItemNameT, ConsumableItemT>
    | Record<WeaponItemNameT, WeaponItemT>;

type ItemsT = ConsumableItemsT;

export const ITEMS: ItemsT = {
    turnip: {
        id: 'turnip',
        type: ItemTypes.Consumable,
    },
    sword: {
        id: 'sword',
        type: ItemTypes.Weapon,
    },
    axe: {
        id: 'axe',
        type: ItemTypes.Weapon,
    },
};
