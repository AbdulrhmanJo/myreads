import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/dashboard.scss';


class Button extends Component {

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
                    <a onClick={this.handleChoice} name="Currently reading" >Currently reading</a>
                    <a onClick={this.handleChoice} name="Want to read" >Want to read</a>
                    <a onClick={this.handleChoice} name="Read">Read</a>
                    <a onClick={this.handleChoice} name="None">None</a>
                </div>
            </div>
        )
    }
}

export default Button;