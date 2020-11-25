import {
  Heading,
  Text,
  Box,
  Center,
  Stack,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center m="24px">
        <Stack direction={['column']} spacing="24px">
          <header>
            <Center>
              <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
            </Center>
          </header>
          <Box
            as="main"
            p="6"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Heading mb="1rem">Welcome to a pretty cool portfolio</Heading>
            <Text>This is some text to test things</Text>
          </Box>

          <Box
            as="footer"
            p="6"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            Made by fezproof
          </Box>
        </Stack>
      </Center>
    </div>
  );
}
