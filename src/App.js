import logo from './logo.svg';
import './App.css';
import { Header } from './Component/header/Header';
import { Home } from './Component/home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './Component/about/About';
import { Footer } from './Component/footer/Footer';
import { Booking } from './Component/booking/Booking';
import { Contact } from './Component/contact/Contact';
import { Feedback } from './Component/feedback/Feedback';
import { Gallery } from './Component/gallery/Gallery';
// import { Login } from './Component/login/Login';
import { Restaurant } from './Component/restaurant/Restaurant';
import { Room } from './Component/room/Room';
import { Service } from './Component/service/Service';
import { Team } from './Component/team/Team';
import { View_Room } from './Component/view_room/View_Room';
import React from 'react';
import { Signup } from './Component/signup/Signup';
import { Protector } from './Component/protector';
import Forget from './Component/signup/Forget';
import { Profile } from './Component/profile/Profile';
import { Qrcode } from './Component/qrcode/Qrcode';



function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/booking/:cat?">
          <Protector>
            <Booking />
          </Protector>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/restaurant">
          <Restaurant />
        </Route>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/view_room/:id?">
          <View_Room />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path="/profile">
          <Protector>
          <Profile/>
          </Protector>
        </Route>
        <Route path="/forget">
          <Forget />
        </Route>
        <Route path="/qrcode">
          <Qrcode/>
        </Route>
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
