// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Menú</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Inicio
              </a>
            </li>
            <li>
              <a href="/equipo" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Equipo
              </a>
            </li>
            <li>
              <a href="/partidos" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Partidos
              </a>
            </li>
            <li>
              <a href="/contacto" className="block px-4 py-2 hover:bg-gray-700 rounded">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
