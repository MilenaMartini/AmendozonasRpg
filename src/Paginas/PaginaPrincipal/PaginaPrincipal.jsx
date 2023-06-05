import styles from './PaginaPrincipal.module.css';
import { Button } from '../../Componentes/Button/Button';
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
      <br /><br />
      <div className={styles.DivConteudo}>
        <Card
          imageSrc="caminho_para_imagem.jpg"
          name="Nome do personagem"
          description="Descrição do personagem"
          editLink="pagina_de_edicao"
        />
      </div>
    </div>
  );
}

export default PaginaPrincipal;
