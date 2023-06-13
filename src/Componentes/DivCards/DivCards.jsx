import Card from '../Card/Card';

import styles from './DivCards.module.css';
import Mais from '../../Componentes/img/Mais.png';
import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const API_BASE = 'https://amendozonas.vercel.app';

const location = useLocation();
  const [players, setPlayers] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE}/players/userplayers`, {
        headers: {
          Authorization: `Bearer ${location.state.token}`,
        },
      });

      const { user } = response.data;
      setPlayers(user);
    } catch (error) {
      console.error('Erro ao obter os dados dos jogadores:', error);
    }
  }, [location.state.token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const handleEditClick = () => {
  //   // editar
  // };

export function DivCards() {
  return (
    <div className={styles.card}>
      <div className={styles.cardMais}>
        <button className={styles.buttonNovo}>
          <img src={Mais} className={styles.imgmais} alt="Imagem do personagem" />
        </button>
      </div>

      {players.map((player) => (
        <div key={player._id} className={styles.card}>
        <img src={Player.filename} alt="Imagem do personagem" />
        <h2>Name: {player.nickname}</h2>
        <p>Descrição: {player.description}</p>
        {/* <button className={styles['edit-button']} onClick={handleEditClick}>
          <FaPencilAlt size={20} />
        </button> */}
      </div>
        ))}

      <Card
        imageSrc="caminho_para_imagem.jpg"
        name="Nome do personagem"
        description="Descrição do personagem"
        editLink="pagina_de_edicao"
      />
    </div>
  );
}
