import { FaPencilAlt } from 'react-icons/fa';
import styles from './CardAmigos.module.css';



const CardAmigos = () => {

  return (
    <div className={styles.card}>
      <h2>Name:</h2>
      <p>Descrição:</p>
      <button className={styles['Perfil']} >
      <FaPencilAlt size={20} />
      </button>
      <button className={styles['Deletar']} >
      <FaPencilAlt size={20} />
      </button>
    </div>
  );
};

export default CardAmigos;
