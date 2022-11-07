import { Add } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme
} from '@mui/material';
import dummyAliases from '../../data/dummy-aliases';

function AliasesPage() {
  const theme = useTheme();

  console.log(theme);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h1>Aliases</h1>
        <Fab color="secondary" aria-label="add">
          <Add />
        </Fab>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>AccessKey</TableCell>
              <TableCell>URL</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dummyAliases.map((alias, index) => (
              <TableRow
                key={alias.name}
                sx={{
                  background: alias.selected ? theme.palette.secondary.main : '',
                  color: alias.selected
                    ? theme.palette.getContrastText(theme.palette.secondary.main)
                    : '',
                  td: {
                    color: 'inherit'
                  }
                }}>
                <TableCell>{index}</TableCell>
                <TableCell>{alias.name}</TableCell>
                <TableCell>{alias.accessKey}</TableCell>
                <TableCell>{alias.url}</TableCell>
                <TableCell align="right">
                  <ButtonGroup variant="contained">
                    {!alias.selected && (
                      <Button color="secondary" variant="outlined">
                        Select
                      </Button>
                    )}

                    <Button
                      color={alias.selected ? 'primary' : 'secondary'}
                      variant="outlined"
                      sx={{
                        color: alias.selected ? theme.palette.common.white : null
                      }}>
                      Edit
                    </Button>
                    <Button color="error" variant="contained">
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AliasesPage;
