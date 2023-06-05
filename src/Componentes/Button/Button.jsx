import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({ texto, onClick }) {
  return (
    <button className={styles.ButtonEnter} onClick={onClick}>
      {texto}
    </button>
  );
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
