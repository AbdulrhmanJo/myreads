import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './bookShelf';
import '../../styles/dashboard.scss'

class Home extends Component {

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
    ChangeBookShelf = (shelf,bookId) => {
        this.props.updateBookShelf(shelf,bookId)
    }

    render(){
        return (
            <div className="db-container">
                <BookShelf name='Currently reading' books={this.currentlyReadingBooks()} ChangeBookShelf={this.ChangeBookShelf}/>
                <BookShelf name='Want to read' books={this.wantToReadBooks()} ChangeBookShelf={this.ChangeBookShelf}/>
                <BookShelf name='read' books={this.readBooks()} ChangeBookShelf={this.ChangeBookShelf}/>
            </div>
            
        )
    }
}

Home.propTypes = {
    books:PropTypes.array.isRequired,
    updateBookShelf:PropTypes.func.isRequired
}

export default Home;