import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/dashboard.scss';
import Rater from 'react-rater';
import Button from '../Button'

class BookCard extends Component {

    handleButtonChoice = (choice) => {
        this.props.handleBookChange(choice, this.props.id);
    }

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
                    ))}
                    </div>
                    <Rater className="card-info__rating" total={5} rating={this.props.avgRate} interactive={false}/>
                    <Button handleButtonChoice={this.handleButtonChoice}/>
                </div>
            </div>
        )
    }
}

export default BookCard;