import { People } from '@mui/icons-material';
import { Box, Grid, useTheme } from '@mui/material';
import dummyBucketUsers from '../../data/dummy-bucket-users';
import { tokens } from '../../theme';
import SelectiveList from '../SelectiveList';
import BucketHeader from './BucketHeader';

const selectiveUserListData = {
  header: {
    icon: <People />,
    label: 'Users',
    count: 0
  },
  items: dummyBucketUsers.map((user) => ({ id: user.id, text: user.accessKey }))
};

function BucketListItem(props) {
  const { bucket } = props;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid item xs={12} md={6}>
      <Box bgcolor={colors.primary[400]} borderRadius={4}>
        <BucketHeader bucket={bucket} />

        <Grid item container padding={3}>
          <Grid item md={6} xs={12}>
            <SelectiveList
              header={selectiveUserListData.header}
              items={selectiveUserListData.items}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box bgcolor="red">a</Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default BucketListItem;
