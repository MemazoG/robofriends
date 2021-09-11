import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    //Can replace {cardsArray} with the robots.map function directly. Keeping it for now for easier readibility
    const cardsArray = robots.map((user, i) => {
        return (
            <Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    });
    
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;