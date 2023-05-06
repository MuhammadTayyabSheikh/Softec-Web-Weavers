import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/Partials";
import { Home, Login, SignUp, ProductPage, FavoritesPage } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/nft" element={<NftPage />} /> */}
          {/* <Route path="/upload" element={<UploadNft />} /> */}
          {/* <Route path="/explore" element={<Marketplace />} /> */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/connect-wallet" element={<ConnectWallet />} /> */}
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
