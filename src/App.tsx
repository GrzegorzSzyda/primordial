import React, { useState, useEffect } from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { Map } from './components/Map';
import { useMovement } from './libraries/useMovement';

interface UseToggleI {
    value: boolean;
    toggle: () => void;
}

export const App = () => {
    const INITIAL_POSITION = { x: 3, y: 5 };
    const { position, handleMovement } = useMovement(INITIAL_POSITION);

    useEffect(() => {
        document.body.addEventListener('keydown', handleMovement);
    }, []);

    return (
        <div id="Game">
            <Map>
                <Hero y={position.y} x={position.x} />
            </Map>
        </div>
    );
};
