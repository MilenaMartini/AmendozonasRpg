import styles from './PaginaPrincipal.module.css';
import {Input} from '../../Componentes/Input/input'
import { Button } from '../../Componentes/Button/Button';
import searchIcon from '../../Componentes/img/Lupa.png';
import Mais from '../../Componentes/img/Mais.png'
import Card from '../../Componentes/Card/Card';

function PaginaPrincipal() {
  return (
    <div className={styles.Div}>
      <div className={styles.perfil}>
      <div className={styles.infoContainer}>
          <h2>Nome:</h2>
        </div>
        <div className={styles.buttonContainer}>
          <Button texto='Editar' />
          <Button texto='Voltar' />
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
