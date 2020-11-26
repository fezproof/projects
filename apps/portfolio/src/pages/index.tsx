import { Center, Container, Heading, Link, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import RouterLink from 'next/link';

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

      <Container maxW="lg">
        <Center py="3rem">
          <VStack>
            <Heading as="h1">Under Construction!</Heading>
            <Heading as="h2" size="lg" mb="5rem">
              Please check back later :)
            </Heading>
            <RouterLink href="/resume">
              <Link>Resume</Link>
            </RouterLink>
          </VStack>
        </Center>
      </Container>
    </div>
  );
}
