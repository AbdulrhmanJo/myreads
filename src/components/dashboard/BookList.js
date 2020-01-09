import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'
import Swiper from 'swiper/js/swiper.esm.bundle';


class BookList extends Component {

    componentDidMount() {
        const self = this;
        const swiper = new Swiper('.swiper-container', 
            {
                slidesPerView: 4,
                spaceBetween: 10,
            });
      }

    render(){
        return (
            <div className="swiper-container">
            <div className="swiper-wrapper">
                {this.props.books.map((book) => (
                    <div key={book.id} className="swiper-slide">
                        <img src={book.imageLinks.smallThumbnail} alt={book.title} style={{borderRadius: '.4rem'}}></img>
                    </div>
                ))}
            </div>
          </div>
    
        )
    }
}

export default BookList;