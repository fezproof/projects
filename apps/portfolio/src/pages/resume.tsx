import { Box, Button, Container, Grid, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import ResumeHeader from 'src/components/headers/ResumeHeader';
import PrintHidden from 'src/components/helpers/PrintHidden';
import ResumeAside from 'src/components/asides/ResumeAside';
import ResumeMain from 'src/components/mains/ResumeMain';

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
            <ResumeHeader />
          </Box>
          <Box as="aside" gridArea="aside">
            <ResumeAside />
          </Box>
          <Box as="main" gridArea="main">
            <ResumeMain />
          </Box>
          {/* <Box as="footer" gridArea="footer"></Box> */}
        </Grid>
      </Container>
    </div>
  );
}
