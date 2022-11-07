import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

function Layout(props) {
  const { children } = props;

  return (
    <Box display="flex" height="100%" width="100%">
      <Sidebar />
      <Box flex={1} overflow="auto">
        <Container>
          <Topbar />
          <Box component="main">{children}</Box>
        </Container>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType.isRequired
};

export default Layout;
