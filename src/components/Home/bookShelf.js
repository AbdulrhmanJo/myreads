import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'
import SectionControl from './sectionControl';
import BookList from './BookList'

class BookShelf extends Component {
    shelfName = () => {
        const shelfName  = this.props.name;
        console.log(shelfName);
        
        if(shelfName === 'Currently reading'){
            return 'currentlyReading';
        }else if(shelfName === 'Want to read'){
            return 'wantToRead';
        }else{
            return 'read';
        }
    }

    render(){
        return(
            <div className={`${this.shelfName()}-container`}>
                <SectionControl shelf={this.shelfName()} sectionName={this.props.name} numOfbook={this.props.books.length}/>
                <BookList shelf={this.shelfName()} books={this.props.books}/>
            </div>
        )
    }
}

export default BookShelf;