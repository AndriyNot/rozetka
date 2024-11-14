import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import { FavoritesProvider } from './components/FavoritesContext'; // Імпортуйте FavoritesProvider
import FavoritesPage from './components/FavoritesPage';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </FavoritesProvider>
  );
}

export default App;