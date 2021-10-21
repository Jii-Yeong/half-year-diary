import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Footer from "../components/Footer";
import MainBanner from "../components/banner/MainBanner";
import DefaultButton from "../components/Button";

import { SilentRefresh } from "../components/user/Refresh";

const Home = () => {
  useEffect(() => {
    SilentRefresh();
  }, []);

  return (
    <>
      <Container>
        <MainBanner>
          <Link to="/guide">
            <DefaultButton
              className={"move-guide-button"}
              width={"195px"}
              bgColor={"#dddddd"}
              textColor={"#2d2d2d"}
              text={"사이트소개 바로가기"}
            />
          </Link>
        </MainBanner>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
