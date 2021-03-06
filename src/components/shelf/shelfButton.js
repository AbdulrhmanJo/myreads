import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/shelf.scss';


class ShelfButton extends Component {

    handleButtonClick = (event) =>{
        const button = event.target; 
        button.nextSibling.classList.toggle("show")              
    }

    handleChoice = (event) => {
        if(event.target.innerText !== this.props.shelf){
            this.props.handleButtonChoice(event.target.innerText);
        }
    }

    handleDropDownMenues = () => {
        window.onclick = function(event) {
            if (!event.target.matches('.shelf-dropdown-button') && !event.target.matches('.dropdown-button')) {
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
        document.addEventListener('click', this.handleDropDownMenues);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleDropDownMenues);
    }
    

    render(){
        return(
            <div className="shelf-dropdown">
                <button className="shelf-dropdown-button" onClick={this.handleButtonClick}>{this.props.catagory}</button> 
                 <div className="dropdown-choices">
                     {this.props.catagories.map((choice) => (
                         this.props.shelf === choice 
                         ? (<div key={choice} onClick={this.handleChoice} className="choice-active">{choice}</div>)
                         : (<div key={choice} onClick={this.handleChoice} >{choice}</div>)
                     ))}
                </div>
            </div>
        )
    }
}

ShelfButton.propTypes = {
    catagory:PropTypes.string.isRequired,
    catagories:PropTypes.array.isRequired,
    handleButtonChoice:PropTypes.func.isRequired,
}

export default ShelfButton;