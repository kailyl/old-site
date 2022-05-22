import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Buttons() {

    const notify = (text) => toast(text);

    return (
        <div className='lotsOfButtons'>
            <ToastContainer hideProgressBar={true} />
            <button className='buttonz' onClick={(e) => notify('#robots #internet #computers #wheels')}>technology</button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                e.preventDefault(); 
                window.location.href='https://www.linkedin.com/in/kaily-liu/';
                }}> entrepreneurship </button>
            <button className='buttonz' onClick={(e) => notify('go to order: thai tea with boba, full sugar :)), less ice')}> boba tea </button>
            <button className='buttonz' onClick={(e) => notify('avid Camp Invention camper from 2nd to 5th grade')}> product development </button>
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
            <button className='buttonz' onClick={(e) => notify('International Ivy Instructor for Introduction to Computer Science and Business')}> STEM education </button>
            <button className='buttonz' onClick={(e) => notify('ardent jigsaw puzzle solver')}> problem solving </button>
            <button className='buttonz' onClick={(e) => notify('pho <3 ramen <3 lo mein <3')}> noodles </button>
            <button className='buttonz' onClick={(e) => notify('Society of Women Engineers - GEARS Day Committee & Women in Computer Science - FemmeHacks Sponsorship')}> advocating for women in STEM </button>
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
    )

}