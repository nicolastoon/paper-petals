import { hover, unhover } from "../scripts/hover.ts";
import Divider from "./Divider.tsx";

type BannerInfo = {
  info: {
    id: string;
    title: string;
    desc: string;
    buttonText: string;
    buttonLink: string;
    imgLink: string;
    mobileImg: string;
  };
};

export default function InfoBanner({ info }: BannerInfo) {
  return (
    <div className="banner home-banner" id={`${info.id}`}>
      <div className="home-background-container">
        <img className="home-background-image" src={info.imgLink}></img>
        {info.mobileImg ? (
          <img
            className="home-background-image"
            id="mobile-background-image"
            src={info.mobileImg}
          ></img>
        ) : (
          <img
            className="home-background-image"
            id="mobile-background-image"
            src={info.imgLink}
          ></img>
        )}
      </div>
      <div className="home-banner-text" id={`${info.id}-text`}>
        <span className="banner-title tenor-sans">{info.title}</span>
        <Divider />
        <span className="tenor-sans banner-desc">{info.desc}</span>
        <button
          className="tenor-sans banner-btn button"
          onClick={() => window.open(info.buttonLink)}
          onPointerEnter={() => hover(info.buttonText)}
          onPointerLeave={() => unhover(info.buttonText)}
        >
          <div className="button">
            <span className="btn-text" id={`${info.buttonText}-link-head`}>
              {info.buttonText}
            </span>
            <span className="btn-text" id={`${info.buttonText}-link-tail`}>
              {info.buttonText}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
