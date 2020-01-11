import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'
import SectionControl from './sectionControl';
import BookList from './BookList'

class BookShelf extends Component {
    shelfName = (choice) => {
        const shelfName  = choice === '' ? this.props.name : choice;
        console.log(shelfName);
        
        if(shelfName === 'Currently reading'){
            return 'currentlyReading';
        }else if(shelfName === 'Want to read'){
            return 'wantToRead';
        }else{
            return 'read';
        }
    }

    handleChangeBookShelf = (choice,bookId) =>{
        const shelf = this.shelfName(choice);
        this.props.ChangeBookShelf(shelf,bookId);
    }

    render(){
        return(
            <div className={`${this.shelfName('')}-container`}>
                <SectionControl shelf={this.shelfName('')} sectionName={this.props.name} numOfbook={this.props.books.length}/>
                <BookList handleChangeBookShelf={this.handleChangeBookShelf} shelf={this.shelfName('')} books={this.props.books}/>
            </div>
        )
    }
}

export default BookShelf;