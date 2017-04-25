import React from 'react';
import {ListGroup} from 'react-bootstrap';
import HorseItem from './HorseItem';

class HorseList extends React.Component {
    render() {
        const horses = [
            {id: 0, name: 'Paulchen', stable: 'Giggenhausen', race: 'Haflinger', dateOfBirth: 2006},
            {id: 1, name: 'Nino', stable: 'Giggenhausen', race: 'Haflinger', dateOfBirth: 2004},
            {id: 2, name: 'Ciro', stable: 'Holzerhof', race: 'Freiberger', dateOfBirth: 2008}
        ];
        return (
            <ListGroup>
                {horses.map((horse) => {
                    return <HorseItem key={horse.id} horse={horse}/>
                })}
            </ListGroup>
        );
    }
}

export default HorseList;