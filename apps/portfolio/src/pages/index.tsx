import { Box, Button, Container, Grid, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import HomeHeader from 'src/components/headers/HomeHeader';
import PrintHidden from 'src/components/helpers/PrintHidden';
import HomeAside from 'src/components/HomeAside';
import HomeMain from 'src/components/mains/HomeMain';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

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

      <PrintHidden>
        <Button onClick={toggleColorMode} textTransform="uppercase">
          toggle {colorMode === 'light' ? 'dark' : 'light'}
        </Button>
      </PrintHidden>
      <Container maxW="lg">
        <Grid
          templateAreas={`
            "header header"
            "aside main"
            "aside main"
            "footer footer"
          `}
          gridTemplateColumns="14rem auto"
        >
          <Box as="header" gridArea="header" p="1rem">
            <HomeHeader />
          </Box>
          <Box as="aside" gridArea="aside" p="1rem">
            <HomeAside />
          </Box>
          <Box as="main" gridArea="main" p="1rem">
            <HomeMain />
          </Box>
          <Box as="footer" gridArea="footer" p="1rem">
            Footer
          </Box>
        </Grid>
      </Container>
    </div>
  );
}
