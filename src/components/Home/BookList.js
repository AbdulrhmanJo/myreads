import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper/js/swiper.esm.bundle';
import BookCard from '../bookCard';



class BookList extends Component {

    componentDidMount() {
        new Swiper(`.${this.props.shelf}-swiper-container`, 
            {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerView: 'auto',

                navigation: {
                    nextEl: `.control-section-action__next--${this.props.shelf}`,
                    prevEl: `.control-section-action__back--${this.props.shelf}`,
                  },
            });
    }

    handleBookChange = (choice, bookID) => {
        this.props.handleChangeBookShelf(choice, bookID);
    }

    render(){
        return (
            <div className={`${this.props.shelf}-swiper-container`}>
            <div className="swiper-wrapper">
                {this.props.books.map((book) => (
                    <div key={book.id} className="swiper-slide">
                        <div key={book.id} className="bookCard-container">
                            <BookCard 
                                handleBookChange={this.handleBookChange} 
                                id={book.id} 
                                bookName={book.title} 
                                bookAuthor={book.authors} 
                                bookImg={book.imageLinks.thumbnail} 
                                avgRate={book.averageRating} 
                                shelf={this.props.sectionName}
                            />
                        </div>
                    </div>
                ))}
            </div>
          </div>
    
        )
    }
}


BookList.propTypes = {
    shelf:PropTypes.string.isRequired,
    books:PropTypes.array.isRequired,
    handleChangeBookShelf:PropTypes.func.isRequired,
    sectionName:PropTypes.string.isRequired,
}

export default BookList;