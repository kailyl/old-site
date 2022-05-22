import meee from '../images/profile.jpg'
import Current from './Current';
import './Bio.css'
import { useState } from 'react';
import PopUp from './PopUp'

export default function Bio() {
    const me = <a href="https://drive.google.com/file/d/1_BKkKQB3OcCE2bu-_oU97R5iQ7ZHcC0I/view?usp=sharing" className='link'>KAILY LIU</a>;
    const penn = <a href="https://www.upenn.edu/" className='link2'>penn</a>;
    const cs = <a href="https://www.cis.upenn.edu/undergraduate/program-offerings/computer-science-bse/" className='link2'>computer science</a>;
    const econ = <a href="https://economics.sas.upenn.edu/undergraduate" className='link2'>economics</a>;
    const eent = <a href="https://eent.seas.upenn.edu/undergraduate-minor/" className='link2'>engineering entrepreneurship</a>;
    const math = <a href="https://www.math.upenn.edu/undergraduate/math-majors-and-minors/mathematics-minor" className='link2'>math</a>;

    const[hover, setHover] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [title, setTitle] = useState("");
 
    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    const setTitleAndVisibility = (text) => {
        setVisibility(!visibility); 
        setTitle(text);
    }

    return (
        <div>  
            <div className='bigMe'> 
            <img src={meee} className='mePicture' alt=''/>
            <PopUp
                onClose={popupCloseHandler}
                show={visibility}
                title={title}
            >
            </PopUp>
            <div> 
                <div> 
                    <div className='aboot'> 
                        <h1 className='myName'> {me}</h1>
                        <p className='majors'> second year student at {penn} studying {cs} and {econ}. 
                        minors in {eent} and {math}.</p>
                    </div>
                    <div className='iPt1'> 
                        <h1 
                            className='interests' 
                            onMouseEnter={() =>setHover(true)} 
                            onMouseLeave={() => setHover(false)}> {hover ? "click for links and cool things" : "interests"} </h1>
                        <div className='lotsOfButtons'> 
                            <button className='buttonz' onClick={(e) => setTitleAndVisibility("it's basically my major :)")}> technology </button>
                            <button 
                                className='buttonz' 
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    window.location.href='https://www.linkedin.com/in/kaily-liu/';
                            }}> entrepreneurship </button>
                            <button className='buttonz' onClick={(e) => setTitleAndVisibility("go-to order: thai milk tea with boba, full sugar (avid supporter!), less ice")}> boba tea </button>
                            <button className='buttonz' onClick={(e) => setTitleAndVisibility("proud camper at Camp Invention from 2nd to 5th grade")}> product development </button>
                            <button 
                                className='buttonz' 
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    window.location.href='https://github.com/kailyl';
                            }}> software </button>
                            <button 
                                className='buttonz' 
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    window.location.href='https://www.imdb.com/list/ls565032369/';
                            }}> watching movies </button>
                            <button className='buttonz' onClick={(e) => setTitleAndVisibility("Intro to Computer Science and Stock Market Game teacher for campers at International Ivy Camps")}> STEM education </button>
                            <button className='buttonz' onClick={(e) => setTitleAndVisibility("part-time jigsaw puzzle solver ")}> problem solving </button>
                            <button className='buttonz' onClick={(e) => setTitleAndVisibility("staunch supporter of pho and ramen")}> noodles </button>
                            <button className='buttonz' onClick={(e) => setTitleAndVisibility("GEAR committee member in Society of Women Engineers, FemmeHacks committee in Women in Computer Science")}> advocating for women in STEM </button>
                            <button 
                                className='buttonz'
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    window.location.href='https://open.spotify.com/user/kailyliu';
                            }}> music </button>
                            <button 
                                className='buttonz' 
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    window.location.href='mailto:kliu279@gmail.com';
                            }}> communication </button>
                        </div>
                    </div>
                </div>    
            </div>
            </div>
            <div className='iPt2'> 
                <h1 className='interests'> my interests </h1>
                <div className='lotsOfButtons'> 
                    <button className='buttonz'> technology </button>
                    <button 
                        className='buttonz' 
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href='https://www.linkedin.com/in/kaily-liu/';
                    }}> entrepreneurship </button>
                    <button className='buttonz'> product development </button>
                    <button className='buttonz'> boba tea </button>
                    <button 
                        className='buttonz' 
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href='https://github.com/kailyl';
                    }}> software </button>
                    <button className='buttonz'> advocating for women in STEM </button>
                    <button className='buttonz'> watching movies </button>
                    <button className='buttonz'> STEM education </button>
                    <button className='buttonz'> knitting and crocheting </button>
                    <button className='buttonz'> problem solving </button>
                    <button className='buttonz'> noodles </button>
                    <button 
                        className='buttonz' 
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href='mailto:kliu279@gmail.com';
                    }}> communication </button>
                </div>
            </div>
            <Current />
        </div> 
    )
}