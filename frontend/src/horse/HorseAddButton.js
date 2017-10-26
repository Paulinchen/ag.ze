import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HorseAddButton extends React.Component {
    render() {
        return (
            <Link to={`horses/create`}>
                <Button className="pull-right">Add Horse</Button>
            </Link>
        );
    }
}

export default HorseAddButton;