import React from 'react'
import img1 from '../Assets/mediccasts.jpg'
import img2 from '../Assets/wickd.jpg'

function Quotes(){
    return(
        <div className="container">
            
            <div className="row pt-3"/>
            <div className="row">
                <div className="container col-2">
                    <img src={img1} className="rounded-circle" width="180x180"/>
                </div>
                <div className="container col-7">
                    <div className="row">
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <div className="row">
                        <p className="quote">Games of legends is the premier resource for me when I'm prepping 
                        for a cast. All the information you need is right at your fingertips.</p>
                        <a className="quote embed-link" href="https://twitter.com/MedicCasts/status/1176463080039092225">@MedicCasts </a>
                        <p className="quote"> - LEC caster</p>
                    </div>    
                </div>
            </div>

            <div className="row pt-3"/>
            
            <br/>
            <br/>
            <br/>

            <div className="row">
                <div className="container col-7">
                    <div className="row">
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <div className="row">
                            <p className="quote">Games of Legends is some of the best stats website for League of Legends.</p>
                            <a className="quote embed-link" href="https://twitter.com/Wickdlol/status/1182938013195788288">@Wickd </a>
                            <p className="quote"> - Content Creator / ex pro player</p>
                    </div>    
                </div>
                <div className="container col-4">
                    <img src={img2} className="rounded-circle" width="180x180"/>
                </div>
            </div>

        <br/>



        </div>

    );

}


export default Quotes