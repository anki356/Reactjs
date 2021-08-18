import React, { Component } from 'react';

import './searchbox.css'
class searchbox extends Component {
    render(){
        return(

            <div className="search-box" >
            <input type="text" className="search-text"></input>
            <a href="#" className="searchbutton">
           <i className="fa fa-search" ></i></a>
           
           </div>
           

)
        }
    }
export default searchbox;