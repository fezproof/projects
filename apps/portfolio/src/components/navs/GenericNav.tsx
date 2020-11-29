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
        top={{ base: 'auto', lg: '0' }}
        right={{ base: '0', lg: 'auto' }}
        p="0.5rem"
        width={{ base: '100%', lg: 'auto' }}
        height={{ base: 'auto', lg: '100%' }}
      >
        <Grid
          gap="0.5rem"
          bg={bg}
          borderRadius="lg"
          as="nav"
          alignContent="center"
          gridAutoFlow={{ base: 'column', lg: 'row' }}
          gridTemplateColumns={{ base: 'none', lg: '1fr' }}
          gridAutoRows={{ base: '1fr', lg: 'none' }}
          my={{ base: '0', lg: 'auto' }}
          mx={{ base: 'auto', lg: '0' }}
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
          <ColourModeToggle />
        </Grid>
      </Box>
    </PrintHidden>
  );
});

export default GenericNav;
