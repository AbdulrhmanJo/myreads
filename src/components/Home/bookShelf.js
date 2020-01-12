import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'
import SectionControl from './sectionControl';
import BookList from './BookList'

class BookShelf extends Component {
    shelfName = (choice) => {
        const shelfName  = choice === '' ? this.props.name : choice;
                
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
                {this.props.books.length > 0 
                    ?   (<BookList 
                            handleChangeBookShelf={this.handleChangeBookShelf} 
                            shelf={this.shelfName('')} 
                            sectionName={this.props.name} 
                            books={this.props.books}/>)
                    :   (<p className="empty-message">{`Shelf is Empty`}</p>)
                }
            </div>
        )
    }
}

export default BookShelf;