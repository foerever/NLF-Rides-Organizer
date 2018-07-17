import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class RidesDisplay extends Component {
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
            console.log(this.state.ridesData);
            return (
                <div>
                    <h1>RIDES</h1>
                    <p>Check the console for the data</p>
                    <p> the number of people who have signed up for rides so far is </p>
        
                    <u1> { this.state.ridesData.map(dataRides => <li>{dataRides.name}</li>)} </u1>
                </div>
            )
        };
    }
    
    
    export default RidesDisplay;