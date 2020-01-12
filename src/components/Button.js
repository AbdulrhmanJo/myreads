import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/dashboard.scss';


class Button extends Component {
    constructor(props){
        super(props);
        this.choices = ['Currently reading','Want to read','read','none'];
    }

    handleButtonClick = (event) =>{
        const button = event.target; 
        button.nextSibling.classList.toggle("show")              
    }

    handleChoice = (event) => {
        if(event.target.innerText !== this.props.shelf){
            this.props.handleButtonChoice(event.target.innerText);
        }
    }

    handleDropDownMenue = () => {
        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-button')) {
              var dropdowns = document.getElementsByClassName("dropdown-choices");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
        }
    }

    componentDidMount(){
        this.handleDropDownMenue()
    }
    

    render(){
        return(
            <div className="dropdown">
                <button className="dropdown-button" onClick={this.handleButtonClick}>{this.props.shelf}</button> 
                 <div className="dropdown-choices">
                     {this.choices.map((choice) => (
                         this.props.shelf === choice 
                         ? (<a onClick={this.handleChoice} className="choice-active">{choice}</a>)
                         : (<a onClick={this.handleChoice} >{choice}</a>)
                     ))}
        {/* <a onClick={this.handleChoice} >{this.props.shelf === 'Currently reading' ? ('Currently reading .'): 'Currently reading'}</a>
                    <a onClick={this.handleChoice} >Want to read</a>
                    <a onClick={this.handleChoice} >Read</a>
                    <a onClick={this.handleChoice} >None</a> */}
                </div>
            </div>
        )
    }
}

export default Button;