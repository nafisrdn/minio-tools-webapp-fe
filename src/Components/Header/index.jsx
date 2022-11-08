import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

function Header(props) {
  const { title, action } = props;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={8}>
      <Box display="flex" alignItems="center">
        <Box width={70} height={3} bgcolor={colors.greenAccent[400]} marginRight={2} />
        <Typography variant="h1">{title}</Typography>
      </Box>
      {action}
    </Box>
  );
}

export default Header;
