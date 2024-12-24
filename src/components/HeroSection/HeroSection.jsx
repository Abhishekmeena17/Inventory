
import "./HeroSection.css";

export default function HeroSection({ children1, children2 }) {
  return (
    <>
      <div className="hero-section">
        <div className="hero-heading">
          <span>{children1}</span>
        </div>
        <div className="hero-buttons">{children2}</div>
      </div>
    </>
  );
}
