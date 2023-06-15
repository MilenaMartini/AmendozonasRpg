import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './LoginComponente.module.css';
import logo from '../img/Logo.png';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

const LoginComponent = () => {
  const [email, setEmail] = useState('testando@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const loginEndpoint = 'https://amendozonas.vercel.app/users/login';

    axios
      .post(loginEndpoint, {
        email: email,
        password: password
      })
      .then(response => {
        if (response.data.userAuth) {
          const token = response.data.userAuth;
          localStorage.setItem('token', token);
          navigate('/principal');
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        setError('Ocorreu um erro ao fazer login. Verifique seus dados.');
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={logo} className={styles.logo} alt='Logo do site' />
        <Input
          texto='Digite seu Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='email'
        />
        <Input
          texto='Digite sua Senha'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
        />

        <div className={styles.btn}>
          <Button texto='Entrar' onClick={handleLogin} />
        </div>

        <a href='/cadastro' className={`${styles.link} ${styles.linkMargin}`}>
          CRIAR CONTA
        </a>
        {error && <p className={`${styles.errorMessage} ${styles.fadeIn}`}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginComponent;
