import { Center, Container, Heading, Link, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import RouterLink from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Chidlow - CV</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Resume for printing for Ben Chidlow"
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
