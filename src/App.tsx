/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Backpack } from './components/Backpack';
import { Hero } from './components/Hero';
import { Map } from './components/Map';
import { getItemsByPosition } from './libraries/getItemsByPosition';
import { fetchConfig } from './services';
import { PositionT } from './types';
import { BackpackT } from './types/BackpackT';
import { TileT } from './types/TileT';

const INITIAL_BACKPACK: BackpackT = {
    items: [],
};

enum Direction {
    North = 'north',
    West = 'west',
    South = 'south',
    East = 'east',
}

const getNewPosition = (direction: Direction, position: PositionT): PositionT => {
    console.log(position[0], position[1]);
    switch (direction) {
        case Direction.North:
            return [position[0], position[1] - 1];
        case Direction.West:
            return [position[0] - 1, position[1]];
        case Direction.South:
            return [position[0], position[1] + 1];
        case Direction.East:
            return [position[0] + 1, position[1]];
    }
};
const INITIAL_POSITION: PositionT = [0, 0];

const getKeyBindings = (
    onMovement: (direction: Direction) => void,
    onPickUpItem: () => void,
) => ({
    w: () => onMovement(Direction.North),
    a: () => onMovement(Direction.West),
    s: () => onMovement(Direction.South),
    d: () => onMovement(Direction.East),
    e: () => onPickUpItem(),
});

export const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [map, setMap] = useState<TileT[]>([]);
    const [heroPosition, setHeroPosition] = useState<PositionT>(INITIAL_POSITION);
    const [backpack, setBackpack] = useState<BackpackT>(INITIAL_BACKPACK);

    useEffect(() => {
        document.body.addEventListener('keypress', (event) => {
            const key = event.key;
            onKeyPress(key);
        });
        setIsLoading(true);
        fetchConfig().then((config) => {
            setMap(config.map);
            setIsLoading(false);
        });
    }, []);

    const onPickUpItem = () => {
        const items = getItemsByPosition(map, heroPosition);
        if (!items.length) return;
        setBackpack((backpack) => ({
            ...backpack,
            items: [...backpack.items, ...items],
        }));
        setMap((map) =>
            map.map((tile) => {
                const isRightPosition =
                    tile.position[0] !== heroPosition[0] ||
                    tile.position[1] !== heroPosition[1];
                if (isRightPosition) return tile;
                return { ...tile, items: [] };
            }),
        );
    };

    const onMovement = (direction: Direction) => {
        setHeroPosition((heroPosition) => getNewPosition(direction, heroPosition));
    };

    const onKeyPress = (key: string) => {
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
                <DevToolButton onClick={() => onKeyPress('w')}>W</DevToolButton>
                <DevToolButton onClick={() => onKeyPress('a')}>A</DevToolButton>
                <DevToolButton onClick={() => onKeyPress('s')}>S</DevToolButton>
                <DevToolButton onClick={() => onKeyPress('d')}>D</DevToolButton>
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
