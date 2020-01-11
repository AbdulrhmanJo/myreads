import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Home/Dashboard'
import * as BooksAPI from '../utils/BooksAPI'

import '../styles/content.scss'


class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            books:[],
        }
    }

    componentDidMount(){
       this.getAllBooks()   
    }

    getAllBooks = () => {
        BooksAPI.getAll()
        .then((books) => {
            console.log(books);
            this.setState({
                books:[...books],
            })
        }) 
    }
    getBook = async (bookId) => {
       const response = await BooksAPI.get(bookId);
       return response;
    }

    convertMultiArrayToOneArray = (multiArray) => {
        const { currentlyReading, wantToRead, read } = multiArray;
        return [...currentlyReading];
    }

     updateBookShelf = async (shelf , bookId) => {
        const book = await this.getBook(bookId);
        console.log(book);
        
        BooksAPI.update(book, shelf)
        .then(() => {
            this.getAllBooks();
        })
    }

    render(){        
        return(
            <div className="content">
            <Route  exact path='/' render ={() => (
                <Redirect to='/Dashboard'/>
            )} />

            <Route  path='/Dashboard' component={() => (
                <Dashboard books={this.state.books} updateBookShelf={this.updateBookShelf}/>
            )} />

            <Route  path='/Search' render ={() => {
                return(
                    <div>heloo search</div> 
                    )
            }} />

            <Route  path='/Currently-reading' render ={() => {
                return(
                    <div>heloo currently reading</div> 
                    )
            }} />

            <Route  path='/Want-To-Read' render ={() => {
                return(
                    <div>heloo want to read</div> 
                    )
            }} />

            <Route  path='/Read' render ={() => {
                return(
                    <div>heloo read</div> 
                    )
            }} />
            </div>

        );
    }
}

export default Content;