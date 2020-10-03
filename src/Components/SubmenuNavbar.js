import React from 'react'
import NavbarButton from './NavbarButton'

function SubmenuNavbar(){
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand mr-sm-3 text-white">Quick Access</span>
            <ul className="navbar-nav">
                <NavbarButton title="WORLDS" href="#"/>
                <NavbarButton title="LPL" href="#"/>
                <NavbarButton title="LEC" href="#"/>
                <NavbarButton title="LCK" href="#"/>
                <NavbarButton title="LCS" href="#"/>
                <NavbarButton title="CBLOL" href="#"/>
                <NavbarButton title="VCS" href="#"/>
                <NavbarButton title="PCS" href="#"/>
                <NavbarButton title="TCL" href="#"/>
                <NavbarButton title="OPL" href="#"/>
                <NavbarButton title="LJL" href="#"/>
                <NavbarButton title="LLA" href="#"/>
                <NavbarButton title="LCL" href="#"/>
            </ul>
            
        </div>
    );
}

export default SubmenuNavbar