import { ChakraProvider } from '@chakra-ui/react';
import customTheme from 'src/configs/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
