import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../../styles/dashboard.scss'
import SectionControl from '../sectionControl';
import BookList from '../currentlyreading/BookList';



class WantToRead extends Component {

    render(){
        return(
            <div className="wtr-container">
                <SectionControl shelf='wantTo' sectionName='Want to read' numOfbook={this.props.books.length}/>
                <BookList books={this.props.books} shelf="wantTo"/>
            </div>
        )
    }
}

export default WantToRead;