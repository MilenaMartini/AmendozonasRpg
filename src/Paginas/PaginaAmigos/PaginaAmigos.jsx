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
  const { id } = jwtDecode(location.state.token);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  async function fetchData() {
    const response = await axios.get(`${API_BASE}/users/listfriends`, {
      headers: {
        Authorization: `Bearer ${location.state.token}`
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
    navigate('/principal');
  };

  // const handleAmigo = () => {
  // //   navigate('');
  // };

  return (
    <div className={styles.Div}>
      <div className={styles.perfil}>
        <div className={styles.infoContainer}>
          <h3>
            Nome: {name} {lastname}
          </h3>
        </div>
        <div className={styles.buttonContainer}>
          <Button texto="Editar" />
          <Button texto="Voltar" onClick={handleVoltar} />
        </div>
      </div>
      <br />

      <div className={styles.DivConteudo}>
        <div className={styles.barradePesquisa}>
          <div className={styles.espaco}>
            <input
              type="text"
              placeholder="Pesquisar..."
              className={styles.inputPesquisa}
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

export default PaginaAmigos;
