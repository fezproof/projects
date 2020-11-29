import { Box, Grid, Button, chakra, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import ColourModeToggle from '../ColourModeToggle';
import PrintHidden from '../helpers/PrintHidden';

const GenericNav = chakra(({ className }) => {
  const bg = useColorModeValue('cyan.100', 'cyan.800');
  return (
    <PrintHidden className={className}>
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        backgroundColor={bg}
        position="fixed"
        zIndex="10"
        bottom="0"
        left="0"
        top={{ base: 'auto', lg: '0' }}
        right={{ base: '0', lg: 'auto' }}
        px={{ base: '1rem', lg: '0' }}
        py={{ base: '0', lg: '1rem' }}
        width={{ base: '100%', lg: '6rem' }}
        height={{ base: '5rem', lg: '100%' }}
        flexDirection={{ base: 'row', lg: 'column' }}
      >
        <Link passHref href="/">
          <Button
            variant="ghost"
            mx={{ base: '0.5rem', lg: '0' }}
            my={{ base: '0', lg: '0.5rem' }}
            width={{ lg: '100%' }}
            as="a"
          >
            Home
          </Button>
        </Link>
        <Link passHref href="/resume">
          <Button
            variant="ghost"
            mx={{ base: '0.5rem', lg: '0' }}
            my={{ base: '0', lg: '0.5rem' }}
            width={{ lg: '100%' }}
            as="a"
          >
            Resumé
          </Button>
        </Link>
        <ColourModeToggle
          marginLeft={{ base: 'auto', lg: '0' }}
          marginTop={{ base: '0', lg: 'auto' }}
        />
      </Box>
    </PrintHidden>
  );
});

export default GenericNav;
