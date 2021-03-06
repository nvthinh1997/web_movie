import React, { Component } from "react";
import Carousel from "../../components/caurosel";
import ListMovie from "../../components/ListMovie";
import BlockApp from "../../components/BlockApp";
import Footer from "../../components/footer";
import Cinema from "../../components/Cinema";
// import BackToTop from "../../components/BackToTop";
import Navbar from "../../components/navbar";
import ListMovieForMobile from "../../components/ListMovieForMobile";
import News from "../../components/News";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Carousel />
        <ListMovie />
        <ListMovieForMobile/>
        <Cinema />
        <News></News>
        <BlockApp />
        <Footer />
        {/* <BackToTop /> */}
      </div>
    );
  }
}

export default Home;
