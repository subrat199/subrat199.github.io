import { Box, Text, Image, VStack, Heading } from "@chakra-ui/react";

import GitHubCalendar from "react-github-calendar";

export const GithubStats = () => {
  return (
    <Box pb="50px" bg="black">
      <Heading color="rgb(0, 255, 162);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          Github
        </Text>{" "}
        Calender
      </Heading>

      <VStack mt="70px">
        <GitHubCalendar username="subrat199"></GitHubCalendar>
      </VStack>

      <Heading mt="50px" color="rgb(0, 255, 162);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          Github
        </Text>{" "}
        Stats
      </Heading>

      <VStack mt="70px">
        <Image
          id="github-stats-card"
          borderRadius="20px"
          src="https://github-readme-stats.vercel.app/api?username=subrat199&show_icons=true&locale=en"
        ></Image>
      </VStack>

      <Heading mt="50px" color="rgb(0, 255, 162);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          Github
        </Text>{" "}
        Streaks
      </Heading>

      <VStack mt="70px">
        <Image
          id="github-streak-stats"
          borderRadius="20px"
          src="https://github-readme-streak-stats.herokuapp.com/?user=subrat199&theme=dark"
        ></Image>
      </VStack>

      <Heading mt="50px" color="rgb(0, 255, 162);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          Github
        </Text>{" "}
        Languages
      </Heading>

      <VStack mt="70px">
        <Image
          id="github-top-langs"
          borderRadius="20px"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=subrat199&show_icons=true&locale=en&layout=compact"
        ></Image>
      </VStack>

      <Heading mt="50px" color="rgb(0, 255, 162);" fontSize={35}>
        {" "}
        <Text as="span" color="white">
          Github
        </Text>{" "}
        Trophies
      </Heading>

      <VStack mt="70px">
        <Image src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></Image>

        <Image src="https://github-profile-trophy.vercel.app/?username=subrat199"></Image>

        <Image src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></Image>
      </VStack>
    </Box>
  );
};
