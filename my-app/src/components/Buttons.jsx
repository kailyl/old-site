export default function Buttons() {

    return (
        <div className='lotsOfButtons'>
            <button 
                className='buttonz' 
                onClick={(e) => {
                e.preventDefault(); 
                window.location.href='https://drive.google.com/file/d/1faPBd3xzovX8ovZOxSzwqMLz8kpybN3C/view?usp=sharing';
                }}> resume </button>
            <button 
                className='buttonz'
                onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href='https://open.spotify.com/user/kailyliu';
                }}> spotify </button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                e.preventDefault(); 
                window.location.href='https://www.linkedin.com/in/kaily-liu/';
                }}> linkedin </button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href='mailto:kliu279@gmail.com';
                }}> email </button>
            <button 
                className='buttonz'
                onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href='https://www.pinterest.com/kliu279/';
                }}> pinterest </button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                e.preventDefault(); 
                window.location.href='https://github.com/kailyl';
                }}> github </button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href='https://www.imdb.com/list/ls565032369/';
                }}> imdb </button>
        </div>
    )

}