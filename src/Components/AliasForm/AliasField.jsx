import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const textFieldProps = {
  fullWidth: true,
  variant: 'outlined',
  margin: 'normal'
};

function AliasField(props) {
  const { name, label, value, onChange, onBlur } = props;

  return (
    <TextField
      fullWidth={textFieldProps.fullWidth}
      variant={textFieldProps.variant}
      margin={textFieldProps.margin}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

AliasField.defaultProps = {
  onChange: () => {},
  onBlur: () => {}
};

AliasField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default AliasField;
