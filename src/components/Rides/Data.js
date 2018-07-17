import React from 'react';
import $ from 'jquery';
import axios from 'axios';

const Data = () => {
    // $.get('http://localhost:3000/users', function(data) {
    //     console.log("the data is " + data);
    //     return data  
    // })

    return axios.get('http://localhost:3000/users')
        .then(function(data) {
            console.log(data.data[0].name);
        })
        .catch(function(error) {
            console.log("error")
        });
}

export default Data;