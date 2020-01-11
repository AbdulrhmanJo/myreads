import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SectionControl from './sectionControl';
import BookList from '../dashboard/currentlyreading/BookList';
import '../../styles/dashboard.scss'

class Read extends Component {

    render(){
        return(
            <div className="r-container">
                <SectionControl shelf='r' sectionName='Read' numOfbook={this.props.books.length}/>
                <BookList books={this.props.books} shelf="r"/>
            </div>
        )
    }
}

export default Read;