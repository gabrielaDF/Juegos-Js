import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MemoryGame from "./games/MemoryGame";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-8">
          Selecciona un Juego
        </h1>
        <nav className="mb-8">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/memory-game"
                className="text-lg font-medium text-blue-500 hover:underline"
              >
                Juego de Memoria
              </Link>
            </li>
            {/* Agregar más enlaces a otros juegos aquí */}
          </ul>
        </nav>
        <Routes>
          <Route path="/memory-game" element={<MemoryGame />} />
          {/* Agregar más rutas para otros juegos aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
