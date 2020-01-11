import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../../styles/dashboard.scss'
import Rater from 'react-rater'
import BookCard from './bookCard';

class CurrentlyReadingCard extends Component {

    render(){
        return(
            <div className="CurrentlyReadingCard-container">
                <BookCard bookName={this.props.bookName} bookAuthor={this.props.bookAuthor} bookImg={this.props.bookImg} avgRate={this.props.avgRate}/>
            </div>
        )
    }
}

export default CurrentlyReadingCard;