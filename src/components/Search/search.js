import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../../styles/search.scss';
import searchIcon from '../../icons/search.svg';
import * as BookAPI from '../../utils/BooksAPI';
import BookCard from '../Home/bookCard';

class Search extends Component {
    state = {
        query:'',
        books:[],
        requestError:false,
    }

    handleUserInput = (query) => {
        this.setState({query: query});
    }

    getBooks = async (query) => {
        const response = await BookAPI.search(query);
        return response;
    }

    changeBookState = (books , requestState) => {
        this.setState({ 
            books: books,
            requestError: requestState,
        })
    }

    requestBook = async (event) => {
        const query = event.target.value;
        this.handleUserInput(query);

        if(query){
            const response = await this.getBooks(query);
            if(response.error){
                this.changeBookState([], true);
            }else{
                this.changeBookState(response, false);
            }
            console.log(response);
        }else{
            this.changeBookState([], false);
        }
    }

    render(){
        return (
            <div className="search-container">
                <div className="search-bar-container">
                    <input className="search-bar"
                    type="text" placeholder="Search"
                    value={this.state.query}
                    onChange={this.requestBook}
                    />
                    <img src={searchIcon} alt="search icon" className="search-bar-icon"></img>
                </div>
                <p>{this.state.query}</p>
                <div className="books-container">
                    {
                        this.state.books && (this.state.books.map((book) => (                                                        
                            <BookCard
                            key={book.id} 
                            bookImg={book.imageLinks.thumbnail} 
                            bookName={book.title}
                            bookAuthor={book.authors}
                            avgRate={book.averageRating ? book.averageRating : 5}
                            />
                        )))
                        
                    }
                    {/* <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div>
                    <div className="book" >book</div> */}
                </div>
               
            </div>
        )
    }
}

export default Search;