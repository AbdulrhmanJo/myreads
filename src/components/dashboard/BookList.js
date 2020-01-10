import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'
import Swiper from 'swiper/js/swiper.esm.bundle';
import CurrenltyReadingCard from './currentlyReadingCard';


class BookList extends Component {

    componentDidMount() {
        const swiper = new Swiper('.swiper-container', 
            {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerView: 'auto',

                navigation: {
                    nextEl: '.control-section-action__next',
                    prevEl: '.control-section-action__back',
                  },
            });
      }

    render(){
        return (
            <div className="swiper-container">
            <div className="swiper-wrapper">
                {this.props.books.map((book) => (
                    <div key={book.id} className="swiper-slide">
                        <CurrenltyReadingCard bookName={book.title} bookAuthor={book.authors} bookImg={book.imageLinks.thumbnail} avgRate={book.averageRating}/>
                    </div>
                ))}
            </div>
          </div>
    
        )
    }
}

export default BookList;