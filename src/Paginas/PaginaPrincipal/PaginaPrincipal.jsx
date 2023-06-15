import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

// Importações axios
import axios from 'axios';

// Importações componentes
import { Button } from '../../Componentes/Button/Button';
import { DivCards } from '../../Componentes/DivCards/DivCards';

// Importação CSS
import styles from './PaginaPrincipal.module.css';

// Importações de imagens
import searchIcon from '../../Componentes/img/Lupa.png';

const API_BASE = 'https://amendozonas.vercel.app';

function PaginaPrincipal() {
  const token = localStorage.getItem('token');
  const { id } = jwtDecode(token);

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  async function fetchData() {
    const response = await axios.get(`${API_BASE}/users/find/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response);
    setName(response.data.name);
    setLastname(response.data.last_name);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); // volta
  };

  const handleAmigo = () => {
    navigate('/amigos'); // volta
  };

  return (
    <div className={styles.Div}>
      <div className={styles.profile}>
        <div className={styles.infoContainer}>
          <h3>
            Name: {name} {lastname}
          </h3>
        </div>
        <div className={styles.buttonContainer}>
          <Button texto="Amigos" onClick={handleAmigo} />
          <Button texto="Voltar" onClick={handleVoltar} />
        </div>
      </div>
      <br />

      <div className={styles.contentDiv}>
        <div className={styles.searchBar}>
          <div className={styles.space}>
            <input
              type="text"
              placeholder="Pesquisar..."
              className={styles.searchInput}
            />

            <button className={styles.searchButton}>
              <img src={searchIcon} alt="Ícone de pesquisa" />
            </button>
          </div>
        </div>

        <DivCards />
      </div>
    </div>
  );
}

export default PaginaPrincipal;
