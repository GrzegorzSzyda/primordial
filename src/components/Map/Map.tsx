import React from 'react';
import styled from 'styled-components';
import { UNIT } from '../../constants/unit';
import { TileT } from '../../types/TileT';

type MapPropsT = {
    map: TileT[];
};

export const Map = ({ map }: MapPropsT) => (
    <div>
        {map.map((tile) => (
            <Tile
                key={tile.id}
                style={{
                    left: `${tile.position[0] * UNIT}px`,
                    top: `${tile.position[1] * UNIT}px`,
                }}
            >
                <div>
                    <b>{tile.id}</b>
                </div>
                {tile.items.map((item) => (
                    <div key={item.id}>{item.itemId}</div>
                ))}
            </Tile>
        ))}
    </div>
);

const Tile = styled.div`
    width: ${UNIT}px;
    height: ${UNIT}px;
    outline: 1px solid rgba(0, 0, 0, 0.3);
    position: absolute;
`;
