import logo from "./logo.svg";
import "./App.css";

import { Box } from "@chakra-ui/react";

import { HStack, Text, Image } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";

import Home from "./Component/Home";

import About from "./Component/About";

import Contact from "./Component/Contact";

import Skills from "./Component/Skills";

import Projects from "./Component/Projects";

import { GithubStats } from "./Component/GithubStats";
import Particle from "./Component/Particle";

function App() {
  return (
    <>
      {/* <Particle/> */}
      <Box minW="280px" className="App" color="white" bg="#42A5F5">
        <Navbar />

        <Box>
          <Home />
          <About />
          <Skills />

          <Projects />

          <GithubStats />
        
          <Contact />
        </Box>

        <Image src="https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg"></Image>
      </Box>
    </>
  );
}

export default App;
