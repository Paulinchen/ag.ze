import React from 'react';
import {Panel, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class HorseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horse: {
                name: '',
                race: '',
                stable: '',
                dateOfBirth: ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleSubmit(event) {
        fetch('http://localhost:3100/api/horse', {
            mode: 'cors',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({horse: this.state.horse})
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        });    
    }

    handleChange(event) {
        const horse = this.state.horse;
        horse[event.target.name] = event.target.value;
        this.setState({ horse });
    }

    handleDateChange(value, formattedValue){
        const horse = this.state.horse;
        horse.dateOfBirth = value;
        this.setState({ horse });
    }


    render() {
        return (
            <Panel header="Add a new horse">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <ControlLabel>Name*</ControlLabel>
                        <FormControl type="text"
                            value={this.state.horse.name}
                            placeholder="Enter name"
                            name="name"
                            onChange={this.handleChange}
                            />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Race*</ControlLabel>
                        <FormControl type="text"
                            value={this.state.horse.race}
                            placeholder="Enter race"
                            name="race"
                            onChange={this.handleChange}
                            />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Stable*</ControlLabel>
                        <FormControl type="text"
                            value={this.state.horse.stable}
                            placeholder="Enter stable"
                            name="stable"
                            onChange={this.handleChange}
                            />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Birth date*</ControlLabel>
                        <DatePicker id="datepicker" value={this.state.horse.dateOfBirth} onChange={this.handleDateChange} />
                    </FormGroup>
                    <Button type="submit" bsStyle="primary">
                            Add
                    </Button>
                </form>
            </Panel>
        );
    }
}

export default HorseForm;