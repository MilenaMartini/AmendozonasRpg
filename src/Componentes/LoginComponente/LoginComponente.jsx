import styles from './LoginComponente.module.css';
import logo from '../img/Logo.png';
import { Input } from '../Input/input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginComponente() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    const loginEndpoint = 'https://amendozonas.vercel.app/users/login';

    axios
      .post(loginEndpoint, {
        email: email,
        password: senha
      })
      .then(response => {
        const token = response.data.userAuth;
        setToken(token);
        navigate('/principal');
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        setErro('Ocorreu um erro ao fazer login. Verifique seus dados.');
      });
  }

  return (
    <div className={styles.Div}>
      <div className={styles.DivConteudo}>
        <img src={logo} className={styles.img} alt='Logo do site' />
        <Input
          texto='Digite seu Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='email'
        />
        <Input
          texto='Digite sua Senha'
          value={senha}
          onChange={e => setSenha(e.target.value)}
          type='password'
        />
        <Button texto='Entrar' onClick={handleLogin} />

        <a href='/cadastro' className={`${styles.Link} ${styles.LinkMargin}`}>
          CRIAR CONTA
        </a>
        {erro && <p className={`${styles.ErrorMessage} ${styles.fadeIn}`}>{erro}</p>}
      </div>
    </div>
  );
}

export default LoginComponente;
