// // Importações do React
// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';

// // Importações axios
// import axios from 'axios';

// Importações componentes
import { Button } from '../../Componentes/Button/Button';
import CardAmigos from '../../Componentes/CardAmigos/CardAmigos'


// Importação CSS
import styles from './PaginaAmigos.module.css';

// Importações de imagens
import adicionar from '../../Componentes/img/Mais.png';

function PaginaAmigos() {

  return (
    <div className={styles.Div}>
      <div className={styles.perfil}>
      <div className={styles.infoContainer}>
      <h3>Nome:

      </h3>
        </div>
        <div className={styles.buttonContainer}>
          <Button texto='Amigos' />
          <Button texto='Voltar'/>
        </div>
      </div>
      <br />

      <div className={styles.DivConteudo}>
        <div className={styles.barradePesquisa}>
          <div className={styles.espaco}>
            <input
              type="text"
              placeholder="Adicionar Amigo"
              className={styles.inputPesquisa}
            />

          <button className={styles.searchButton}>
            <img className={styles.mais} src={adicionar} alt="Ícone de pesquisa" />
          </button>
          </div>
        </div>

        <div className={styles.card}>
            <CardAmigos>
              
            </CardAmigos>
          </div>
         
      </div>
    </div>
  );
}

export default PaginaAmigos;
