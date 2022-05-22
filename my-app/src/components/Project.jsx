import './Project.css'
import { useNavigate } from "react-router-dom";

export default function Project(props) {
    const data = props.val;
    const history = useNavigate();
    const nextPage = () => {
        history(data.path)
    }

    return (
        <div className='projectDescr'> 
            <h1 className='name'> {data.name} </h1>
            <h2 className='class'> {data.class} </h2>
            <p className='descr'> {data.descr} </p>
            <img src={props.img} className='picture' alt=''></img>
            <div className='bottom'> 
                <p className='language'> {data.lang} </p>
                <button className='buttonn' onClick={nextPage}> MORE </button>
            </div>
        </div>
    )
    
}