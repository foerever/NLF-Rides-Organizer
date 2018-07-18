import React, { Component, PropTypes } from 'react';



(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();

class RidesDisplay extends Component {
        constructor(props) {
            super(props);
            this.state = {
				currentTime : null,
				currentDay : null
            }
		}

        render() {
			var now = new Date();
			const currentDay = now.getDayName();
			const currentTime = now.getHours();



			if ((currentTime > 21 && currentDay == "Saturday") || currentDay == "Sunday") {
				return (
                    
					<div>
						<h1>RIDES</h1>
						<u1> { this.props.ridesProps.map(dataObject => <li>{dataObject.name}</li>)} </u1>
					</div>
				)
			} else {
				return (
					<div>
						<h2> Sorry rides are only displayed Saturday after 9 PM CST until Sunday 11:59 PM CST </h2>
					</div>
				)
			}


        };
    }
    
    
export default RidesDisplay;