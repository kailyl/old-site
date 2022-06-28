import './Homepage.css';
import Bio from './Bio';
import Project from './Project'; 
import website2 from '../images/new.jpeg'
import nets from '../images/nets.jpeg'
import paint from '../images/paint.jpeg'
import game from '../images/20488.png'
import website1 from '../images/web2.jpeg'
import twitter from '../images/twitterr.jpeg'
import plotify from '../images/plotify.jpeg'


function Homepage() {
  const data = require('../ProjectInfo.json');
  const inspo = <a href="https://apelido-apelido.com/" style={{color: 'black'}}>apelido-apelido.com/</a>;
  const images = [plotify, twitter, website2, nets, game, paint, website1]; 

  return (
    <div className="app">
      <h1 className='abt'> ABOUT </h1>
      <Bio /> 
      <div className='bigSeparator'> 
        <div className='projects'> 
          <div className='otherBigText'> 
              <h1> PROJECTS</h1>
          </div>
          {images.map((item, index) => {
            return <Project key={index} val={data[index]} img={item} /> 
          })}
        </div>
        <div className='bigText'> 
            <h1 className='txt'> PROJECTS</h1>
        </div>
      </div>
      <p className='footer'> made by me :) - design inspo from {inspo}</p>
    </div>
  );
}

export default Homepage;
