import { Box, Container } from '@mui/material';
import Sidebar from '../../Components/Sidebar';
import Topbar from '../../Components/Topbar';

function BucketsPage() {
  return (
    <Box display="flex" height="100%" width="100%">
      <Sidebar />
      <Container>
        <Box flex={1}>
          <Topbar />
          <main>
            <h1>Buckets</h1>
          </main>
        </Box>
      </Container>
    </Box>
  );
}

export default BucketsPage;
