import React, { Component } from 'react';

import './wrapper.css'
class wrapper extends  Component {
    render(){
        return(
            <div className="wrapper">
            <a href="#" className="icon">
     <i className="fa fa-bars"  ></i></a>
     <nav >
     <ul className="menu-area">
   <li><a href="#"><strong> <label>Dashboard</label></strong></a>
      <ul>
          <li><a href="#"> <label>Default</label></a></li>
          <li><a href="#"><label>Content</label></a></li>
      </ul>
    </li>
   <li><a href="#"><strong ><label>About</label></strong></a></li>
   
 </ul>
 </nav>
</div>

       
       
        )}}
   export default wrapper  ;   

      