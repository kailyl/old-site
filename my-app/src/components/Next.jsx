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
					<div> 
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
				<div> 
					{data.p2.join("").split('\\n').map (str => {
						return <p className='paragraphz'> {str} </p> 
					})}
				</div>
				<div className='images'>
					<img src={props.img1} alt="brainstorming document" />
					<img src={props.img2} alt="brainstorming document"/>
					<img src={props.img3} alt="brainstorming document"/>
				</div>
			</div>
			<button className='btnn' onClick={home}>
                BACK
            </button>
		</div>
	)
}

export default Next
