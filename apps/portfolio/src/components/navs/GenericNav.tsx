import { Box, Grid, Button, chakra, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import ColourModeToggle from '../ColourModeToggle';
import PrintHidden from '../helpers/PrintHidden';

const GenericNav = chakra(({ className }) => {
  const bg = useColorModeValue('gray.200', 'gray.700');
  return (
    <PrintHidden className={className}>
      <Box
        position="fixed"
        display="flex"
        justifyContent="center"
        zIndex="10"
        bottom="0"
        left="0"
        top="auto"
        right="0"
        p="0.5rem"
        width="100%"
        height="auto"
      >
        <Grid
          gap="0.5rem"
          bg={bg}
          borderRadius="lg"
          as="nav"
          alignContent="center"
          gridAutoFlow="column"
          gridTemplateColumns="none"
          gridAutoRows="1fr"
          my="0"
          mx="auto"
          p="0.5rem"
        >
          <Link passHref href="/">
            <Button variant="ghost" as="a">
              Home
            </Button>
          </Link>
          <Link passHref href="/resume">
            <Button variant="ghost" as="a">
              Resumé
            </Button>
          </Link>
          <Link passHref href="/blog">
            <Button variant="ghost" isDisabled as="a">
              Blog
            </Button>
          </Link>
          <ColourModeToggle />
        </Grid>
      </Box>
    </PrintHidden>
  );
});

export default GenericNav;
