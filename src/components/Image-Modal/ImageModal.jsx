import React from "react";
import { FaHeart } from "react-icons/fa";

import "./imagemModal.css";

export function ImageModal({ image, onClose, isLoggedIn }) {
  const handleLike = () => {
    if (!isLoggedIn) {
      alert("Por favor, faça login para curtir a imagem.");
    } else {
      // Lógica para incrementar o número de curtidas
      alert("Curtiu a imagem!");
    }
  };

  const handleComment = () => {
    if (!isLoggedIn) {
      alert("Por favor, faça login para comentar.");
    } else {
      const comment = prompt("Escreva seu comentário:");
      if (comment && comment.length > 2) {
        alert(`Comentário enviado: ${comment}`);
      } else {
        alert("Comentário inválido.");
      }
    }
  };

  return (
    <div className="image-modal">
      <div className="modal-content">
        <header className="modal-header">
          <h2>{image.title}</h2>
          <button onClick={onClose} className="close-modal">
            X
          </button>
        </header>
        <div className="modal-body">
          <img src={image.src} alt={image.title} />
          <div className="interactions-modal">
            <button onClick={handleLike}>
              {" "}
              {<FaHeart />} {image.likes}
            </button>
            <button onClick={handleComment}>
              💬 {image.comments} Comentários
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
