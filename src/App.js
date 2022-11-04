import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

import Navbar from "./components/Navbar";
import { ThemeProvider } from './context/ThemeContext';
import HomePage from "./pages/HomePage";
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import CoinPage from './pages/CoinPage';
import Footer from './components/Footer';
import { AuthContextProvider } from "./context/AuthContext";

function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    })
  },[url])

  return (
    <ThemeProvider >
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage coins={coins}/>} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId/>' />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
