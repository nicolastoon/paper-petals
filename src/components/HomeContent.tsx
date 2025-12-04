import InfoBanner from "./InfoBanner.tsx";

const banners = [
  {
    id: "top-banner",
    title: "thoughtfully crafted",
    desc: "the beautiful colors and flowers can be seen from afar, but every precise fold, crease, and bend make it elaborate and genuine",
    buttonText: "view gallery",
    buttonLink: "./gallery/",
    imgLink: "./img/flower-banner.png",
    mobileImg: ""
  },
  {
    id: "bottom-banner",
    title: "made to last forever",
    desc: "literally. no withering, no molding, no seasonal changes. just don’t water them.",
    buttonText: "commission now",
    buttonLink: "./commission/",
    imgLink: "./img/recollections-banner.png",
    mobileImg: "./img/recollections-banner-2.png"
  },
];

export default function HomeContent() {
  return (
    <section id="home-page">
      <InfoBanner info={banners[0]} />
      <InfoBanner info={banners[1]} />
    </section>
  );
}
