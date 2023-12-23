import Header from './Header';
import "../style/Art.css"; 

import img3 from "../images/0010-PortfolioTemplate3.png"
import img4 from "../images/0010-PortfolioTemplate4.png"
import img6 from "../images/0010-PortfolioTemplate6.png"
import img8 from "../images/0010-PortfolioTemplate8.png"
import img11 from "../images/0010-PortfolioTemplate11.png"

export default function Design() {
    return (
        <div>
            <Header homeItalics="none" aboutItalics="none"/>
            <div id="infoDrawings">
                <div id="left">
                    <p id="desc-art"> Parts of my final portfolio from DSGN 0010 (Art, Design, and Digital Culture) - Fall 2023 </p>
                </div>
                <div id="allImages"> 
                    <div id="drawing"> 
                        <img src={img3} alt="sound analysis - initial" height="80%" width="80%"/>
                        <p id="description"> Sound Analysis Studies (9.19.2023) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img4} alt="sound analysis - final " height="80%" width="80%"/>
                        <p id="description"> Sound Analysis Final (9.19.2023) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img6} alt="object icons" height="80%" width="80%"/>
                        <p id="description"> Object Icons (10.5.2023) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img8} alt="dada composite" height="80%" width="80%"/>
                        <p id="description"> Dada Composite (10.29.2023) </p>
                    </div>
                    <div id="drawing"> 
                        <img src={img11} alt="desktop portrait" height="80%" width="80%"/>
                        <p id="description"> Desktop Portrait (11.21.2023) </p>
                    </div>
                </div>
            </div>
        </div>
    );
}