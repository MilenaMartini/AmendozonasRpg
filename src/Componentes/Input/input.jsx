//importação de bibliotecas
import PropTypes from 'prop-types';

//importação de styles
import styles from './input.module.css'

export function Input({ texto, onChange, type }) {
    return (
      <input
        className={`${styles.Input} ${styles.CustomInput}`}
        placeholder={texto}
        onChange={onChange}
        type={type}
      ></input>
    );
  }
  
  Input.propTypes = {
    texto: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    type: PropTypes.string
  };
