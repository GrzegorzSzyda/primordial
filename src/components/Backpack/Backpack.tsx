import React from 'react';
import { BackpackT } from '../../types';

type BackpackPropsT = {
    backpack: BackpackT;
};

export const Backpack = ({ backpack }: BackpackPropsT) => (
    <div>
        {backpack.items.map((item) => (
            <div key={item.id}>{item.itemId}</div>
        ))}
    </div>
);
