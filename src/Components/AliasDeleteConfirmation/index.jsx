import PropTypes from 'prop-types';
import ConfirmationDialog from '../ConfirmationDialog';

function AliasDeleteConfirmation(props) {
  const { alias, open, onClose } = props;

  const handleDelete = () => {
    // TODO: handle delete
    console.log(alias);
  };

  return (
    <ConfirmationDialog
      open={open}
      title={`Are you sure delete ${alias.name}?`}
      description="This action can't be undone."
      onClose={onClose}
      onAgree={handleDelete}
    />
  );
}

AliasDeleteConfirmation.propTypes = {
  alias: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default AliasDeleteConfirmation;
