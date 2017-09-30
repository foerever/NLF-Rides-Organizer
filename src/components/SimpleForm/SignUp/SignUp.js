import React, { Component, PropTypes } from 'react';
import './form.css'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){

        return (

            <div className="form">
                {/* <h1>New Life Rides Form</h1> */}
                <div id="form" className="_form">
                <form action="/submission" method="POST" name="addUser">
                    <fieldset>
                    <legend placeholder="Name">NAME</legend>
                    <input type="text" name="name" placeholder="your name here" />
                    </fieldset>

                    <fieldset>
                    <legend>Phone Number</legend>
                    <input type="text" name="phone_number" placeholder="###-###-####" />
                    </fieldset>

                    <fieldset>
                    <legend>House Church</legend>
                    <label className="input-select">
                        <select name="house_church">
                        <option selected="selected">- Select -</option>
                        <option value="tibet">Tibet</option>
                        <option value="palu">Palu</option>
                        <option value="oman">Oman</option>
                        </select>
                    </label>
                    </fieldset>

                    <fieldset>
                    <legend>Are you a driver?</legend>
                    <label className="input-check">
                        <input type="radio" name="driver" defaultValue="yes" /><span>Yes</span>
                    </label>
                    <label className="input-check">
                        <input type="radio" name="driver" defaultValue="no" /><span>No</span>
                    </label>
                    </fieldset>

                    <fieldset>
                    <legend>If you are a driver how many people can you drive?</legend>
                    <label className="input-select">
                        <select name="car_capacity">
                        <option selected="selected">- Select -</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>

                        </select>
                    </label>
                    </fieldset>

                    


                    <fieldset>
                    <legend>Location</legend>
                    <label className="input-check">
                        <input type="radio" name="location" defaultValue="North" /><span>North</span>
                    </label>
                    <label className="input-check">
                        <input type="radio" name="location" defaultValue="South" /><span>South</span>
                    </label>
                    <label className="input-check">
                        <input type="radio" name="location" defaultValue="OC" /><span>OC</span>
                    </label>
                    </fieldset>

                    
                    <fieldset>
                    <legend>Special Circumstances</legend>
                    <label className="input-check">
                        <input type="radio" name="special" defaultValue="no_time" /><span>I have to go back right after service</span>
                    </label>
                    <label className="input-check">
                        <input type="radio" name="special" defaultValue="event" /><span>I have to stay after for something</span>
                    </label>
                    <label className="input-check">
                        <input type="radio" name="special" defaultValue="chill" /><span>I'm chill with staying after for lunch and fun</span>
                    </label>
                    </fieldset>



                    <input type="submit" id="submit" name="submit" defaultValue="SUBMIT" />
                </form>
                </div>
            </div>

        );
    };

    componentDidMount() {         
        // listen for clicks on the more info option
        // var submit_button = document.getElementById('submit');
        
        // open the modal when the user wants information on a showcase
        // submit_button.addEventListener('click', function(){
        //     console.log(this.state);
        // });
                
                

    }



}


export default SignUp;
