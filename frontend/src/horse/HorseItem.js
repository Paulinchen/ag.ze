import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

class HorseItem extends React.Component {
    render() {
        const {name, stable, race, dateOfBirth} = this.props.horse;
        return (
            <ListGroupItem header={name}>
                {race} - {stable} - geboren: {dateOfBirth}
            </ListGroupItem>
        );
    }
}

export default HorseItem;