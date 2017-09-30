import React from 'react';
import $ from 'jquery';


const Rides = () => {
    $.get('http://localhost:3000/users', function(data){
        console.log(data)
    })    

    return (
        <div>
            <h1>RIDES</h1>
            <p>Check the console for the data</p>
        </div>
    )

}

export default Rides;


