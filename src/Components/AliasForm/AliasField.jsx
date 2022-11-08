import { TextField } from '@mui/material';

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
  onChange: null,
  onBlur: null
};

export default AliasField;
