import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../../styles/search.scss';
import searchIcon from '../../icons/search.svg';
import * as BookAPI from '../../utils/BooksAPI';
import BookCard from '../bookCard';
import searchImg from '../../icons/clip-education.png';
import searchError from '../../icons/clip-bad-gateaway.png';
import BookError from '../../icons/abstract-searching.png'


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
        if(this.state.query){
            this.setState({ 
                books: books,
                requestError: requestState,
            })
        }
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

    handleBookChange = (choice,bookId) => {
        let shelf = '';
        if(choice === 'Currently reading'){
            shelf = 'currentlyReading'
        }else if(choice === 'Want to read'){
            shelf = 'wantToRead'
        }else if(choice === 'read'){
            shelf = 'read'
        }else {
            shelf = 'none'
        }
        this.props.updateBookShelf(shelf,bookId)
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
                {
                    !this.state.query && (
                                        <div>
                                            <img src={searchImg} alt='searchImg' className="search-Img"></img>
                                            <p>Meet your next <span>Book</span> </p>
                                        </div>)
                }
                
                {
                    !this.state.requestError ?
                        <div className="books-container">
                            {
                                
                                this.state.query && (this.state.books.map((book) => (                                                        
                                    <BookCard
                                    key={book.id}
                                    id={book.id}  
                                    bookImg={book.imageLinks ? book.imageLinks.thumbnail : BookError} 
                                    bookName={book.title}
                                    bookAuthor={book.authors ? book.authors : ['author: not available']}
                                    avgRate={book.averageRating ? book.averageRating : 0}
                                    shelf={this.getBookShelf(book.id)}
                                    handleBookChange={this.handleBookChange}
                                    />
                                ))) 
                            }
                        </div>
                    :   (<div>
                            <img src={searchError} alt='searchError' className="search-Error"></img>
                            <p>Sorry we couldn't find any matches for <span>{this.state.query}</span></p>
                        </div>
                        )

                }
            </div>
        )
    }
}

Search.propTypes = {
    books:PropTypes.array.isRequired,
    updateBookShelf:PropTypes.func.isRequired
}


export default Search;