import React from "react";

import "./header.css";

export function Header({ onLoginClick, isLoggedIn, onLogout }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">FOTOGRAFIA GELADA</h1>
        {/* Se o usuário estiver logado, exibe o botão de logout, senão exibe o botão de login */}
        {isLoggedIn ? (
          <button className="login-btn" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={onLoginClick}>
            Login
          </button>
        )}
      </div>
      <nav className="menu">
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
}
