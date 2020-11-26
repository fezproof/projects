import { Box, chakra, Grid, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import BasicCard from 'src/components/BasicCard';

const HomeMain: FC = () => (
  <Box>
    <Heading size="sm" mb="0.5rem">
      Experience
    </Heading>
    <Grid pb="1rem" templateColumns="1fr 1fr" gap="0.5rem">
      <BasicCard>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
      </BasicCard>
      <BasicCard>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
      </BasicCard>
      <BasicCard>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
      </BasicCard>
      <BasicCard>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
      </BasicCard>
      <BasicCard>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
      </BasicCard>
      <BasicCard>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
        <Text>This is some experience stuff</Text>
      </BasicCard>
    </Grid>
    <Heading size="sm" mb="0.5rem">
      Employment
    </Heading>
    <Grid mb="1rem" templateColumns="1fr 1fr" gap="0.5rem">
      <BasicCard>
        <Text as="b">Software Consultant</Text>
        <Text>Telstra Purple</Text>
        <Text>Jan 2020 to present</Text>
      </BasicCard>
      <BasicCard>
        <Text as="b">Graduate Consultant</Text>
        <Text>Telstra Purple</Text>
        <Text>Jan 2019 to Dec 2020</Text>
      </BasicCard>
    </Grid>
    <Heading size="sm" mb="0.5rem">
      Education
    </Heading>
    <Grid mb="1rem" templateColumns="1fr 1fr" gap="0.5rem">
      <BasicCard>
        <Text as="b">University</Text>
        <Text>Computer Science and Software Engineering</Text>
        <Text>Graduated 2018</Text>
      </BasicCard>
    </Grid>
  </Box>
);

export default HomeMain;
