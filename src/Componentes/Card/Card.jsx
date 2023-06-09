import { FaPencilAlt } from 'react-icons/fa';
import styles from './Card.module.css';
import Player from '../../Componentes/img/tstcard.png'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const API_BASE = 'https://amendozonas.vercel.app';


const Card = () => {

  const location = useLocation()

  const { id } = jwtDecode(location.state.token)

  console.log(id)


  async function fetchData() {
    const response = await axios.get(`${API_BASE}/players/list`,
    {
      headers: {
        Authorization: `Bearer ${location.state.token}`
      }
    })
    console.log(response)
  }

  useEffect (() => {
    fetchData()
  }, [id])

  const handleEditClick = () => {
    // editar
  };

  return (
    <div className={styles.card}>
      <img src={Player} alt="Imagem do personagem" />
      <h2>Name:</h2>
      <p>Descrição:</p>
      <button className={styles['edit-button']} onClick={handleEditClick}>
      <FaPencilAlt size={20} />
      </button>
    </div>
  );
};

export default Card;
