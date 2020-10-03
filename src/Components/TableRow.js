import React from 'react'
import QiyanaIcon from '../Assets/icons/Qiyana.png'
import AkaliIcon from '../Assets/icons/Akali.png'
import ZoeIcon from '../Assets/icons/Zoe.png'
import CamilleIcon from '../Assets/icons/Camille.png'
import LuluIcon from '../Assets/icons/Lulu.png'

let bluePicks;
let redPicks;
let championIcons= new Map([
    ["Qiyana", QiyanaIcon],
    ["Akali", AkaliIcon],
    ["Zoe", ZoeIcon],
    ["Camille", CamilleIcon],
    ["Lulu", LuluIcon]
]);


function imageSearch(championName){
    return(championIcons.get(championName));
}

function randomNumber(){
    return(Math.floor(Math.random() * 5));
}


function TableRow(props){
    bluePicks = props.blueSide;
    redPicks = props.redSide;
    
    return(

        <tr>
            <td className="embed-link">{props.tournament}</td>
            <td>{props.date}</td>
            <td className="embed-link">{props.game}</td>
            <td><img src={imageSearch(props.blueSide[randomNumber()])} alt="" width="30x30"/>
                <img src={imageSearch(props.blueSide[randomNumber()])} alt="" width="30x30"/>
                <img src={imageSearch(props.blueSide[randomNumber()])} alt="" width="30x30"/>
                <img src={imageSearch(props.blueSide[randomNumber()])} alt="" width="30x30"/>
                <img src={imageSearch(props.blueSide[randomNumber()])} alt="" width="30x30"/></td>

            <td><img src={imageSearch(props.redSide[randomNumber()])} alt="" width="30x30"/>
                <img src={imageSearch(props.redSide[randomNumber()])} alt="" width="30x30"/>
                <img src={imageSearch(props.redSide[randomNumber()])} alt="" width="30x30"/>
                <img src={imageSearch(props.redSide[randomNumber()])} alt="" width="30x30"/>
                <img src={imageSearch(props.redSide[randomNumber()])} alt="" width="30x30"/></td>
        </tr>
    );
}

export default TableRow