import { Folder, People, RemoveRedEye, Security } from '@mui/icons-material';
import { List, Typography } from '@mui/material';
import SidebarLinkItem from './SidebarLinkItem';

const linksData = [
  {
    text: 'Aliases',
    to: '/aliases',
    icon: <RemoveRedEye />
  },
  {
    text: 'Buckets',
    to: '/buckets',
    icon: <Folder />
  },
  {
    text: 'Users',
    to: '/users',
    icon: <People />
  },
  {
    text: 'Policies',
    to: '/policies',
    icon: <Security />
  }
];

function SidebarLinks() {
  return (
    <List>
      <Typography variant="subtitle2" px={2}>
        COMMON
      </Typography>
      {linksData.map((item) => (
        <SidebarLinkItem key={item.to} icon={item.icon} text={item.text} to={item.to} />
      ))}
    </List>
  );
}

export default SidebarLinks;
