import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../components/Banner/Banner";
import { Container } from "@material-ui/core";

const Home = () => {
  useEffect(() => {
    console.log("Calling all Pokemon");
  }, []);
  return (
    <Container>
      <Banner />
    </Container>
  );
};

export default Home;
