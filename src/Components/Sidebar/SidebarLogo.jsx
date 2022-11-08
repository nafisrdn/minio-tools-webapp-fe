import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function SidebarLogo() {
  return (
    <Link to="/">
      <Grid
        paddingY={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ '.logo': { maxWidth: '100%' } }}>
        <img src={logo} alt="logo" className="logo" />
      </Grid>
    </Link>
  );
}

export default SidebarLogo;
