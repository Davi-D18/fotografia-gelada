import React, { useState } from "react";

import "./loginModal.css";

export function LoginModal({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  // Validação simples de e-mail
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = () => {
    let valid = true;
    let newError = { email: "", password: "" };

    if (!validateEmail(email)) {
      newError.email = "Por favor, insira um e-mail válido.";
      valid = false;
    }

    if (password.length < 6) {
      newError.password = "A senha deve ter pelo menos 6 caracteres.";
      valid = false;
    }

    if (valid) {
      onLogin(); // Executa o login se as validações passarem
    } else {
      setError(newError); // Exibe erros
    }
  };

  return (
    <div className="modal">
      <div className="modal-content-login">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error.email ? "input-error" : ""}
        />
        {error.email && <p className="error-message">{error.email}</p>}

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={error.password ? "input-error" : ""}
        />
        {error.password && <p className="error-message">{error.password}</p>}

        <div className="container-button">
          <button onClick={handleSubmit}>Entrar</button>
          <button onClick={() => onLogin(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
