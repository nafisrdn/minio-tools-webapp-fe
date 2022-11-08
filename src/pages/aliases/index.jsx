import { Add } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import AliasDeleteConfirmation from '../../Components/AliasDeleteConfirmation';
import NewAliasForm from '../../Components/NewAliasForm';
import dummyAliases from '../../data/dummy-aliases';

function AliasesPage() {
  const theme = useTheme();

  const [newAliasFormVisible, setNewAliasFormVisible] = useState(false);
  const [deleteConfirmationDialogOpen, setDeleteConfirmationDialogOpen] = useState(false);
  const [selectedAliasToDelete, setSelectedAliasToDelete] = useState(null);

  const handleAliasDeleteClick = (alias) => {
    setSelectedAliasToDelete(alias);
    setDeleteConfirmationDialogOpen(true);
  };

  return (
    <>
      <NewAliasForm
        visible={newAliasFormVisible}
        onClose={() => {
          setNewAliasFormVisible(false);
        }}
      />

      {selectedAliasToDelete && (
        <AliasDeleteConfirmation
          open={deleteConfirmationDialogOpen}
          alias={selectedAliasToDelete}
          onClose={() => {
            setDeleteConfirmationDialogOpen(false);
          }}
        />
      )}

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h1>Aliases</h1>
        <Fab color="secondary" aria-label="add" onClick={() => setNewAliasFormVisible(true)}>
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
                <TableCell>{index + 1}</TableCell>
                <TableCell>{alias.name}</TableCell>
                <TableCell>{alias.accessKey}</TableCell>
                <TableCell>{alias.url}</TableCell>
                <TableCell align="right">
                  {alias.selected ? (
                    <Chip
                      label="Selected"
                      sx={{
                        color: theme.palette.common.white
                      }}
                    />
                  ) : (
                    <ButtonGroup variant="contained">
                      <Button color="secondary" variant="outlined">
                        Select
                      </Button>

                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                          handleAliasDeleteClick(alias);
                        }}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  )}
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
