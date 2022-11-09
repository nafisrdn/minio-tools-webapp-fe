import { People, Security } from '@mui/icons-material';
import { Box, Grid, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import generateUsers from '../../data/dummy-bucket-users';
import { tokens } from '../../theme';
import SelectiveList from '../SelectiveList';
import BucketHeader from './BucketHeader';

const selectiveUserListHeader = {
  icon: <People />,
  label: 'Users',
  count: 0
};

const selectivePoliciesListHeader = {
  icon: <Security />,
  label: 'Policies',
  count: 0
};

function BucketListItem(props) {
  const { bucket } = props;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [userItems, setUsersItems] = useState();

  useEffect(() => {
    const generatedUsers = generateUsers().map((user) => ({ id: user.id, text: user.accessKey }));

    setUsersItems(generatedUsers);
  }, []);

  return (
    <Grid item xs={12} md={6}>
      <Box bgcolor={colors.primary[400]} borderRadius={4}>
        <BucketHeader bucket={bucket} />

        {userItems && (
          <Grid item container padding={3}>
            <Grid item md={5} xs={12}>
              <SelectiveList header={selectiveUserListHeader} items={userItems} />
            </Grid>
            <Grid item md={2} xs={12}>
              <Box width="1px" height="100%" bgcolor={colors.greenAccent[400]} margin="auto" />
            </Grid>
            <Grid item md={5} xs={12}>
              <SelectiveList header={selectivePoliciesListHeader} items={userItems} />
            </Grid>
          </Grid>
        )}
      </Box>
    </Grid>
  );
}

export default BucketListItem;
