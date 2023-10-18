import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkModeState());

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add('dark'); // Adicione a classe 'dark' para ativar o modo escuro
    } else {
      body.classList.remove('dark'); // Remova a classe 'dark' para desativar o modo escuro
    }

    // Salvar o estado do modo escuro no armazenamento local
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="text-right">
      <button
      className={`w-12 h-12 p-2 rounded-full transition-colors duration-300 ${
        darkMode ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
      }`}
      onClick={toggleDarkMode}>
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </div>
  );
};

function getInitialDarkModeState() {
  const savedDarkMode = localStorage.getItem('darkMode');
  return savedDarkMode ? JSON.parse(savedDarkMode) : false;
}

export default DarkModeToggle;
