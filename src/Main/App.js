import React from 'react';
import './App.css';
import MenuNavbar from '../Components/MenuNavbar'
import SubmenuNavbar from '../Components/SubmenuNavbar'
import LastGamesTable from '../Components/LastGamesTable'
import Clipsbar from '../Components/Clipsbar'
import Quotes from '../Components/Quotes'
import AnalystTools from '../Components/AnalystTools';
import Betting from '../Components/Betting';
import BottomBar from '../Components/BottomBar';
import Patreon from '../Components/Patreon';


function App() {
  return (
    <div>
      <MenuNavbar/>
      <div className="container-fluid pt-5 text-white">
        <div className="row">
          <div className="col col-sm-6">
            <h4>Welcome to Games of Legends</h4>
            <p>View the stats of the best teams and players in the world!!</p>
          </div>
        </div>

        <div className="row pt-3 justify-content-center">
          <div className="container col-6">
            <div className="row">
              <div className="font-italic">
                <p>Search a team, a player or a champion: </p>
              </div>
              &nbsp;
              &nbsp;
            <form class="form-inline">
              <div class="md-form">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
              </div>
            </form>
            </div>
           
          </div>   
        </div>
      
        <div className="row pt-3"/>
      </div>
      
      <SubmenuNavbar/>

    <div className="container-fluid container-gradient pt-3 text-white">
      
      <LastGamesTable/>
      <br/>
    </div>

    <div className="container-fluid container-gradient pt-3 text-white">
      <div className="row">
        <div className="col-1"/>
        <div className="col"><h4>Recent Plays</h4></div> 
      </div>
      <Clipsbar/>
      <br/>
    </div>
       
    <div className="container-fluid container-gradient pt-3 text-white">
      <Quotes/>
      <br/>
    </div>

    <div className="container-fluid container-gradient pt-3 text-white">
      <AnalystTools/>
      <br/>
    </div>

    <div className="container-fluid container-gradient pt-3 text-white">
      <Betting/>
      <br/>
    </div>

    <div className="container-fluid pt-3 text-white">
      <Patreon/>
      <br/>
    </div>

    <div className="container-fluid container-gradient-2 pt-3 text-white">
      <BottomBar/>
      <br/>
    </div>

    </div> 
  );
}

export default App;
