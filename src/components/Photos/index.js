import React, { useState, useEffect } from "react";
import "./style.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async (num = 1) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${num}&_limit=10`
    );
    const data = await response.json();
    setPhotos(data);
  };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="head">
      <div className="header">
        {photos.map((item) => {
          return (
            <div className="main__body" key={item.id}>
              <img className="main__top" src={item.thumbnailUrl}></img>
              <p className="main__bottom">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className="footer">
        {arr.map((item) => {
          return (
            <button
              key={item}
              className="footer__button"
              onClick={() => getPhotos(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
