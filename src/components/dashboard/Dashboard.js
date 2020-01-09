import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentlyReading from './currentlyReading';
import WantToRead from './wantToRead';
import Read from './read';


import '../../styles/dashboard.scss'

class Dashboard extends Component {
    render(){
        return (
            <div className="db-container">
                <CurrentlyReading />
                <WantToRead />
                <Read />
            </div>
            
        )
    }
}

export default Dashboard;