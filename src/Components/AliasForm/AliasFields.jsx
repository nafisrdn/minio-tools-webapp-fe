import AliasField from './AliasField';

const fieldsData = [
  {
    name: 'name',
    label: 'Name',
    type: 'text'
  },
  {
    name: 'url',
    label: 'URL',
    type: 'text'
  },
  {
    name: 'accessKey',
    label: 'Access Key',
    type: 'text'
  },
  {
    name: 'secretKey',
    label: 'Secret Key',
    type: 'password'
  }
];

function AliasFields(props) {
  const { values, errors, touched, onChange, onBlur } = props;

  return fieldsData.map((data) => (
    <AliasField
      key={data.name}
      name={data.name}
      label={data.label}
      value={values[data.name]}
      error={!!touched[data.name] && !!errors[data.name]}
      helperText={touched[data.name] && errors[data.name]}
      type={data.type}
      onChange={onChange}
      onBlur={onBlur}
    />
  ));
}

AliasFields.defaultProps = {
  onChange: () => {},
  onBlur: () => {}
};

export default AliasFields;
