import PropTypes from 'prop-types';
import styles from './inputEmail.module.css';

export function InputEmail({ placeholder, onChange }) {
  return (
    <input
      className={`${styles.Input} ${styles.CustomInput}`}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}

InputEmail.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
