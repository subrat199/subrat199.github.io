import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import style from "./Aboutme.module.css";
const About = () => {
  return (
    <div>
      <Box
        h="90vh"
        id="about"
        className="about section"
        // mb="100px"
      >
        <Heading mt="150px" color="rgb(0, 255, 162);" fontSize={35}>
          <Text as="span" color="white">
            About
          </Text>{" "}
          Me
        </Heading>

        <Text mt="50px" fontSize={"20"}>
          Hello 👋 Myself Subrat
        </Text>

        <Box
          className={style.aboutme}
          color="black"
          p={{ base: "8", "486px": "10" }}
          borderRadius={"10px"}
          bg="black"
          w="60%"
          m="auto"
          mt="20px"
        >
          <Text
            mt="15px"
            fontSize="16px"
            id="user-detail-intro"
            color={"white"}
          >
            A self-motivated and hard-working full stack web developer with
            proficiency in JavaScript. Adaptable and accountable team
            player,driven to deliver the best in any situation. Looking forward
            to utilizing current skillset and experience of working on projects
            tocreate a mark in the software industry and achieve organizational
            goals.
          </Text>
        </Box>
      </Box>
    </div>
  );
};


export default About;
