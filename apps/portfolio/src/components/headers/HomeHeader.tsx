import { Box, Heading, Text, Grid } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, SettingsIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import BasicCard from 'src/components/BasicCard';

const HomeHeader: FC = () => (
  <Grid gap="1rem">
    <BasicCard>
      <Box pb="1rem">
        <Heading as="h1">Ben Chidlow</Heading>
        <Heading as="h2" size="md">
          Full Stack
        </Heading>
        <Heading as="h2" size="md">
          Software Consultant
        </Heading>
      </Box>
      <Heading as="h3" size="md">
        Contact details
      </Heading>

      <Text>
        <PhoneIcon />
        &nbsp; 0409 338 032
      </Text>
      <Text>
        <EmailIcon />
        &nbsp; benchidlow1@gmail.com
      </Text>
      <Text>
        <SettingsIcon />
        &nbsp; github.com/fezproof
      </Text>
    </BasicCard>
  </Grid>
);

export default HomeHeader;
