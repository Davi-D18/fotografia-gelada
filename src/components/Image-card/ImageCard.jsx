import React, { useState } from "react";

export function ImageCard({
  image,
  handleLikeClick,
  isLoggedIn,
  onImageClick,
}) {
  const [likes, setLikes] = useState(image.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!isLoggedIn) {
      handleLikeClick();
    } else {
      setLiked(!liked);
      setLikes(likes + (liked ? -1 : 1));
    }
  };

  return (
    <div className="image-card">
      {/* Chama a função onImageClick ao clicar na imagem */}
      <img
        src={image.src}
        alt={image.title}
        onClick={onImageClick}
        style={{ cursor: "pointer" }}
      />
      <div className="interactions">
        <button onClick={handleLike} className={liked ? "liked" : ""}>
          ❤️ {likes}
        </button>
        <button onClick={() => alert("Comentário...")}>💬 Comentar</button>
      </div>
    </div>
  );
}
