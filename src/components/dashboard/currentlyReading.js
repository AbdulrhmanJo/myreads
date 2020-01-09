import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'
import SectionControl from './sectionControl'

class CurrentlyReading extends Component {

    render(){
        return(
            <div className="cr-container">
                <SectionControl sectionName='Currently reading' numOfbook={4}/>
            </div>
        )
    }
}

export default CurrentlyReading;