import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard'

import '../styles/content.scss'


class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            books:[],
        }
    }
    render(){
        return(
            <div className="content">
            <Route  exact path='/' render ={() => (
                <Redirect to='/Dashboard'/>
            )} />

            <Route  path='/Dashboard' component={() => (
                <Dashboard/>
            )} />
            <Route  path='/Search' render ={() => {
                return(
                    <div>heloo search</div> 
                    )
            }} />

            <Route  path='/Currently-reading' render ={() => {
                return(
                    <div>heloo currently reading</div> 
                    )
            }} />

            <Route  path='/Want-To-Read' render ={() => {
                return(
                    <div>heloo want to read</div> 
                    )
            }} />

            <Route  path='/Read' render ={() => {
                return(
                    <div>heloo read</div> 
                    )
            }} />
            </div>

        );
    }
}

export default Content;