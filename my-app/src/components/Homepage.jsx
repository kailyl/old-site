import Header from './Header';
import Project from './Project';
import '../style/Homepage.css';

export default function Homepage() {
  return (
    <div>
      <Header homeItalics="italic" aboutItalics="none"/> 
      <div id="all">
        <div id="projects0">
          <Project 
            name="Spotify Dashboard" 
            tools="NodeJS, Java, Python, AWS (DynamoDB, Lambda)"
            descr="Stores the songs I listen to daily and displays them with some analytics" 
            time="2022" 
            link="https://github.com/kailyl/spotify-dashboard-data"/>
        </div> 
        <div id="projects1">
          <Project 
            name="BenBook" 
            tools="NodeJS, Java, CSS, AWS (DynamoDB, S3, EC2, EMR)"
            descr="Facebook-like site with walls, news feeds, and chats" 
            time="2022" 
            link="https://github.com/kailyl/benbook"/>
        </div>
        <div id="projects2">
          <Project 
            name="FNAR 0010" 
            tools="Charcoal, Pencil, India Ink" 
            descr="I took an art class" 
            time="2022" 
            link="/fnar"/>
        </div>
        <div id="projects3">
          <Project 
              name="Plotify" 
              tools="ReactJS, CSS" 
              descr="Uses Spotify API to graph song preferences" 
              time="2022" 
              link="https://github.com/kailyl/plotifyapp.github.io"/>
        </div>
        <div id="projects4">
          <Project 
            name="Common Onion Twitter Bot" 
            tools="Python" 
            descr="Uses Twitter API to generate funny tweets" 
            time="2022" 
            link="https://github.com/kailyl/the-onion-twitter-bot"/>
        </div>
        <div id="projects5">
          <Project 
            name="Age in Congressional Committees" 
            tools="Java" 
            descr="Clustering coefficients and Senate ties" 
            time="2022" 
            link="https://github.com/kailyl/nets-150-final-project"/>
        </div>
        <div id="projects6">
          <Project 
              name="2048" 
              tools="Java" 
              descr="(with saving, restarting, and resuming)" 
              time="2021" 
              link="https://github.com/kailyl/2048"/>
        </div>
        <div id="projects7">
          <Project 
            name="kailyl.github.io" 
            tools="ReactJS"
            descr="this" 
            time="∞" 
            link="https://github.com/kailyl/kailyl.github.io"/>
        </div>
      </div>
    </div>
  );
}