import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Home/Dashboard';
import * as BooksAPI from '../utils/BooksAPI';
import HomeLoader from './Home/homeLoader';
import Search from './Search/search'
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
                    <Search />
                )} />

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