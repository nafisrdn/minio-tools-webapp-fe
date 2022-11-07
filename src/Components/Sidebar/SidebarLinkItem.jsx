import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function SidebarLinkItem(props) {
  const { icon, text, to } = props;

  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <ListItemButton selected={isActive}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      )}
    </NavLink>
  );
}

SidebarLinkItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default SidebarLinkItem;
