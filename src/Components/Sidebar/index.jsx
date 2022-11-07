import { Box, useTheme } from '@mui/material';
import SidebarLinks from './SidebarLinks';
import SidebarLogo from './SidebarLogo';
import { tokens } from '../../theme';

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="stretch"
      flexDirection="column"
      width={248}
      bgcolor={colors.primary[400]}
      borderRight={1}
      borderColor={colors.grey[900]}
      boxShadow={1}>
      <SidebarLogo />

      <SidebarLinks />
    </Box>
  );
}

export default Sidebar;
