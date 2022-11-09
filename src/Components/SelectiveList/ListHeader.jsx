import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

function ListHeader(props) {
  const { icon, label, count = 0 } = props;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingY={0.5}
      marginBottom={2}
      borderBottom={1}
      borderColor={colors.greenAccent[400]}>
      <Box display="flex">
        {icon}
        <Typography variant="subtitle1" marginLeft={1}>
          {label}
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ color: colors.greenAccent[100] }}>
          {count}
        </Typography>
      </Box>
    </Box>
  );
}

export default ListHeader;
