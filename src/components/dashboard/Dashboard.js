import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentlyReading from './currentlyreading/currentlyReading';
import WantToRead from './wantToRead/wantToRead';
import Read from './read';


import '../../styles/dashboard.scss'

class Dashboard extends Component {

    currentlyReadingBooks = () => {
        return this.props.books.filter((book) => (book.shelf === "currentlyReading"))
    }
    readBooks = () => {
        return this.props.books.filter((book) => (book.shelf === "read"))
    }

    wantToReadBooks = () => {
        return this.props.books.filter((book) => (
            book.shelf === "wantToRead"
        ))
    }

    render(){
        return (
            <div className="db-container">
                <CurrentlyReading books={this.currentlyReadingBooks()}/>
                <WantToRead books={this.wantToReadBooks()}/>
                <Read books={this.readBooks()}/>
            </div>
            
        )
    }
}

export default Dashboard;