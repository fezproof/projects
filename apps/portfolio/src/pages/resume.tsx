import { Box, Button, Container, Grid, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import HomeHeader from 'src/components/headers/HomeHeader';
import PrintHidden from 'src/components/helpers/PrintHidden';
import HomeAside from 'src/components/asides/HomeAside';
import HomeMain from 'src/components/mains/HomeMain';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>Ben Chidlow - Resume</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Ben Chidlow's personal resume. Should be ready to print straight away!"
        />
      </Head>

      <PrintHidden>
        <Button onClick={toggleColorMode} textTransform="uppercase">
          toggle {colorMode === 'light' ? 'dark' : 'light'}
        </Button>
      </PrintHidden>
      <Container maxW="lg" py="1rem">
        <Grid
          templateAreas={`
            "header main"
            "aside main"
          `}
          gridTemplateColumns="15rem auto"
          gap="1rem"
        >
          <Box as="header" gridArea="header">
            <HomeHeader />
          </Box>
          <Box as="aside" gridArea="aside">
            <HomeAside />
          </Box>
          <Box as="main" gridArea="main">
            <HomeMain />
          </Box>
          {/* <Box as="footer" gridArea="footer"></Box> */}
        </Grid>
      </Container>
    </div>
  );
}
