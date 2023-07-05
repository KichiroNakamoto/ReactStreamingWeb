import Banner from "../assets/img/banner.jpg"
import BannerSquare from "./BannerSquare"

const BannerSection = () => {

    return (
      <div>
        <div className="Bannerimg">
            <img src={Banner} className="banner-home"></img>
        </div>
        <div className="bannertop"></div>
        <BannerSquare />
      </div>
    )
  };
  
export default BannerSection;