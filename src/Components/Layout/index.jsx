import { Box, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

function Layout(props) {
  const { children } = props;

  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleMenuClick = () => {
    setSidebarVisible((state) => !state);
  };

  return (
    <Box display="flex" height="100%" width="100%">
      {sidebarVisible && <Sidebar />}
      <Box flex={1} overflow="auto">
        <Container>
          <Topbar onMenuClick={handleMenuClick} />
          <Box component="main" marginBottom={5}>
            {children}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
