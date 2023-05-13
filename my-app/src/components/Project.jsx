import "../style/Project.css"

export default function Project(props) {
    if (props.name === "Spotify Dashboard") {
        return (
            <div id="proj">
                <p id="time"> {props.time} </p>
                <div id="projName"> 
                    <a href={props.link} id="linkz">{props.name + "→"}</a> 
                    <p id="desc"> {props.descr} </p>
                    <p> 🎧{" "}
                        <a href={"https://kailys-spotify-dashboard.herokuapp.com/"} 
                            id="spotify-dashboard">check out my listening activity</a> 
                        {" "} 🤸🏼‍♀️
                    </p> 
                    <p id="tools"> {props.tools} </p>
                </div>
            </div>
        )
    } else {
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
}