import { useState, useEffect } from 'react';
import { FiInfo } from 'react-icons/fi';
import styles from './Card.module.css';

const Card = ({ nickname, description, location }) => {
  const [image, setImage] = useState(location);
  const [data, setData] = useState('');


  // useEffect(() => {
  //   async function fetchImage() {
  //     try {
  //       const response = await fetch(location);
  //       const blob = await response.blob();
  //       const imageURL = URL.createObjectURL(blob);
  //       setData (response.data?.user[0]);
  //       setImage(imageURL);
  //     } catch (error) {
  //       console.error('Erro ao obter a imagem do jogador:', error);
  //     }
  //   }

  //   fetchImage();
  // }, [data]);

  const handleEdit = () => {
    // edição do card
    console.log('Editar card:', nickname);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={image} alt="Imagem do personagem" />
        <div className={styles.description}>
          <h2>Nome: {nickname}</h2>
          <p>Descrição: {description}</p>
        </div>
        <button className={styles['edit-button']} onClick={handleEdit}>
          <FiInfo  size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;
