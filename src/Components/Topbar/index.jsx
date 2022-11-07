import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';

function Topbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" width="100%" height={90}>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Box>
  );
}

export default Topbar;
