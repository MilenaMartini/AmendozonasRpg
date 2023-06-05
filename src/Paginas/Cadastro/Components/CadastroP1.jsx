import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CadastroP1.module.css';
import logo from '../../../Componentes/img/Logo.png';
import { Input } from '../../../Componentes/Input/input';
import { InputEmail } from '../../../Componentes/Input/inputEmail';
import { Button } from '../../../Componentes/Button/Button';

function CadastroP1({cadasroP1}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const sendData = () => {
    const dados = {
      name: nome,
      last_name: sobrenome,
      email,
      password: senha,
      confirm_password: confirmarSenha
    };

    cadasroP1(dados); // Chama a função de callback do componente pai e passa os dados
  };

  return (
    <div className={styles.Div}>
      <div className={styles.DivConteudo}>
        <img src={logo} className={styles.img} alt='Logo do site' />

        <div className={styles.InputsLinha}>
          <Input
            texto="Digite seu Nome"
            type="text"
            className={`${styles.InputPequeno} ${styles.InputEspacamento}`} // Adicionando classe para espaçamento
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <Input
            texto="Digite seu Sobrenome"
            type="text"
            className={`${styles.InputPequeno} ${styles.InputEspacamento}`} // Adicionando classe para espaçamento
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
          />
        </div>

        <div className={styles.InputsLinha}>
          <InputEmail placeholder="Digite seu Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className={styles.InputsLinha}>
          <Input
            texto="Digite sua Senha"
            type="password"
            className={`${styles.InputPequeno} ${styles.InputEspacamento}`} // Adicionando classe para espaçamento
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <Input
            texto="Confirme sua Senha"
            type="password"
            className={`${styles.InputPequeno} ${styles.InputEspacamento}`} // Adicionando classe para espaçamento
            value={confirmarSenha}
            onChange={e => setConfirmarSenha(e.target.value)}
          />
        </div>

        <div className={styles.BotoesLinha}>
          <Link to="/" style={{ textDecoration: 'none', marginRight: '1rem' }}>
            <Button texto='Voltar' />
          </Link>
          <Button texto='Próximo' onClick={sendData}/>
        </div>
      </div>
    </div>
  );
}

export default CadastroP1;
