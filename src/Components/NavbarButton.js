import React from 'react'

function NavbarButton(props) {
    return(
        <li className="nav-item mr-sm-2">
            <a className="nav-link text-white" href={props.href}>{props.title}</a>
        </li>
    );  
}

export default NavbarButton