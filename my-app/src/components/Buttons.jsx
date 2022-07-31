export default function Buttons() {

    return (
        <div className='lotsOfButtons'>
            <button 
                className='buttonz' 
                onClick={(e) => {
                e.preventDefault(); 
                window.location.href='https://drive.google.com/file/d/1faPBd3xzovX8ovZOxSzwqMLz8kpybN3C/view?usp=sharing';
                }}> resume &#128221;</button>
            <button 
                className='buttonz'
                onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href='https://open.spotify.com/user/kailyliu';
                }}> spotify &#127911;</button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                e.preventDefault(); 
                window.location.href='https://www.linkedin.com/in/kaily-liu/';
                }}> linkedin &#128084;</button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href='mailto:kliu279@gmail.com';
                }}> email &#128231;</button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                e.preventDefault(); 
                window.location.href='https://github.com/kailyl';
                }}> github &#128187;</button>
            <button 
                className='buttonz'
                onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href='https://www.pinterest.com/kliu279/';
                }}> pinterest &#128444;</button>
            <button 
                className='buttonz' 
                onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href='https://www.imdb.com/list/ls565032369/';
                }}> imdb &#127909;</button>
        </div>
    )

}