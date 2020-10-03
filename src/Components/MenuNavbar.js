import React from 'react';
import NavbarButton from './NavbarButton';
import img1 from '../Assets/gol_tracker_mini.png';
import img2 from '../Assets/gol_esports.png';

function MenuNavbar(){
    return(
        <div>
            <nav className="navbar navbar-dark gradient-1">
                <a className="navbar-brand" href="#">
                    <img src={img1} alt=""/>
                </a>
                <img src={img2} alt=""/>
                <button type="button" className="btn btn-light">SIGN IN(LOG IN)</button>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <ul className="navbar-nav">
                    <NavbarButton title="Home" href="#"/>
                    <NavbarButton title="Tournaments" href="#"/>
                    <NavbarButton title="Teams" href="#"/>
                    <NavbarButton title="Players" href="#"/>
                    <NavbarButton title="Champions" href="#"/>
                    <NavbarButton title="Plays" href="#"/>
                    <NavbarButton title="Tools" href="#"/>
                    <NavbarButton title="Premium" href="#"/>
                </ul> 
                <form class="form-inline">
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </form>
            </nav>
        </div>
    );
}

export default MenuNavbar