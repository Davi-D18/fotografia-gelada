import React from "react";
import { ImageCard } from "../Image-card/ImageCard.jsx";

export function ImageGrid({ handleLikeClick, isLoggedIn, onImageClick }) {
  const images = [
    {
      id: 1,
      src: "https://getwallpapers.com/wallpaper/full/1/e/4/641832.jpg",
      title: "Everest",
      likes: 10,
      comments: 2,
    },
    {
      id: 2,
      src: "http://getwallpapers.com/wallpaper/full/b/c/0/848010-download-mount-everest-wallpaper-3157x2104-photos.jpg",
      title: "Monte Fuji",
      likes: 5,
      comments: 3,
    },
    {
      id: 3,
      src: "https://www.thoughtco.com/thmb/esfxRGAAqEmPET82KzVdVSA6aA0=/2122x1415/filters:no_upscale():max_bytes(150000):strip_icc()/MountEverest_PhFengWei_Getty2-56a16b185f9b58b7d0bf2e87.jpg",
      title: "Alpes Suiços",
      likes: 7,
      comments: 1,
    },
    {
      id: 4,
      src: "https://www.thoughtco.com/thmb/esfxRGAAqEmPET82KzVdVSA6aA0=/2122x1415/filters:no_upscale():max_bytes(150000):strip_icc()/MountEverest_PhFengWei_Getty2-56a16b185f9b58b7d0bf2e87.jpg",
      title: "Alpes Suiços",
      likes: 5,
      comments: 1,
    },
    {
      id: 5,
      src: "https://www.thoughtco.com/thmb/esfxRGAAqEmPET82KzVdVSA6aA0=/2122x1415/filters:no_upscale():max_bytes(150000):strip_icc()/MountEverest_PhFengWei_Getty2-56a16b185f9b58b7d0bf2e87.jpg",
      title: "Alpes Suiços",
      likes: 11,
      comments: 1,
    },
    {
      id: 5,
      src: "https://www.thoughtco.com/thmb/esfxRGAAqEmPET82KzVdVSA6aA0=/2122x1415/filters:no_upscale():max_bytes(150000):strip_icc()/MountEverest_PhFengWei_Getty2-56a16b185f9b58b7d0bf2e87.jpg",
      title: "Alpes Suiços",
      likes: 11,
      comments: 1,
    },
  ];

  return (
    <div className="image-grid">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          handleLikeClick={handleLikeClick}
          isLoggedIn={isLoggedIn}
          onImageClick={() => onImageClick(image)} // Passa a função de clique
        />
      ))}
    </div>
  );
}
