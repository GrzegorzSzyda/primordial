import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { UNIT } from '../../constants/scale';

type HeroPropsT = {
    x: number;
    y: number;
};

export const Hero = ({ x, y }: HeroPropsT) => (
    <Container style={{ left: `${UNIT * x}px`, top: `${UNIT * y}px` }}>
        <FontAwesomeIcon icon={faUser} />
    </Container>
);

const Container = styled.div`
    width: ${UNIT}px;
    height: ${UNIT}px;
    line-height: 60px;
    font-size: 45px;
    text-align: center;
    position: absolute;
`;
