import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function SidebarLogo() {
  return (
    <Link to="/">
      <Grid paddingY={2} display="flex" justifyContent="center" alignItems="center">
        <img src={logo} alt="logo" />
      </Grid>
    </Link>
  );
}

export default SidebarLogo;
