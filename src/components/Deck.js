import React from 'react';
import Card from './Card';

class Deck extends React.Component {
    render() {
        return (
            <div>
                <p>This is a deck.</p>
                <Card />
            </div>
        );
    }
}

export default Deck;