import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { chakra, IconButton, useColorMode } from '@chakra-ui/react';

const ColourModeToggle = chakra(({ className }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  return (
    <IconButton
      aria-label="Toggle colour mode"
      onClick={toggleColorMode}
      variant="ghost"
      icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
      className={className}
    />
  );
});

export default ColourModeToggle;
