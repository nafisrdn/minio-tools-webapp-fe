import { AccessTime } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

function HeaderDivider() {
  return (
    <Box
      width="90%"
      height={10}
      bgcolor={color.greenAccent[400]}
      sx={{ borderBottomRightRadius: 100 }}
    />
  );
}

function BucketName(props) {
  const { bucket } = props;

  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  return (
    <Box display="inline-block">
      <Box paddingX={3} paddingTop={3} marginBottom={1.5}>
        <Typography variant="h3" marginBottom={0.5}>
          {bucket.name}
        </Typography>

        <Box display="flex" gap={1} sx={{ color: color.greenAccent[100] }}>
          <AccessTime />
          <Typography>{bucket.lastModified}</Typography>
        </Box>
      </Box>

      <HeaderDivider />
    </Box>
  );
}

export default BucketName;
