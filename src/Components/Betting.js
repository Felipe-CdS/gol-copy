import React from 'react'
import img1 from '../Assets/betting.png'

function Betting(){
    return(
        <div className="container"> 
            <div className="row">
                <div className="col"><h4 class="highlight_title">Betting</h4></div> 
            </div>

            <br/>

            <div className="row pt-3">
                    <div className="container col-6">
                        <div className="row">
                            <h4 className="centered-text">Increase your gain with the team comparison tool, specially designed for betting.</h4>
                        </div>
                        <br/>   
                        <div className="row">
                            <p className="centered-text">Compare the most common stats used on betting website before placing your bet. </p>
                        </div>
                        <br/>
                        <div className="row justify-content-center">
                            <div className="btn btn-primary btn-primary table-btn">LEARN MORE</div>
                        </div>
                    </div> 

                    <div className="container col-6">
                        <img src={img1} width="550x301"/>
                    </div>   
            </div>
        </div>

    );
}

export default Betting