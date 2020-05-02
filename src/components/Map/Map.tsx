import React, { memo } from 'react';
import styled from 'styled-components';
import { config, Textures } from '../../constants/map';
import { UNIT } from '../../constants/scale';

export const Map = memo(() => (
    <Container>
        {config.map((row, index) => (
            <Row key={index}>
                {row.map((cell, i) => (
                    <Cell key={i} textures={cell.textures} />
                ))}
            </Row>
        ))}
    </Container>
));

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const Row = styled.div`
    white-space: nowrap;
    height: ${UNIT}px;
`;

const getBackgroundByTextures = (textures: Textures[]) => {
    switch (textures[0]) {
        case Textures.Wall:
            return '#986210';
        case Textures.Grass:
            return '#abc123';
    }
};

const Cell = styled.div<{ textures: Textures[] }>`
    outline: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${({ textures }) => getBackgroundByTextures(textures)};
    display: inline-block;
    width: ${UNIT}px;
    height: ${UNIT}px;
`;
