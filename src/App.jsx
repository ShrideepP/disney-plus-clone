import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './components/context/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Movie from './pages/Movie';
import ProtectedRoute from './components/ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
import "./app.css";

function App() {

  const { displayName, photoURL } = UserContext();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Login />} />
        <Route exact path='/home' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route exact path='/movie/:movieId' element={
          <ProtectedRoute>
            <Movie />
          </ProtectedRoute>
        } />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      { (displayName && photoURL) && <Footer /> }
    </BrowserRouter>
  );
};

export default App;