import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import BasicCard from 'src/components/BasicCard';

const HomeMain: FC = () => (
  <Box>
    <BasicCard>
      <Heading as="h3" size="md" mb="0.5rem">
        Experience
      </Heading>
      <Grid templateColumns="1fr" gap="0.75rem">
        <Box>
          <Heading as="h4" size="sm">
            Woodside Technology
          </Heading>
          <Text>
            Help lead and development of an asset visualisation platform
          </Text>
          <Text>
            This involved full stack technical and niche web development, WebGL,
            Serverless AWS, Federated GraphQL, advanced DevOps, etc.
          </Text>
        </Box>
        <Box>
          <Heading as="h4" size="sm">
            East Metro Health
          </Heading>
          <Text>
            A fast, error resistant patiant onboarding app to help triage during
            the COVID-19 pandemic
          </Text>
          <Text>
            This had to built with a very small team in an extremely tight
            timeframe
          </Text>
        </Box>
        <Box>
          <Heading as="h4" size="sm">
            Purple Graph
          </Heading>
          <Text>
            An internal, company wide GraphQL service that encouraged innovation
            and cross cutting concerns in all of Purples internal apps
          </Text>
        </Box>
        <Box>
          <Heading as="h4" size="sm">
            Pedro
          </Heading>
          <Text>
            Pedro is a scheduling app that Purple now uses internally to manage
            consultant across different gigs
          </Text>
          <Text>
            It leverages a performant graphql backend that morphed into Purple
            Graph
          </Text>
        </Box>
        <Box>
          <Heading as="h4" size="sm">
            Department of Communities
          </Heading>
          <Text>
            Developed the frontend for a rural community connector site
          </Text>
          <Text>
            The web app had to be extremely lightweight and tolerent bad or loss
            of internet connection
          </Text>
        </Box>
      </Grid>
    </BasicCard>

    <Grid templateColumns="1fr 1fr" gap="1rem" pt="1rem">
      <BasicCard>
        <Heading as="h3" size="sm" mb="0.5rem">
          Employment
        </Heading>
        <Grid templateRows="auto auto" gap="0.5rem">
          <Box>
            <Heading as="h4" size="sm">
              Software Consultant
            </Heading>
            <Text>Telstra Purple</Text>
            <Text>Jan 2020 to present</Text>
          </Box>
          <Box>
            <Heading as="h4" size="sm">
              Graduate Consultant
            </Heading>
            <Text>Telstra Purple</Text>
            <Text>Jan 2019 to Dec 2020</Text>
          </Box>
        </Grid>
      </BasicCard>

      <BasicCard>
        <Heading as="h3" size="sm" mb="0.5rem">
          Education
        </Heading>
        <Grid templateRows="auto auto" gap="0.5rem">
          <Box>
            <Text as="b">University</Text>
            <Text>University of Western Australia</Text>
            <Text>Computer Science and Software Engineering</Text>
            <Text>Graduated 2018</Text>
          </Box>
        </Grid>
      </BasicCard>
    </Grid>
  </Box>
);

export default HomeMain;
