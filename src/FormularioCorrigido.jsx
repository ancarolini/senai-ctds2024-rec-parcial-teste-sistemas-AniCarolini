
import React, { useState } from 'react';

const FormularioCadastroRP = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação para verificar se o campo está inválido
    if (!nome && idade < 18 &&  !email.includes('@') && senha.length < 4) {
      setMensagem('Por favor, preencha todos os campos corretamente.');
      return;
    }

    // Limpa os campos após o envio
    setMensagem('Cadastro realizado com sucesso!');
  };


  return (
    <div style={{ width: 300, margin: 'auto', backgroundColor: '#ccc', padding: 20, borderRadius: 5 }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          style={{ width: 220, marginLeft: 5, height: 35, marginBottom: 10, paddingLeft: 8 }}
          type="text"
          value={nome}
          placeholder="Digite seu nome"
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label>Idade:</label>
        <input
          style={{ width: 220, marginLeft: 8, height: 35, marginBottom: 10, paddingLeft: 8 }}
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder='idade'
          required

        />

        <label>Email:</label>
        <input
          style={{ width: 220, marginLeft: 8, height: 35, marginBottom: 10, paddingLeft: 8 }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          riquired


        />

        <label>Senha:</label>
        <input
          style={{ width: 220, marginLeft: 2, height: 35, marginBottom: 20, paddingLeft: 8 }}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder='senha'
          required

        />

        // Botão de enviar
        <button 
          style={{ width: '100%', height: 35, cursor: 'pointer' }}
          type="Enviar"
        >Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

 export default FormularioCadastroRP;