import { Grid } from '@mui/material';
import BucketListItem from '../../Components/BucketListItem';
import Header from '../../Components/Header';
import SearchField from '../../Components/SearchField';
import dummyBuckets from '../../data/dummy-buckets';

function BucketsPage() {
  return (
    <>
      <Header title="Buckets" action={<SearchField />} />
      <Grid container spacing={2}>
        {dummyBuckets.map((bucket) => (
          <BucketListItem key={bucket.name} bucket={bucket} />
        ))}
      </Grid>
    </>
  );
}

export default BucketsPage;
