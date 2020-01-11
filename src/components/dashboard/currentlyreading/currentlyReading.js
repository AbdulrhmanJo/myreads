import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../../styles/dashboard.scss'
import SectionControl from '../sectionControl';
import BookList from './BookList'

class CurrentlyReading extends Component {

    render(){
        return(
            <div className="cr-container">
                <SectionControl shelf="current" sectionName='Currently reading' numOfbook={this.props.books.length}/>
                <BookList books={this.props.books} shelf='current'/>
            </div>
        )
    }
}

export default CurrentlyReading;