import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './bookShelf';
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
                <BookShelf name='Currently reading' books={this.currentlyReadingBooks()} updateBookShelf={this.props.updateBookShelf}/>
                <BookShelf name='Want to read' books={this.wantToReadBooks()} updateBookShelf={this.props.updateBookShelf}/>
                <BookShelf name='read' books={this.readBooks()} updateBookShelf={this.props.updateBookShelf}/>
            </div>
            
        )
    }
}

export default Dashboard;