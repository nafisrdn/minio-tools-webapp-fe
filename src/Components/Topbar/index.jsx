import { DarkMode, LightMode, Menu } from '@mui/icons-material';
import { IconButton, useTheme, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { themeActions } from '../../store/theme';

function Topbar(props) {
  const { onMenuClick } = props;

  const theme = useTheme();
  const dispatch = useDispatch();

  const handleModeClick = () => {
    dispatch(themeActions.toggleColorMode());
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" height={90}>
      <IconButton onClick={onMenuClick}>
        <Menu />
      </IconButton>

      <IconButton onClick={handleModeClick}>
        {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Box>
  );
}

export default Topbar;
