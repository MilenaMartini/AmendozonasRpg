import { FaPencilAlt } from 'react-icons/fa';
import styles from './CardAmigos.module.css';



const CardAmigos = () => {

  return (
    <div className={styles.card}>
      <h2>Name:</h2>
      <p>Descrição:</p>
      <button className={styles.perfil} >
      <FaPencilAlt size={20} />
      </button>
      <button className={styles.deletar} >
      <FaPencilAlt size={20} />
      </button>
    </div>
  );
};

export default CardAmigos;
