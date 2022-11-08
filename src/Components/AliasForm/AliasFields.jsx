import PropTypes from 'prop-types';
import AliasField from './AliasField';

const fieldsData = (values) => [
  {
    name: 'name',
    label: 'Name',
    value: values.name,
    type: 'text'
  },
  {
    name: 'url',
    label: 'URL',
    value: values.url,
    type: 'text'
  },
  {
    name: 'accessKey',
    label: 'Access Key',
    value: values.accessKey,
    type: 'text'
  },
  {
    name: 'secretKey',
    label: 'Secret Key',
    value: values.secretKey,
    type: 'password'
  }
];

function AliasFields(props) {
  const { values, onChange, onBlur } = props;

  return fieldsData(values).map((data) => (
    <AliasField
      key={data.name}
      name={data.name}
      label={data.label}
      value={data.value}
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

AliasFields.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    accessKey: PropTypes.string.isRequired,
    secretKey: PropTypes.string.isRequired
  }),
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default AliasFields;
