import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Button } from '../../Componentes/Button/Button';
import { DivCards } from '../../Componentes/DivCards/DivCards';
import styles from './PaginaAmigos.module.css';
import searchIcon from '../../Componentes/img/Lupa.png';

const API_BASE = 'https://amendozonas.vercel.app';

function PaginaAmigos() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const { id } = jwtDecode(token);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  async function fetchData() {
    const response = await axios.get(`${API_BASE}/users/listfriends`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response);
    setName(response.data.name);
    setLastName(response.data.last_name);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/principal');
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.infoContainer}>
          <h3>
            Name: {name} {lastName}
          </h3>
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Edit" />
          <Button text="Back" onClick={handleBack} />
        </div>
      </div>
      <br />

      <div className={styles.contentContainer}>
        <div className={styles.searchBar}>
          <div className={styles.space}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />

            <button className={styles.searchButton}>
              <img src={searchIcon} alt="Search Icon" />
            </button>
          </div>
        </div>

        <DivCards />
      </div>
    </div>
  );
}

export default PaginaAmigos;