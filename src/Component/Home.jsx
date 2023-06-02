import React from "react";
import {
  Box,
  HStack,
  Heading,
  Text,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
const Home = () => {
  const OpenPDF = () => {
    const url = `https://drive.google.com/file/d/18Pbe_wyjgv58f_eegClDllB02VuUe7GL/view?usp=sharing`;
    window.open(url, "_blank");
  }
  return (
    <Box mt="-90px"  id="home" mb="30px">
      {/* //mt = {{base : '20px','456px' : '25px','612px' : '30px','735px' : '40px', '934px':'100px'}} */}
      <HStack
        mt={{
          base: "86px",
          "456px": "94px",
          "612px": "95px",
          "735px": "105px",
          "934px": "150px",
        }}
        flexDirection={{ base: "column", "934px": "row" }}
        // pl="25px"
        bg="rgb(1,23,39)"
        backdropFilter={"blur(10px)"}
        justify={"space-between"}
        width={"90%"}
        justify-content= {"center"}
        margin={"auto"}
        border-radius={"20px"}
        padding={"2rem"}
        height={"auto"}

      >
        <Box
          mb={{ base: "50px", "934px": "none" }}
          pt={{ base: "30px", "934px": "none" }}
          pr={{ base: "30px", "934px": "none" }}
          w={{ base: "98%", "934px": "50%" }}
          textAlign={"left"}
        >
          <Heading fontSize="50px" color="white" letterSpacing={"2px"} as="h1">
            Hi! I Am
          </Heading>

          <Heading
            fontSize="50px"
            id="user-detail-name"
            color="rgb(0, 255, 162)"
            fontFamily={"monospace"}
            letterSpacing={"2px"}
            as="h1"
          >
            Subrat Kumar Nayak
          </Heading>

          <Text mt="15px" fontSize="15px" id="user-detail-intro">
            A passionate Full Stack MERN Developer skilled in HTML, CSS,
            Javascript and React, with a focus on designing and building
            high-performance and scalable enterprise applications
          </Text>

          <Button
            onClick={OpenPDF}
            id="resume-button-2"
            mb="20px"
            _hover={{ background: "rgb(115, 249, 200)" }}
            mt="15px"
            className="nav-link resume"
            size={["sm", "md"]}
            variant="none"
            bg="rgb(0, 255, 162);"
            border="1px solid"
            boxShadow={"1px 1px 5px"}
            color="black"
          >
            <Link
              id="resume-link-2"
              _hover={{ textDecoration: "none" }}
              href="Subrat-Nayak-Resume.pdf"
              isExternal
              download="Subrat-Nayak-Resume.pdf"
            >
              Resume
            </Link>
          </Button>
          <HStack w="170px" justify={"space-between"}>
            <Link
              id="contact-linkedin"
              isExternal
              href="https://www.linkedin.com/in/subrat-kumar-nayak-463aab229/"
            >
              {" "}
              <Image
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: "all 0.4s",
                }}
                w="30px"
                src="linkedin.png"
              ></Image>{" "}
            </Link>

            <Link
              id="contact-github"
              isExternal
              href="https://github.com/subrat199"
            >
              {" "}
              <Image
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: "all 0.4s",
                }}
                w="40px"
                src="github.png"
              ></Image>{" "}
            </Link>

            <Link
              id="contact-email"
              isExternal
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            >
              {" "}
              <Image
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: "all 0.4s",
                }}
                w="35px"
                src="gmail.png"
              ></Image>{" "}
            </Link>

            <Link id="contact-phone" isExternal href="https://wa.me/8249253979">
              {" "}
              <Image
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  transition: "all 0.4s",
                }}
                w="35px"
                src="whatsapp.png"
              ></Image>{" "}
            </Link>
          </HStack>
        </Box>

        <Image
          className="home-img"
          w={{
            base: "75%",
            "401px": "75%",
            "457px": "60%",
            "697px": "50%",
            "798px": "40%",
            "934px": "30%",
          }}
          borderRadius={"50%"}
          m={"1rem"}
          src="SUBRAT-update.png"
        ></Image>
      </HStack>
    </Box>
  );
};

export default Home;
