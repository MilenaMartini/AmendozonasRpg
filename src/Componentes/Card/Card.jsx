import { FaPencilAlt } from 'react-icons/fa';

import styles from './Card.module.css';
import Player from '../../Componentes/img/tstcard.png';



const Card = () => {
  
  return (
    <div className={styles.cardContainer}>
      {/* botao de mais */}
      
        <div  className={styles.card}>
          <img src={Player} alt="Imagem do personagem" />
          <h2>Name: </h2>
          <p>Descrição: </p>
          <button className={styles['edit-button']} >
            <FaPencilAlt size={20} />
          </button>
        </div>
      
    </div>
  );
};

export default Card;
