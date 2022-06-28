import React from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom"
import './Next.css'


function Next(props) {
	const history = useNavigate();
	const home = () => {
		history("/");
	}
	const data = props.val;	
	return (
		<div className='all'> 
			<h1 className='title'> {data.name} </h1>
			<div> 
				<div className='subtitle'> 
					<div className='otherPara'> 
						{data.p1.join("").split('\\n').map (str => {
							return <p className='paragraphz'> {str} </p> 
						})}
						<div> 
							{(data.hasOwnProperty('repo')) ? <p className='paragraphz'> Repository: <a href={data.repo} style={{color: 'orange'}}>{data.repo}</a> </p> : <></> }
						</div>
					</div>
					<h2 className='sidewayssTitle'> INTENT</h2>
					</div>
				</div>
			<div> 
				<h2 className='sTitle'> PROCESS </h2>
				<div className='para'> 
					{data.p2.join("").split('\\n').map (str => {
						return <p className='paragraphz'> {str} </p> 
					})}
				</div>
				{data.name === "Plotify" ? 
					<div className='plotify'> 
						<p className='paragraphz'>
						Our app is located at <a href="https://plotifyapp.github.io/" style={{color: 'black'}}>plotifyapp.github.io</a>, 
						but we are currently waiting for a quota extension from Spotify. Until then, please email me at {" "}
						 <a href="mailto: kliu279@gmail.com" style={{color: 'black'}}>kliu279@gmail.com</a> to be added to our list of users!
						</p>
					</div> 
				: null}
				<div className='images'>
					<img className="brainstorm" src={props.img1} alt="brainstorming document" />
					<img className="brainstorm" src={props.img2} alt="brainstorming document"/>
					<img className="brainstorm" src={props.img3} alt="brainstorming document"/>
				</div>
			</div>
			<button className='btnn' onClick={home}>
                BACK
            </button>
		</div>
	)
}

export default Next
