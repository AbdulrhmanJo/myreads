import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../../styles/shelf.scss';
import BookCard from '../bookCard';
import SectionControl from '../Home/sectionControl';
import ShelfButton from './shelfButton';
import BookError from '../../icons/abstract-searching.png'



class Shelf extends Component {
    state = {
        catagory: 'All'
    }

    handleCatagoryChange = (choice) => {
        this.changeCatagoryState(choice);
        this.showBooksByCatagory(choice);
    }

    showBooksByCatagory = (choice) => {
        const books = this.props.books;
        const categoriesedBooks = []
        if(choice !== 'All'){
        books.map((book) => {
            let categories = book.categories;
            if(categories){                
                categories.map((catagory) => {
                    if(catagory.toLowerCase() === choice){                        
                        categoriesedBooks.push(book);
                    }
                })
            }
        })
            return categoriesedBooks;
        }else{
            return books;
        }
    }

    requestBook = async (event) => {
        const choice = event.target.value;
        this.handleUserChoice(choice);
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

    shelfCatagories = () =>{
        const cat = ['All'];
        const books = this.props.books;
        for (let index = 0; index < books.length; index++) {
            let catagories = books[index].categories;
            if(catagories){
                catagories.map((catagory) => {
                    if((cat.indexOf(catagory.toLowerCase()) === -1)){
                        cat.push(catagory.toLowerCase());
                    }
                });
            }
        }
        
        return cat;
    }

    changeCatagoryState(choice) {
        this.setState({
            catagory: choice,
        });
    }

    render(){
        return (
            <div className="shelf-container">
                <div className="shelf-top">
                    <SectionControl sectionName={this.props.shelfName} numOfbook={this.props.numOfBooks}/>
                    <div className="shelf-button">
                        <ShelfButton 
                            catagory={this.state.catagory} 
                            catagories={this.shelfCatagories()} 
                            handleButtonChoice={this.handleCatagoryChange} 
                        />
                    </div>
                </div>

                <div className="books-container shelf">
                    {

                        this.showBooksByCatagory(this.state.catagory).length > 0 ?
                        this.showBooksByCatagory(this.state.catagory).map((book) => (
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
                        ))
                        : <p className="shelf-empty">Shelf is Empty</p>
                    }
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    books:PropTypes.array.isRequired,
    updateBookShelf:PropTypes.func.isRequired,
    shelfName:PropTypes.string.isRequired,
    numOfBooks:PropTypes.number.isRequired,
}

export default Shelf;