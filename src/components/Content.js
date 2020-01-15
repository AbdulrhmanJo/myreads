import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Home/Dashboard';
import * as BooksAPI from '../utils/BooksAPI';
import HomeLoader from './Home/homeLoader';
import Search from './Search/search'
import Shelf from './shelf/shelf';
import '../styles/content.scss'



class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            books:[],
            hasContent:false,
        }
    }

    componentDidMount(){
       this.getAllBooks()   
    }

    getAllBooks = () => {
        BooksAPI.getAll()
        .then((books) => {
            this.setState({
                books:[...books],
                hasContent:true,
            })
            console.log(books);
            
        }) 
    }

    getBook = async (bookId) => {
       const response = await BooksAPI.get(bookId);
       return response;
    }

    updateBook = (book,shelf) => {
        BooksAPI.update(book, shelf)
        .then(() => {
            this.getAllBooks();
        })
    }

    updateBookShelf = async (shelf , bookId) => {
        const book = await this.getBook(bookId);        
        this.updateBook(book,shelf);
    }
    
    getShelfBooks = (shelf) => {
        return this.state.books.filter(book => (
            book.shelf === shelf
        ))
    }

    render(){        
        return(
            <div className="content">
                <Route  exact path='/' render ={() => (
                    <Redirect to='/Dashboard'/>
                )} />
                
                <Route  path='/Dashboard' render={() => (
                    <div>
                        {this.state.hasContent ? (
                            <Dashboard books={this.state.books} updateBookShelf={this.updateBookShelf}/>
                        ):(
                            <HomeLoader />
                        )}
                    </div>
                )} />

                <Route  path='/Search' render ={() => (
                    <Search books={this.state.books} updateBookShelf={this.updateBookShelf}/>
                )} />

                <Route  path='/Currently-reading' render ={() => (
                    <Shelf 
                        shelfName='Currently reading' 
                        numOfBooks={this.getShelfBooks('currentlyReading').length}
                        books={this.getShelfBooks('currentlyReading')}
                        updateBookShelf={this.updateBookShelf}
                    />
                )} />

                <Route  path='/Want-To-Read' render ={() => (
                    <Shelf 
                    shelfName='Want to read' 
                    numOfBooks={this.getShelfBooks('wantToRead').length}
                    books={this.getShelfBooks('wantToRead')}
                    updateBookShelf={this.updateBookShelf}
                    />
                )} />

                <Route  path='/Read' render ={() => (
                    <Shelf 
                    shelfName='Read' 
                    numOfBooks={this.getShelfBooks('read').length}
                    books={this.getShelfBooks('read')}
                    updateBookShelf={this.updateBookShelf}
                    />
                )} />
            </div>

        );
    }
}

export default Content;