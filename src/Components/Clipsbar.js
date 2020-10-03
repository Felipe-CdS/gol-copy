import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import QiyanaIcon from '../Assets/icons/Qiyana.png'
import AkaliIcon from '../Assets/icons/Akali.png'
import ZoeIcon from '../Assets/icons/Zoe.png'

let video1 ={}

function Clipsbar(){
    return(
        <div className="container">

            <div className="row justify-content-between">
                    <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title><div class="embed-responsive embed-responsive-16by9">
                                <iframe width="286" height="180" src="https://www.youtube.com/embed/HnvWJehjYQA?controls=0"></iframe></div>
                            </Card.Title>
                            <Card.Text>
                                <div className="container">
                                    <div clasName="row">
                                        <h4 className="centered-text">SUP vs MAD Lions</h4>
                                        <p className="centered-text">World Championship Play-In 2020</p>
                                    </div>
                                    <br/>
                                    <div className="row justify-content-center">
                                        <img src={QiyanaIcon}/> &nbsp; &nbsp; &nbsp;
                                        <div className="row">
                                        <p className="centered-text">SnowFlower</p> 
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <p className="centered-text bottom-font-2">(0)</p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary">3+ man stun/ult</Badge>
                                    <Badge variant="secondary">Wombo Combo</Badge>
                                    <Badge variant="secondary">Team Fight</Badge>
                                    <br/>
                                    <div className="row justify-content-center">
                                    <a href="#" className="embed-link">Log in to rate this clip</a>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title><div class="embed-responsive embed-responsive-16by9">
                                <iframe width="286" height="180" src="https://www.youtube.com/embed/ZlKoeJ3xlx4?controls=0"></iframe></div>
                            </Card.Title>
                            <Card.Text>
                                <div className="container">
                                    <div clasName="row">
                                        <h4 className="centered-text">V3 Esports vs UOL</h4>
                                        <p className="centered-text">World Championship Play-In 2020</p>
                                    </div>
                                    <br/>
                                    <div className="row justify-content-center">
                                        <img src={AkaliIcon}/> &nbsp; &nbsp; &nbsp;
                                        <div className="row">
                                        <p className="centered-text">Nomanz</p> 
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <p className="centered-text bottom-font-2">(0)</p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary">Escape</Badge>
                                    <Badge variant="secondary">1 hp</Badge>
                                    <Badge variant="secondary">Mind game</Badge>
                                    <br/>
                                    <div className="row justify-content-center">
                                    <a href="#" className="embed-link">Log in to rate this clip</a>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title><div class="embed-responsive embed-responsive-16by9">
                                <iframe width="286" height="180" src="https://www.youtube.com/embed/I66oFXdf0KU?controls=0"></iframe></div>
                            </Card.Title>
                            <Card.Text>
                                <div className="container">
                                    <div clasName="row">
                                        <h4 className="centered-text">MAD Lions vs ITZ</h4>
                                        <p className="centered-text">World Championship Play-In 2020</p>
                                    </div>
                                    <br/>
                                    <div className="row justify-content-center">
                                        <img src={ZoeIcon}/> &nbsp; &nbsp; &nbsp;
                                        <div className="row">
                                        <p className="centered-text">Tay</p> 
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <span class="fa fa-star bottom-font-2"></span>
                                        <p className="centered-text bottom-font-2">(0)</p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary">Fail</Badge>
                                    <br/>
                                    <div className="row justify-content-center">
                                    <a href="#" className="embed-link">Log in to rate this clip</a>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </div>

        <div className="row pt-5 justify-content-end">
            <span className="btn btn-primary table-btn">WATCH MORE</span>
        </div>

        <br/>

    </div>
    );

}

export default Clipsbar