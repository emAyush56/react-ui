import { useEffect, useState } from "react";
import "./style.css";
import ImgMonochrome from "../__assets/min/0_monochrome_filter_light_2.jpg";
import ImgOrange from "../__assets/min/1_orange_original_2.jpg";
import ImgPink from "../__assets/min/3_pink_filter_2.jpg";

function ImageEasterEgg() {
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

  useEffect(() => {
    allImages.forEach((image) => {
      const img = new Image();
      console.log("before", img);
      img.src = image.src;
      console.log("after", img);
    });
  }, []);

  const [index, setIndex] = useState(0);

  const handleImgClick = () => {
    setIndex((index + 1) % allImages.length);
  };

  return (
    <div className="wrapper mx-auto h-screen max-w-lg select-none px-6 py-8">
      <header>
        <div className="image h-28 w-28 cursor-pointer select-none transition-all active:scale-95">
          <img
            onClick={handleImgClick}
            src={allImages[index].src}
            className="h-full w-full select-none rounded-full shadow-xl transition-all"
          />
        </div>
      </header>
    </div>
  );
}

export default ImageEasterEgg;
