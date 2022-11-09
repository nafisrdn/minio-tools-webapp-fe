import { Box, Grid, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import BucketHeader from './BucketHeader';

function BucketListItem(props) {
  const { bucket } = props;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid item xs={6}>
      <Box height={382} bgcolor={colors.primary[400]} borderRadius={4}>
        <BucketHeader bucket={bucket} />
      </Box>
    </Grid>
  );
}

export default BucketListItem;
