import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import RouterLink from 'next/link';
import ColourModeToggle from 'src/components/ColourModeToggle';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Chidlow - Developer</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Ben Chidlow's personal site. This includes his portfolio and resume"
        />
      </Head>
      <Container as="header" maxW="lg" my="2" display="flex" flexDir="row">
        <Box>
          <Heading as="h1">Ben Chidlow</Heading>
          <Heading as="h2" size="lg">
            Full stack
          </Heading>
          <Heading as="h2" size="lg">
            Software consultant
          </Heading>
        </Box>
        <Box marginLeft="auto">
          <ColourModeToggle />
        </Box>
      </Container>
      <Container
        maxW="lg"
        as="main"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <VStack pt="10rem" pb="1.5rem">
          <Heading as="h2">Under Construction!</Heading>
        </VStack>

        <VStack py="1.5rem">
          <Heading as="h3" size="sm">
            Some things do exist though, but I still have a lot of work to do!
          </Heading>

          <HStack>
            <RouterLink passHref href="/resume">
              <Button as="a" variant="solid">
                Resumé
              </Button>
            </RouterLink>
            <RouterLink passHref href="/blog">
              <Button as="a" variant="solid" isDisabled>
                Blog
              </Button>
            </RouterLink>
          </HStack>
        </VStack>
      </Container>
    </div>
  );
}
