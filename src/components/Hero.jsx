import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const Hero = ({ bg, text }) => {
  console.log(`[Hero] bg: ${bg}`);

  return (
    <section className="hero">
      <ReactPlayer className="hero--video-container-video" url={bg} width="100%" height="100%" playing loop muted />
      <nav className="hero--nav">
        <div>
          <div className="hero--nav-active-marker" />
          <NavLink to="/timeline">Timeline</NavLink>
        </div>
        <div>
          <div className="hero--nav-active-marker" />
          <NavLink to="/story">Story</NavLink>
        </div>
        <div>
          <div className="hero--nav-active-marker" />
          <NavLink to="/memories">Memories</NavLink>
        </div>
        <div>
          <div className="hero--nav-active-marker" />
          <NavLink to="/faq">FAQ</NavLink>
        </div>
      </nav>
      <header className="hero--header">S&E 06.22.25</header>
      <p className="hero--text">Our {text}</p>
    </section>
  );
};

export default Hero;
