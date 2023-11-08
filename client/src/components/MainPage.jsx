import React from 'react';
import { Link } from 'react-router-dom';
import john_wick from '../imgs/john_wick.png'
import deadpool from '../imgs/deadpool.png'
import flash from '../imgs/flash.png'


const MainPage = () => {


    return(
        <div className="wrapper6">
            <div>
                <h1 className="title">Laser-Tronics</h1> 
                <h4>Not your average engraving shop!</h4>
                <Link to={"/about"}>About Us</Link> <br /> <Link to={"/"}>Reviews</Link>
            </div>
            <br />
            <div>
                <h6>Check out our John Wick Blood Markers,
                    and other official movie props we've worked on!
                </h6>
                <img className="john" src={john_wick} alt=""/>
            </div>
            <br />
            <div>
            <h6>
                Officially licensed Deadpool knives from Marvel Studios.
            </h6>
                <img className="deadpool" src={deadpool} alt=""/>
            </div>
            <br />
            <div>
            <h6>
                Officially licensed Flash and Batman projects from DC Studios.
            </h6>
                <img className="flash" src={flash} alt=""/>
            </div>
        </div>
        
    )
}

export default MainPage;