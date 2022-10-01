import meee from '../images/profile.jpg'
import Current from './Current';
import './Bio.css'
import Buttons from './Buttons';


export default function Bio() {
    const me = <a href="https://drive.google.com/file/d/189ZiDgT_uDu2T3uAv3kMaJAHGRjUqdfD/view?usp=sharing" className='link'>KAILY LIU</a>;
    const penn = <a href="https://www.upenn.edu/" className='link2'>penn</a>;
    const nets = <a href="https://www.nets.upenn.edu/long/nets-curriculum" className='link2'>networked and social systems engineering</a>;
    const math = <a href="https://www.math.upenn.edu/undergraduate/math-majors-and-minors/mathematics-minor" className='link2'>math</a>;

    return (
        <div>  
            <div className='bigMe'> 
            <img src={meee} className='mePicture' alt=''/>
            <div> 
                <div> 
                    <div className='aboot'> 
                        <h1 className='myName'> {me}</h1>
                        <p className='majors'> second year student at {penn} studying {nets} (aka. classes in cs, economics, and systems engineering).
                        minor in {math}.</p>
                    </div> 
                    <div className='iPt1'> 
                        <h1 
                            className='interests'>  </h1>
                        <Buttons /> 
                    </div>
                </div>    
            </div>
            </div>
            <div className='iPt2'> 
                <h1 className='interests'>  </h1>
                <Buttons />
            </div>
            <Current />
        </div> 
    )
}