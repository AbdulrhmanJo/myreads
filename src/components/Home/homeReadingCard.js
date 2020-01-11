import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'
import BookCard from './bookCard';

class HomeReadingCard extends Component {

    render(){
        return(
            <div className="bookCards-container">
                <BookCard bookName={this.props.bookName} bookAuthor={this.props.bookAuthor} bookImg={this.props.bookImg} avgRate={this.props.avgRate}/>
            </div>
        )
    }
}

export default HomeReadingCard;