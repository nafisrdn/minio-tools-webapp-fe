import { Search } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

function SearchField() {
  return (
    <FormControl variant="outlined" color="secondary">
      <InputLabel htmlFor="search-input">Search</InputLabel>
      <OutlinedInput
        id="search-input"
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Search />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default SearchField;
