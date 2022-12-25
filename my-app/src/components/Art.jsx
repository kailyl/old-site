import Header from './Header';
import "../style/Art.css"; 

import img1 from "../images/IMG_3781.jpeg"
import img2 from "../images/IMG_3826.jpeg"
import img3 from "../images/IMG_3859.jpeg"
import img4 from "../images/IMG_4096.jpeg"
import img5 from "../images/IMG_4207.jpeg"
import img6 from "../images/IMG_4226.jpeg"
import img7 from "../images/IMG_4322.jpeg"

export default function Homepage() {
    return (
        <div>
            <Header homeItalics="none" aboutItalics="none"/>
            <div id="infoDrawings">
                <div id="left">
                    <p> My drawings from FNAR 0010 (Intro to Drawing) - Fall 2022: </p>
                </div>
                <div id="allImages"> 
                    <div id="drawing"> 
                        <img src={img1} alt="still life" height="50%" width="50%"/>
                        <p id="description"> Still Life (9.19.2022) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img2} alt="staircase" height="50%" width="50%"/>
                        <p id="description"> Staircase (9.26.2022) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img3} alt="negative space" height="50%" width="50%"/>
                        <p id="description"> Experimenting with Negative Space (9.28.2022) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img4} alt="cast figure" height="50%" width="50%"/>
                        <p id="description"> Cast Figure in Graphite (11.9.2022) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img5} alt="long pose" height="50%" width="80%"/>
                        <p id="description"> 3 Day Long Pose (11.21.2022) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img6} alt="fabric study" height="50%" width="80%"/>
                        <p id="description"> Fabric Study (12.12.2022) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img7} alt="self portrait" height="50%" width="50%"/>
                        <p id="description"> Self Portrait (12.22.2022) </p>
                    </div>
                </div>
            </div>
        </div>
    );
}