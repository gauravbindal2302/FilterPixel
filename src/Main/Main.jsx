import React, { useState } from "react";

import "./Main.css";

const images = [
  "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  "https://iso.500px.com/wp-content/uploads/2022/07/Sunset-somewhere-in-Iowa-By-Vath.-Sok-2.jpeg",
  "https://www.shutterstock.com/image-photo/womans-hand-fern-leaf-man-260nw-2190358695.jpg",
  "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=0&k=20&c=kt8-RRzCDunpxgKFMBBjZ6jSteetNhhSxHZFvHQ0hNU=",
  "https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580",
  "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_640.jpg",
];

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const isOnFirstImage = currentIndex === 0;
  const isOnLastImage = currentIndex === images.length - 1;

  return (
    <>
      <div className="main">
        <div className="main-container">
          <div className="column-first">
            <div className="row-first">
              <div className="image-section-header">
                <h2>Showing {images.length} Photos</h2>
              </div>
              <div className="image-section">
                <img src={images[currentIndex]} alt={`image-${currentIndex}`} />
              </div>
            </div>
            <div className="row-second">
              <div className="image-list-header">
                <h2>
                  {currentIndex + 1} / {images.length} In-view
                </h2>
              </div>
              <div className="image-list">
                <div className="horizontal-scroll">
                  {images.map((img, index) => (
                    <button key={index} onClick={() => goToImage(index)}>
                      <img src={img} alt={`image-${index}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="column-second">
            <div className="row-third"> </div>
            <div className="row-fourth">
              {!isOnFirstImage && <button onClick={prevImage}>Previous</button>}
              {!isOnLastImage && <button onClick={nextImage}>Next</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
