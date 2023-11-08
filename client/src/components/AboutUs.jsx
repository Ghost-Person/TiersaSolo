import React from 'react';
import { Link } from 'react-router-dom';
import family_pic from '../imgs/family_pic.png'
import steve from '../imgs/steve.png'



const AboutUs = () => {


    return(
        <div className="wrapper6">
            <div>
                <h1 className="about-us">About Us</h1> 
                <h4>This is our story!</h4>
                <p>For over 35 years, Steve has been mastering his engraving craft. He is widely known in 
                    the U.S. and worldwide for his ability to turn metal into art by using vibrant colors, 
                    'shifting' effects, patterns, textures, dimension and precision. Some of our big projects 
                    include Deadpool 2, Jack Carr-author of The Terminal List, Czech Republic President, 
                    The Flash and Inglorious Basterds, Mick Strider Custom Knives, Dwyer Custom Goods, and John Wick blood markers.</p>
                <div>
                    <img className="steve" src={steve} alt=""/>
                </div>

                <p>We have also engraved for US Presidents, foreign Heads of State, Hollywood Elites, Tech Giants, professional athletes, 
                    NASA and international customers. In addition to the engraving, Steve also oversees our CNC division. He is 
                    mechanically inclined and always looking for ways to expand and improve our capabilities.</p>
                    
                <p>We take pride in building lasting friendships with our customers; in fact, we believe that is 
                    what sets us apart. Stop in and say "Hi" if you're ever in the area, we'd love to hear from you!
                    </p>
                    <h5>1413 Linda Vista Drive, 
                    Suite B, San Marcos, CA 92078
                    </h5>
                    <h5>760-591-3051</h5>
            </div>
            <div>
                <img className="family" src={family_pic} alt=""/>
            </div>
            <div className="main-links">
                <div><Link to={"/main"}>Home</Link></div>
            </div>
        </div>
        
    )
}

export default AboutUs;