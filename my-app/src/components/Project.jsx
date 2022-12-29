import "../style/Project.css"

export default function Project(props) {
    return (
        <div id="proj">
            <p id="time"> {props.time} </p>
            <div id="projName"> 
                <a href={props.link} id="linkz">{props.name + "→"}</a> 
                <p id="desc"> {props.descr} </p>
                <p id="tools"> {props.tools} </p>
            </div>
        </div>
    )
}