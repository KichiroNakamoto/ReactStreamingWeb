import './BannerSection.css';
import { Link } from 'react-router-dom';

const BannerSection = () => {

    return (
      <div className="signup-container">
        <div className="logoInside"></div>
        <div className="description">
          <h2>Welcome to Moob Streaming</h2>
          <p>Discover a world of endless entertainment. Join us today and create an account to unlock our vast library of movies, TV shows, and exclusive content. Sign up now and start streaming!</p>

        </div>
        <Link to="/crear_cuenta"><button className="signup-button">Sign Up</button></Link>
      </div>
    )
  };  
  
export default BannerSection;