import React from 'react';
import styled, { css } from 'styled-components';
import { Texture, UNIT } from '../../constants';
import { TileT } from '../../types';

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
                textures={tile.textures}
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

const blankTile = css`
    background-color: transparent;
`;
const grassTile = css`
    background-color: #abc123;
`;
const wallTile = css`
    background-color: #8c4f1c;
`;

const getTexturesStyles = (textures: Texture[]) =>
    textures.map((texture) => {
        switch (texture) {
            case Texture.Wall:
                return wallTile;
            case Texture.Grass:
                return grassTile;
            default:
                return blankTile;
        }
    });

const Tile = styled.div<{ textures: Texture[] }>`
    width: ${UNIT}px;
    height: ${UNIT}px;
    outline: 1px solid rgba(0, 0, 0, 0.3);
    position: absolute;
    ${({ textures }) => getTexturesStyles(textures)}
`;
