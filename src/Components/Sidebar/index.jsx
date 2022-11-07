import { Box, useTheme } from '@mui/material';
import SidebarLinks from './SidebarLinks';
import SidebarLogo from './SidebarLogo';
import { tokens } from '../../theme';

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width={248}
      height="100%"
      bgcolor={colors.primary[400]}
      borderRight={1}
      borderColor={theme.palette.divider}
      boxShadow={1}
      display="flex"
      justifyContent="stretch"
      flexDirection="column">
      <SidebarLogo />

      <SidebarLinks />
    </Box>
  );
}

export default Sidebar;
