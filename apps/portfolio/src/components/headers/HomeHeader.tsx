import { Heading, Box, HStack, VStack, Text, Flex } from '@chakra-ui/react';
import { FC } from 'react';

const HomeHeader: FC = () => (
  <Flex justifyContent="space-between">
    <Box>
      <Heading as="h1">Ben Chidlow</Heading>
      <Heading as="h2" size="md">
        Full Stack
      </Heading>
      <Heading as="h2" size="md">
        Software Consultant
      </Heading>
    </Box>
    <Box>
      <Heading as="h3" size="md">
        Contact details
      </Heading>
      <Text>0409 338 032</Text>
      <Text>benchidlow1@gmail.com</Text>
      <Text>https://github.com/fezproof</Text>
    </Box>
  </Flex>
);

export default HomeHeader;
