import React, { Component } from 'react'
import '../styles/navigation.scss'
import Search from '../icons/search.svg'
import Dashboard from '../icons/dashboard.svg'
import book from '../icons/book-of-black-cover-closed.svg'
import { NavLink } from 'react-router-dom'
import menuIcon from '../icons/menu.svg'

class Navigation extends Component {
    constructor(props){
        super(props);
        this.discoverNavItem = [{name:'Home', img:Dashboard},{name:'Search', img:Search}];
        this.shelfNavItem = [{name:'Currently-reading', img:book},{name:'Want-to-read', img:book},{name:'Read', img:book}];
    }
    toggleMenuIcon = () =>{
        const sidenav = document.querySelector(".sidenav");
        sidenav.classList.toggle('showMenu')
    }

    handleMenue = () => {
        window.onclick = function(event) {
            if (!event.target.matches('.menuIcon')) {
                console.log(event.target.classList);
                
                var myDropdown = document.querySelector(".sidenav");
                  if (myDropdown.classList.contains('showMenu')) {
                    myDropdown.classList.remove('showMenu');
                  }
                }
        }
    }

    componentDidMount(){
        document.addEventListener('click', this.handleMenue);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleMenue);
    }

    render(){
        return(
            <div className="nav-container">
                <h2 className="heading">my<span>reads</span></h2>
                <img className="menuIcon" src={menuIcon} alt="menu icon" onClick={this.toggleMenuIcon}></img>
                <div className="sidenav">
                    <div className="sidenav-section">
                        <p>Discover</p>
                        {
                            this.discoverNavItem.map((item) => (
                                <NavLink 
                                    key={item.name} 
                                    exact to={item.name === "Home" ? '/'  : `/${item.name.toLowerCase()}`} 
                                    className="sidenav-item"
                                    activeClassName="sidenav-item__active"
                                    >
                                    <img className="sidenav-item-img" src={item.img} name={item.name} alt={item.name}></img>
                                    <span className="sidenav-item-text" name={item.name}>{item.name}</span>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className="sidenav-section">
                        <p>Bookshelf</p>
                        {
                            this.shelfNavItem.map((item) => (
                                <NavLink 
                                    key={item.name} 
                                    to={`/${item.name.toLowerCase()}`} 
                                    className="sidenav-item"
                                    activeClassName="sidenav-item__active"
                                    >
                                    <img className="sidenav-item-img" src={item.img} alt={item.name}></img>
                                    <span className="sidenav-item-text" href="#">{item.name.split('-').join(" ")}</span>
                                </NavLink>
                            ))
                        }
                    </div>          
                </div>
            </div>
        );
    }
    
}

export default Navigation;