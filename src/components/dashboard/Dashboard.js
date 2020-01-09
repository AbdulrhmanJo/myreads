import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentlyReading from './currentlyReading';
import WantToRead from './wantToRead';
import Read from './read';


import '../../styles/dashboard.scss'

class Dashboard extends Component {

    currentlyReadingBooks = () => {
        return this.props.books.filter((book) => (book.shelf === "wantToRead"))
    }

    render(){
        return (
            <div className="db-container">
                <CurrentlyReading books={this.props.books}/>
                <WantToRead />
                <Read />
            </div>
            
        )
    }
}

export default Dashboard;