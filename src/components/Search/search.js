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

    getBookShelf = (BookId) => {
        const booksOntheShelf = this.props.books;
        let shelf = '';
        for (let i = 0; i < booksOntheShelf.length; i++) {
            if(booksOntheShelf[i].shelf === 'wantToRead' && booksOntheShelf[i].id === BookId){
                shelf = 'Want to read';
                break;
            }else if(booksOntheShelf[i].shelf === 'currentlyReading' && booksOntheShelf[i].id === BookId){
                shelf = 'Currently reading';
                break;
            }else if(booksOntheShelf[i].shelf === 'read' && booksOntheShelf[i].id === BookId){
                shelf = 'read';
                break;
            }else{
                shelf = 'none';
            }
            
        }
            
        return shelf;
        // for (let i = 0; i < searchBooks.length; i++) {
        //     for (let j = 0; j < booksOntheShelf.length; j++) {
        //         if(booksOntheShelf[j].shelf === "wantToRead" && booksOntheShelf[j].id === searchBooks[i].id){
        //             console.log(booksOntheShelf[j]);
        //             return 'Want to read';
        //         }// }else if(booksOntheShelf[j].id === searchBooks[i].id && booksOntheShelf[j].shelf === "currentlyReading"){
        //         //     return 'Currently reading';
        //         // }else if(booksOntheShelf[j].id === searchBooks[i].id && booksOntheShelf[j].shelf === "read"){
        //         //     return 'read';
        //         // }else {
        //         //     return 'none'
        //         // }             
        //     }
            
        // }
    }

    // ChangeBookShelf = (shelf,bookId) => {
    //     this.props.updateBookShelf(shelf,bookId)
    // }

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
                        this.state.books.length > 0  && (this.state.books.map((book) => (                                                        
                            <BookCard
                            key={book.id} 
                            bookImg={book.imageLinks ? book.imageLinks.thumbnail : ''} 
                            bookName={book.title}
                            bookAuthor={book.authors ? book.authors : []}
                            avgRate={book.averageRating ? book.averageRating : 0}
                            shelf={this.getBookShelf(book.id)}
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