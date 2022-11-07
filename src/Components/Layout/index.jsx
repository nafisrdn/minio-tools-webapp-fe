import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

function Layout(props) {
  const { children } = props;

  return (
    <Box display="flex" height="100%" width="100%">
      <Sidebar />
      <Container>
        <Box flex={1}>
          <Topbar />
          <main>{children}</main>
        </Box>
      </Container>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType.isRequired
};

export default Layout;
