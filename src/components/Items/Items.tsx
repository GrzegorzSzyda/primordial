import { faBroom, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { ItemNameT } from '../../constants/items';
import { ItemT } from '../../constants/map';

type ItemsPropsT = {
    items: ItemT[];
};

const getIconName = (itemId: ItemNameT) => {
    switch (itemId) {
        case 'turnip':
            return faSeedling;
        case 'sword':
        case 'axe':
            return faBroom;
    }
};

export const Items = ({ items }: ItemsPropsT) => {
    if (!items.length) return null;
    return (
        <Container>
            <FontAwesomeIcon icon={getIconName(items[0].item)} />
        </Container>
    );
};

const Container = styled.div`
    width: 60px;
    height: 60px;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 40px;
    color: #128010;
`;
