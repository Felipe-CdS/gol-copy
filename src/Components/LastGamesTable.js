import React from 'react'
import Table from 'react-bootstrap/Table'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import TableRow from './TableRow'


function LastGamesTable(){
    return(
        <div className="container">
                <div className="row">
                <div className="col"><h4>Last games</h4></div> 
                </div>
            <Table bordered size="sm">
                <thead className="table-head">
                    <tr>
                        <th>TOURNAMENT</th>
                        <th>DATE</th>
                        <th>GAME</th>
                        <th>BLUE SIDE</th>
                        <th>RED SIDE</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow tournament="LFL Summer Playoffs 2020" date="2020-10-01" game="GO vs GameWard"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>
                    <TableRow tournament="LFL Summer Playoffs 2020" date="2020-09-30" game="MSFP vs GameWard"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>
                    <TableRow tournament="World Championship Play-In 2020" date="2020-09-30" game="UOL vs SUP"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>
                    <TableRow tournament="World Championship Play-In 2020" date="2020-09-30" game="LGC vs LGD Gaming"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>
                    <TableRow tournament="LFL Summer Playoffs 2020" date="2020-09-29" game="GameWard vs LDLC OL"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>
                    <TableRow tournament="World Championship Play-In 2020" date="2020-09-29" game="SUP vs MAD Lions"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>    
                    <TableRow tournament="World Championship Play-In 2020" date="2020-09-29" game="Rainbow7 vs LGD Gaming"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>     
                    <TableRow tournament="LFL Summer Playoffs 2020" date="2020-09-28" game="IZI Dream vs LDLC OL"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>     
                    <TableRow tournament="World Championship Play-In 2020" date="2020-09-28" game="LGC vs Team Liquid"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>      
                    <TableRow tournament="World Championship Play-In 2020" date="2020-09-28" game="ITZ vs MAD Lions"
                            blueSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]} redSide={["Qiyana", "Akali", "Zoe", "Camille", "Lulu"]}/>    
                </tbody>
            </Table>
            <div className="row justify-content-end">
            <ToggleButtonGroup type="checkbox">
                <span className="btn btn-primary table-btn">{'<'}Previous 10 games</span>
                <span className="btn btn-primary table-btn">Next 10 games {'>'}</span>
            </ToggleButtonGroup>
            </div>
            
        </div>
    );
}

export default LastGamesTable