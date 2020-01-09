import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'

class SectionControl extends Component {

    render(){
        return(
            <div className="control-section">
                <div className="control-section-text">
                    <h1>{this.props.sectionName}</h1>
                    <span className="control-section-text__books-num">{this.props.numOfbook}</span>
                </div>
                <div className="control-section-action">
                    <button>next</button>
                    <button>back</button>
                </div>
            </div>
        )
    }
}

SectionControl.propTypes = {
    sectionName:PropTypes.string.isRequired,
    numOfbook:PropTypes.number.isRequired,
}

export default SectionControl;