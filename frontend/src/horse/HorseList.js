import React from 'react';
import {ListGroup} from 'react-bootstrap';
import HorseItem from './HorseItem';

class HorseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horses: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3100/api/horse', {mode: 'cors'})
        .then((response) => response.json())
        .then((horses) => this.setState({horses}));
        // this.setState({horses});
    }

    render() {
        
        return (
            <ListGroup>
                {this.state.horses.map((horse) => {
                    return <HorseItem key={horse._id} horse={horse}/>
                })}
            </ListGroup>
        );
    }
}

export default HorseList;