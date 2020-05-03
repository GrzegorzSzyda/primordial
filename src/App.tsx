/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import { Hero } from './components/Hero';
import { Map } from './components/Map';
import { useMovement } from './libraries/useMovement';

export const App = () => {
    const INITIAL_POSITION = { x: 5, y: 3 };
    const { position, handleMovement } = useMovement(INITIAL_POSITION);

    useEffect(() => {
        document.body.addEventListener('keydown', onHandleMovement);
    }, []);

    const onHandleMovement = (event: KeyboardEvent): void => {
        const keyCode = event.keyCode;
        handleMovement(keyCode);
    };

    return (
        <Container id="Game">
            <Map />
            <Hero y={position.y} x={position.x} />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;
