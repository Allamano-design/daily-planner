import heroImage from './assets/hero.jpg';


function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Your Daily Purpose, <span className="highlight">Organized</span></h1>
        <p>Plan. Track. Achieve. Build a healthier, focused, and more fulfilling life every day.</p>
        <button className="hero-btn"><a href="#reminder">Get Started</a></button>

        {/* Decorative Scroll Indicator */}
        <div className="scroll-indicator">↓</div>
      </div>
    </section>
  );
}

export default Hero;
