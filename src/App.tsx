/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Backpack } from './components/Backpack';
import { Hero } from './components/Hero';
import { Map } from './components/Map';
import { Direction, INITIAL_BACKPACK, INITIAL_POSITION } from './constants';
import {
    getItemsByPosition,
    getKeyBindings,
    movement,
    pickUpItemFromMap,
} from './libraries';
import { putItemToBackpack } from './libraries/putItemToBackpack';
import { fetchConfig } from './services';
import { BackpackT, PositionT, TileT } from './types';

export const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [map, setMap] = useState<TileT[]>([]);
    const [heroPosition, setHeroPosition] = useState<PositionT>(INITIAL_POSITION);
    const [backpack, setBackpack] = useState<BackpackT>(INITIAL_BACKPACK);

    useEffect(() => {
        document.body.addEventListener('keypress', onKeyPress);
        return () => document.body.removeEventListener('keypress', onKeyPress);
    }, [heroPosition, map]);

    useEffect(() => {
        setIsLoading(true);
        fetchConfig().then((config) => {
            setMap(config.map);
            setIsLoading(false);
        });
    }, []);

    const onPickUpItem = () => {
        const items = getItemsByPosition(map, heroPosition);
        if (!items.length) return;
        setBackpack((backpack) => putItemToBackpack(backpack, items));
        setMap((map) => pickUpItemFromMap(map, heroPosition));
    };

    const onMovement = (direction: Direction) => {
        setHeroPosition((heroPosition) => movement(map, direction, heroPosition));
    };

    const onKeyPress = (event: KeyboardEvent) => {
        const key = event.key;
        if (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'e') {
            getKeyBindings(onMovement, onPickUpItem)[key]();
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <Container id="Game">
            <Map map={map} />
            <Hero position={heroPosition} />
            <BackpackWrapper>
                <Backpack backpack={backpack} />
            </BackpackWrapper>
            <DevTool>
                <DevToolButton onClick={() => onKeyPress({ key: 'w' } as KeyboardEvent)}>
                    W
                </DevToolButton>
                <DevToolButton onClick={() => onKeyPress({ key: 'a' } as KeyboardEvent)}>
                    A
                </DevToolButton>
                <DevToolButton onClick={() => onKeyPress({ key: 's' } as KeyboardEvent)}>
                    S
                </DevToolButton>
                <DevToolButton onClick={() => onKeyPress({ key: 'd' } as KeyboardEvent)}>
                    D
                </DevToolButton>
                <DevToolButton onClick={onPickUpItem}>Pickup</DevToolButton>
            </DevTool>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
`;

const DevTool = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 200px;
    border: 1px dashed #f00;
    background-color: rgba(255, 255, 255, 0.3);
`;

const DevToolButton = styled.button`
    display: block;
`;

const BackpackWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 200px;
    border: 1px solid #666;
`;
