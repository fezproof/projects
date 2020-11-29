import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

const ColourModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  return (
    <IconButton
      aria-label="Toggle colour mode"
      onClick={toggleColorMode}
      icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
    />
  );
};

export default ColourModeToggle;
