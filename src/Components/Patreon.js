import React from 'react'
import img1 from '../Assets/patreon_large.png'

function Patreon(){
    return(
        <div className="container">   
            <div className="row">
                <div className="col"><h4 class="highlight_title">Patreon</h4></div> 
            </div>

            <div className="row pt-3"/>
                <div className="row  justify-content-end">
                    <div className="container col-1">
                        <img src={img1} className="rounded-circle"/>
                    </div>
                    <div className="container col-7">
                        <div className="row  justify-content-center">
                            <h4 className="centered-text">Support Games of Legends on Patreon</h4>
                        </div>
                        <br/>   
                        <div className="row  justify-content-center">
                            <div className="col-10">
                                <p className="centered-text">Hi, I'm <a className="embed-link" href="https://twitter.com/Bynjee/">Bynjee</a>, I'm a developper. I started Games of Legends in 2014 because I couldn't find these kind of stats.</p>
                                <p className="centered-text">You can support my work on <a className="embed-link" href="https://www.patreon.com/gamesoflegends">Patreon</a> and unlock exclusive features. </p>
                            </div>
                        </div>
                        <br/>
                        <div className="row justify-content-center">
                            <div className="btn btn-primary btn-primary table-btn">LEARN MORE</div>
                        </div>
                    </div>
            </div>
        </div>

    );
}

export default Patreon