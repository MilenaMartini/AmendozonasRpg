// Importações do React
import { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import jwtDecode from 'jwt-decode';


// Importações axios
import axios from 'axios';

// Importações componentes
import { Button } from '../../Componentes/Button/Button';
import Card from '../../Componentes/Card/Card';


// Importação CSS
import styles from './PaginaPrincipal.module.css';

// Importações de imagens
import searchIcon from '../../Componentes/img/Lupa.png';
import Mais from '../../Componentes/img/Mais.png';

const API_BASE = 'https://amendozonas.vercel.app';

function PaginaPrincipal() {
  const location = useLocation()

  const { id } = jwtDecode(location.state.token)

  console.log(id)

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  
  async function fetchData() {
    const response = await axios.get(`${API_BASE}/users/find/${id}`,
    {
      headers: {
        Authorization: `Bearer ${location.state.token}`
      }
    })
    console.log(response)
    setName(response.data.name)
    setLastname(response.data.last_name)
  }

  useEffect (() => {
    fetchData()
  }, [id])

  
const navigate = useNavigate();

const handleVoltar = () => {
  navigate(-1); // volta
};

const handleAmigo = () => {
  navigate('/Amigos'); // volta
};


  return (
    <div className={styles.Div}>
      <div className={styles.perfil}>
      <div className={styles.infoContainer}>
      <h3>Nome:
          {name}
          {lastname}
      </h3>
        </div>
        <div className={styles.buttonContainer}>
          <Button texto='Amigos' onClick={handleAmigo}/>
          <Button texto='Voltar' onClick={handleVoltar}/>
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

        <div className={styles.card}>

          <div className={styles.cardMais}>
            <button className={styles.buttonNovo}>
              <img src={Mais} className={styles.imgmais} alt="Imagem do personagem" />
            </button>
          </div>

          <Card
            imageSrc="caminho_para_imagem.jpg"
            name="Nome do personagem"
            description="Descrição do personagem"
            editLink="pagina_de_edicao"
          />

          <Card
            imageSrc="caminho_para_imagem.jpg"
            name="Nome do personagem"
            description="Descrição do personagem"
            editLink="pagina_de_edicao"
          />

          <Card
            imageSrc="caminho_para_imagem.jpg"
            name="Nome do personagem"
            description="Descrição do personagem"
            editLink="pagina_de_edicao"
          />

          <Card
            imageSrc="caminho_para_imagem.jpg"
            name="Nome do personagem"
            description="Descrição do personagem"
            editLink="pagina_de_edicao"
          />
          </div>
         
      </div>
    </div>
  );
}

export default PaginaPrincipal;
