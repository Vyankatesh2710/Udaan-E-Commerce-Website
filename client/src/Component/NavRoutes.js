import React from "react";
import MyNavBar from "./Navbar/MyNavBar";
import Home from "./Home/Home";
import Services from "./Services/Services";
import ArtistList from "./ArtistList/ArtistList";
import Work from "./Work/Work";
import ArtistProfile from "./Profile/ArtistProfile";
import Login from "./Login/Login";
import AllArtworks from "./Services/AllArtworks";
import Artgallery from './Services/Artgallery'
import AddArtistProfile from "./Profile/AddArtistProfile";
import AddCustmerProfile from "./Profile/AddCustmerProfile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Login/Register";
import CustomerProfile from "./Profile/CustomerProfile";
import CartContainer from "./Cart/CartContainer";

function NavRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MyNavBar />
                <section id="home">
                  <Home />
                </section>

                <section id="services">
                  <Services />
                </section>

                <section id="work">
                  <Work />
                </section>

                <section id="artistlist">
                  <ArtistList />
                </section>
              </>
            }
          />

          <Route path="/profile" element={<ArtistProfile />} />
          <Route path="/custprofile" element={<CustomerProfile />} />

          <Route path="/store" element={<AllArtworks />} />
          <Route path="/artgallery" element={< Artgallery/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/addartistprofile" element={<AddArtistProfile />} />
          <Route path="/addcustomerprofile" element={<AddCustmerProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavRoutes;
