import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext(undefined);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('dd_favorite_gifts');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erro ao carregar dádivas favoritas', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dd_favorite_gifts', JSON.stringify(favorites));
    } catch (error) {
      console.error('Erro ao salvar dádivas favoritas', error);
    }
  }, [favorites]);

  const toggleFavorite = (giftId) => {
    setFavorites((prev) => 
      prev.includes(giftId) 
        ? prev.filter((id) => id !== giftId) 
        : [...prev, giftId]
    );
  };

  const isFavorite = (giftId) => favorites.includes(giftId);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
}