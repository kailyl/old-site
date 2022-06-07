import meee from '../images/profile.jpg'
import Current from './Current';
import './Bio.css'
import { useState } from 'react';
import Buttons from './Buttons';


export default function Bio() {
    const me = <a href="https://drive.google.com/file/d/1_BKkKQB3OcCE2bu-_oU97R5iQ7ZHcC0I/view?usp=sharing" className='link'>KAILY LIU</a>;
    const penn = <a href="https://www.upenn.edu/" className='link2'>penn</a>;
    const cs = <a href="https://www.cis.upenn.edu/undergraduate/program-offerings/computer-science-bse/" className='link2'>computer science</a>;
    const econ = <a href="https://economics.sas.upenn.edu/undergraduate" className='link2'>economics</a>;
    const eent = <a href="https://eent.seas.upenn.edu/undergraduate-minor/" className='link2'>engineering entrepreneurship</a>;
    const math = <a href="https://www.math.upenn.edu/undergraduate/math-majors-and-minors/mathematics-minor" className='link2'>math</a>;

    const[hover, setHover] = useState(false);

    return (
        <div>  
            <div className='bigMe'> 
            <img src={meee} className='mePicture' alt=''/>
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
                        <Buttons /> 
                    </div>
                </div>    
            </div>
            </div>
            <div className='iPt2'> 
                <h1 className='interests'> my interests </h1>
                <Buttons />
            </div>
            <Current />
        </div> 
    )
}