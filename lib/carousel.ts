export const carouselImages = [
  { id: "slide01", src: "/images/carousel/01.jpg" },
  { id: "slide02", src: "/images/carousel/02.jpg" },
  { id: "slide03", src: "/images/carousel/03.jpg" },
  { id: "slide04", src: "/images/carousel/04.jpg" },
  { id: "slide05", src: "/images/carousel/05.jpg" },
  { id: "slide06", src: "/images/carousel/06.jpg" },
  { id: "slide07", src: "/images/carousel/07.jpg" },
  { id: "slide08", src: "/images/carousel/08.jpg" },
  { id: "slide09", src: "/images/carousel/09.jpg" },
  { id: "slide10", src: "/images/carousel/10.jpg" },
  { id: "slide11", src: "/images/carousel/11.jpg" },
  { id: "slide12", src: "/images/carousel/12.jpg" },
  { id: "slide13", src: "/images/carousel/13.jpg" },
  { id: "slide14", src: "/images/carousel/14.jpg" },
  { id: "slide15", src: "/images/carousel/15.jpg" },
] as const;

export type CarouselImageId = (typeof carouselImages)[number]["id"];
