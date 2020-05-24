import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { UNIT } from '../../constants/unit';
import { PositionT } from '../../types';

type HeroPropsT = {
    position: PositionT;
};

export const Hero = ({ position }: HeroPropsT) => (
    <Container
        style={{ left: `${UNIT * position[0]}px`, top: `${UNIT * position[1]}px` }}
    >
        <Wrapper>
            <FontAwesomeIcon icon={faUser} />
        </Wrapper>
    </Container>
);

const Container = styled.div`
    width: ${UNIT}px;
    height: ${UNIT}px;
    line-height: ${UNIT}px;
    font-size: 45px;
    text-align: center;
    position: absolute;
`;

const Wrapper = styled.div`
    position: relative;
`;
