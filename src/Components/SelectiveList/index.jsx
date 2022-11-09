import PropTypes from 'prop-types';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ListHeader from './ListHeader';

function SelectiveList(props) {
  const { header, items, onClick } = props;

  return (
    <Box>
      <ListHeader icon={header.icon} label={header.label} count={header.count} />

      <List sx={{ maxHeight: '210px', position: 'relative', overflow: 'auto' }}>
        {items.map((item) => (
          <ListItem key={item.id} disableGutters disablePadding>
            <ListItemButton onClick={onClick}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

SelectiveList.defaultProps = {
  onClick: () => {}
};

SelectiveList.propTypes = {
  header: PropTypes.shape({
    icon: PropTypes.element,
    label: PropTypes.string,
    count: PropTypes.number
  }).isRequired,

  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,

  onClick: PropTypes.func
};

export default SelectiveList;
