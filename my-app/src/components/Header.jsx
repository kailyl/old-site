import { useState } from 'react'
import '../style/Header.css'

export default function Header(props) { 
    const [date, setDate] = useState(new Date())
    const [timer, setTimer] = useState("");
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(true)
        setDate(new Date())
        setTimer(setInterval(()=>setDate(new Date()), 1000))
    }

    const onLeave = () => {
        setHover(false)
        clearInterval(timer)
    }

    return (
        <div> 
            <p id="name" onClick={function() {window.location.href='/'}} style={{fontStyle: props.homeItalics}}>Kaily Liu</p>
            <p onMouseEnter={onHover} onMouseLeave={onLeave} id="date">{hover ? date.toLocaleTimeString() : date.toLocaleDateString().replaceAll("/", ".")}</p>
            <button id="about" onClick={function() {window.location.href='/about'}} style={{fontStyle: props.aboutItalics}}>About</button>
        </div>
    )
}
