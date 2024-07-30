const Hero = ({ bg, text }) => {
  return (
    <section className="hero">
      <div className="hero--video-container">
        <video autoPlay loop muted>
          <source src={bg} type="video/mp4" />
        </video>
      </div>
      <header className="hero--header">S&E 06.22.25</header>
      <p className="hero--text">Our {text}</p>
    </section>
  );
};

export default Hero;
