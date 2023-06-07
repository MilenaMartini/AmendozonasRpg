import PropTypes from 'prop-types';
import styles from './inputEmail.module.css';

export function InputEmail({ placeholder, onChange, value }) {
  return (
    <input
      value={value}
      className={`${styles.Input} ${styles.CustomInput}`}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}

InputEmail.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string
};