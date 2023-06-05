import { useEffect, useState } from 'react';
import styles from './CadastroP2.module.css';
import logo from '../../../Componentes/img/Logo.png';
import { Input } from '../../../Componentes/Input/input';
import { InputEmail } from '../../../Componentes/Input/inputEmail';
import { Button } from '../../../Componentes/Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'https://amendozonas.vercel.app';

function CadastroP2({ receivep2data, goback }) {
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');
  const navigate = useNavigate()

  const buscarEndereco = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;
      const enderecoCompleto = `${logradouro}, ${bairro}, ${localidade} - ${uf}`;
      setEndereco(enderecoCompleto);
    } catch (error) {
      console.error(error);
    }
  };

  const cadastrarUsuario = async () => {
    try {
      console.log({
        ...receivep2data,
        phone_number: telefone,
        cep,
        number: numeroCasa
      });
      const response = await axios.post(`${API_BASE}/users/register`, {
        ...receivep2data,
        phone_number: telefone,
        cep,
        number: numeroCasa
      });
      
      navigate('/')

      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    buscarEndereco(cep)
  }, [cep])




  return (
    <div className={styles.Div}>
      <img src={logo} className={styles.img} alt='Logo do site' />
      <div className={styles.DivConteudo}>
        <div className={styles.InputsLinha}>
          <InputEmail placeholder="Digite seu Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
        </div>
        <div className={styles.InputsLinha}>
          <Input texto="Digite seu CEP" className={styles.InputPequeno} value={cep} onChange={e => setCep(e.target.value)} />
          <Input texto="Digite o Número da Casa" className={styles.InputPequeno} value={numeroCasa} onChange={e => setNumeroCasa(e.target.value)} />
        </div>
        <div className={styles.InputsLinha}>
          <InputEmail placeholder="Digite seu Endereço" value={endereco}  />
        </div>
          {endereco && (
            <p>Endereço: {endereco}</p>
          )}
        <div className={styles.BotoesLinha}>
          <Button texto='Voltar' onClick={() => goback(true)} />
          <Button texto='Criar' onClick={cadastrarUsuario} />
        </div>
      </div>
    </div>
  );
}

export default CadastroP2;
