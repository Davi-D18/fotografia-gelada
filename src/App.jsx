import React, { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { ImageGrid } from "./components/Image-grid/Image-grid.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { LoginModal } from "./components/Login-Modal/LoginModal.jsx";
import { ImageModal } from "./components/Image-Modal/ImageModal.jsx"; // Novo componente do modal de imagem
import "./styles/style.css";

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Para controlar a imagem selecionada no modal

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLikeClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      // Lógica de like implementada no componente da imagem
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Função para abrir o modal de imagem ao clicar em uma imagem
  const handleImageClick = (image) => {
    setSelectedImage(image); // Define a imagem que será exibida no modal
  };

  // Função para fechar o modal de imagem
  const handleCloseImageModal = () => {
    setSelectedImage(null); // Fecha o modal ao definir a imagem como null
  };

  return (
    <div className="App">
      <Header
        onLoginClick={() => setShowLoginModal(true)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      <ImageGrid
        handleLikeClick={handleLikeClick}
        isLoggedIn={isLoggedIn}
        onImageClick={handleImageClick}
      />
      <Footer />

      {showLoginModal && <LoginModal onLogin={handleLogin} />}

      {/* Exibe o modal de imagem se houver uma imagem selecionada */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={handleCloseImageModal}
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
}
