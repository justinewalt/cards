import React from 'react';
import Card from './Card';

const CardsDeck = ({ cards, show }) => (
    <div>
        { cards.map( c => <Card key={c.id} {...c} show={show} /> ) }
    </div>
)

export default CardsDeck;