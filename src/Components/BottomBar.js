import React from 'react'
import img1 from '../Assets/patreon_large.png'

function BottomBar(){
    return(
        <div className="container">
            <br/>
            <div className="row justify-content-center">
                <div className="col-7">
                    <p className="bottom-font-2 font-italic centered-text">
                        <a href="#" class="fab fa-twitter bottom-font-2"></a> &nbsp;
                        <a href="#" class="fab fa-facebook bottom-font-2"></a> &nbsp;
                        <a href="#" class="fab fa-instagram bottom-font-2"></a> &nbsp;
                        <a href="#" class="fab fa-patreon bottom-font-2"></a> &nbsp;
                        © 2020 Games Of Legends - Private Policy - Contributors</p>
                </div>
            </div>
            <div className="row">
                <p className="bottom-font-1 font-italic centered-text">Games Of Legends isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc. </p>
            </div>
        </div>

    );
}

export default BottomBar