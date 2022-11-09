import { DarkMode, LightMode, Menu } from '@mui/icons-material';
import { IconButton, useTheme, Box } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';

function Topbar(props) {
  const { onMenuClick } = props;

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" height={90}>
      <IconButton onClick={onMenuClick}>
        <Menu />
      </IconButton>

      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Box>
  );
}

export default Topbar;
