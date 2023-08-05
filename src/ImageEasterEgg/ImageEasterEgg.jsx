import { useState } from "react";
import "./style.css";
import ImgMonochrome from "../__assets/0_monochrome_filter.jpg";
import ImgOrange from "../__assets/1_orange_original.jpg";
import ImgPink from "../__assets/3_pink_filter.jpg";
const allImages = [
  {
    id: 1,
    src: ImgMonochrome,
  },
  {
    id: 2,
    src: ImgOrange,
  },
  {
    id: 3,
    src: ImgPink,
  },
];
function ImageEasterEgg() {
  const [imgSrc, setImgSrc] = useState(allImages[0].src);

  const handleImgClick = () => {
    const currentIndex = allImages.findIndex((image) => image.src === imgSrc);
    const nextIndex = (currentIndex + 1) % allImages.length;

    setImgSrc(allImages[nextIndex].src);
  };

  return (
    <div className="wrapper mx-auto h-screen max-w-lg px-6 py-8">
      <header>
        <div
          className="image h-28 w-28 cursor-pointer transition-all active:scale-95 "
          onClick={handleImgClick}
        >
          <img
            src={imgSrc}
            className="h-full w-full rounded-full shadow-xl transition-all"
          />
        </div>

        <div className="image-container mt-6"></div>
      </header>
    </div>
  );
}

export default ImageEasterEgg;
