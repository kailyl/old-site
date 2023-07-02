import Header from "./Header"
import "../style/About.css"

export default function About() { 
    return (
        <div> 
            <Header homeItalics="none" aboutItalics="italic"/>
            <div id="info">
                <p>
                    Kaily is a second year student at Penn studying Networked and Social Systems 
                    Engineering (NETS) and working as a research assistant at the Computational 
                    Social Science Lab. 
                </p>
                <p> 
                    She considers herself to be a playlist curator, movie watcher, and crossword enthusiast.
                </p>
                <p>
                    Contact her at <a href="mailto: kliu279@gmail.com" id="email">kliu279@gmail.com</a>. 
                </p>
                <div id="links"> 
                    <p id="else">Or elsewhere: {" "}</p>
                    <a href="https://github.com/kailyl" id="link">GitHub</a> 
                    <a href="https://open.spotify.com/user/kailyliu" id="link">Spotify</a> 
                    <a href="https://www.pinterest.com/kliu279/" id="link">Pinterest</a> 
                    <a href="https://drive.google.com/file/d/1K3XkbdYmXRrEOonSaXiwRtClsWtCY1M0/view" id="link">Resume</a> 
                    <a href="https://www.linkedin.com/in/kaily-liu/" id="link">LinkedIn</a> 
                </div>
            </div>
        </div>
    )
}
