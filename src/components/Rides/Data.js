import React from 'react';

const Data = () => {
    $.get('http://localhost:3000/users', function(data){
        return data  
    })
}

export default Data;