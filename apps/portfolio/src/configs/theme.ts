import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const config = {
  useSystemColorMode: true,
};

const customTheme = extendTheme({ config });

export default customTheme;
