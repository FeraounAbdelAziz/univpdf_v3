import FooterSocial from "@/components/landingPage/footer/FooterSocial";
import { Box, Center, List, ListItem, Title } from "@mantine/core";

export default function AboutPage() {
  return (
    <>
      {/* <Center>
        <Box>
          <Title>We Are MLT Team</Title>
          
          <List>
            <ListItem>Clone or download repository from GitHub</ListItem>
            <ListItem>Install dependencies with yarn</ListItem>
            <ListItem>
              To start development server run npm start command
            </ListItem>
            <ListItem>
              Run tests to make sure your changes do not break the build
            </ListItem>
            <ListItem>Submit a pull request once you are done</ListItem>
          </List>
        </Box>
      </Center> */}
      <FooterSocial />
    </>
  );
}
