import { background, extendTheme } from '@chakra-ui/react';

const colourMode = (lightMode: string, darkMode: string) => ({ colorMode }) =>
  colorMode === 'dark' ? darkMode : lightMode;

const config = {
  useSystemColorMode: true,
};

const customTheme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      html: {
        minHeight: '100%',
      },
    }),
  },
});

export default customTheme;
