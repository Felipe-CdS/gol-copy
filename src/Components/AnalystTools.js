import React from 'react'
import img1 from '../Assets/analyst.png'

function AnalystTools(){
    return(
        <div className="container">   
            <div className="row">
                <div className="col"><h4 class="highlight_title">Analyst Tools</h4></div> 
            </div>

            <div className="row pt-3"/>
                <div className="row">
                    <div className="container col-5">
                        <img src={img1} width="550x301"/>
                    </div>
                    <div className="container col-6">
                        <div className="row">
                            <h4 className="centered-text">Learn from the best and improve your team performance.</h4>
                        </div>
                        <br/>   
                        <div className="row justify-content-center">
                            <p>Learn the meta and find champion synergy with this 3 analyst tools. </p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="btn btn-primary btn-primary table-btn">LEARN MORE</div>
                        </div>
                    </div>

                   
            </div>
        </div>

    );
}

export default AnalystTools