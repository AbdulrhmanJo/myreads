import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'

class CurrentlyReadingCard extends Component {

    render(){
        return(
            <div className="card-container">
                <div className="card-img">
                    <img src={this.props.bookImg} alt={this.props.bookName}></img>
                </div>
                <div className="card-info">
                    <p className="card-info__title">{this.props.bookName}</p>
                    <div className="card-info__author">{this.props.bookAuthor.map((author) => (
                       <p key={author}>{author}</p>  
                    ))}</div>
                </div>
            </div>
        )
    }
}

export default CurrentlyReadingCard;