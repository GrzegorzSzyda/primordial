import React, { memo } from 'react';
import styled from 'styled-components';
import { config } from '../../constants/map';
import { UNIT } from '../../constants/scale';

export const Map = memo(() => (
    <Container>
        {config.map((row, index) => (
            <Row key={index}>
                {row.map((cell, i) => (
                    <Cell key={i} />
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

const Cell = styled.div`
    outline: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #abc123;
    display: inline-block;
    width: ${UNIT}px;
    height: ${UNIT}px;
`;
