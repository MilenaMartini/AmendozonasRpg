import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Card from '../Card/Card';
import styles from './DivCards.module.css';
import Mais from '../../Componentes/img/Mais.png';

const API_BASE = 'https://amendozonas.vercel.app';

export function DivCards() {
  const [players, setPlayers] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const token = localStorage.getItem('token')

      const response = await axios.get(`${API_BASE}/players/userplayers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { user } = response.data;
      setPlayers(user);
      console.log(response);
    } catch (error) {
      console.error('Erro ao obter os dados dos jogadores:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.card}>
      <div className={styles.cardMais}>
        <button className={styles.buttonNovo}>
          <img src={Mais} className={styles.imgmais} alt="Imagem do personagem" />
        </button>
      </div>

      {players.map((player) => {
        return (
          <Card
            key={player._id}
            location={player.location}
            nickname={player.nickname}
            description={player.description}
            editLink={player.editLink}
          />
        );
      })}
    </div>
  );
}
