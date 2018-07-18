import React, { Component, PropTypes } from 'react';
import RidesDisplay from './RidesDisplay.js';
import RidesOrganizer from './RidesOrganizer';
import axios from 'axios';


class Rides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ridesData : []
        }
    }

        
    componentWillMount() {

        axios.get('http://localhost:3000/users')
                .then(res => {
                    const ridesData = res.data;
                    this.setState({ ridesData });
                })
                .catch(function(error) {
                    console.log("error")
                })
    }

    render() {

        // console.log(RidesOrganizer(this.state.ridesData))
        return (
            <RidesDisplay ridesProps = {this.state.ridesData}/>
        )
    };
}


export default Rides;



