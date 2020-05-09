import React from 'react'
import './Menu.css'

class Menu extends React.Component{
    render (){
        return(
            <div className="menu-btn">

<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    

    <span></span>
    <span></span>
    <span></span>
    

    <ul id="menu">
    </ul>
  </div>
</nav>
            </div>
            )
    }
}

export default Menu