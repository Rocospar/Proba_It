import React, { useState } from 'react';
import './App.css'; // Asigură-te că ai fișierul CSS pentru stiluri

function App() {
  // --- ZONA DE LOGICĂ (Javascript) ---
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Aici ținem minte dacă e logat

  const handleLogin = async (e) => {
    e.preventDefault(); // Să nu dea refresh pagina

    try {
      // Facem cererea către Backend-ul tău de pe portul 1234
      const response = await fetch('http://localhost:1234/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Verificăm răspunsul serverului (status: "Succes")
      if (data.status === "Succes") {
        // Dacă e ok, setăm variabila pe true -> React va schimba ecranul
        setIsLoggedIn(true);
      } else {
        alert(data.message); // Afișăm "Parola gresita" sau "Nu exista user"
      }
    } catch (err) {
      console.error(err);
      alert("Eroare: Nu mă pot conecta la serverul backend (Port 1234)!");
    }
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      setUsername("");
      setPassword("");
  }

  // --- ZONA DE GRAFICĂ (HTML) ---
  
  // Scenariul 1: Dacă s-a logat cu succes -> Arată conținutul site-ului
  if (isLoggedIn) {
      return (
          <div className="background" style={{textAlign: 'center', paddingTop: '50px'}}>
              <h1>🎉 Bine ai venit, {username}!</h1>
              <p>Te-ai logat cu succes.</p>
              <button 
                onClick={handleLogout} 
                style={{padding: '10px 20px', marginTop: '20px', cursor: 'pointer', backgroundColor: 'red', color: 'white', border: 'none'}}
              >
                Deconectare
              </button>
          </div>
      );
  }

  // Scenariul 2: Dacă NU e logat -> Arată Formularul tău de Login
  return (
    <div className="background">
      <div className="LoginSquare">
        <h1>Login</h1>
        
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;