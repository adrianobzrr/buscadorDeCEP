import { useState } from 'react';
import * as S from './tela.styles';
import Api from './services/Api';
import { Alert } from 'react-native';

const Tela = () => {
  const [input, setInput] = useState(''); 
  const [cep, setCep] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [DDD, setDDD] = useState('');
  const [UF, setUF] = useState('');


  const handleSearch = async () => {
    if(input === '') {
      Alert.alert('Digite um CEP válido!');
      return;
    } 
    try {
      const response = await Api.get(`${input}/json`);
      setCep(response.data.cep);
      setLocalidade(response.data.localidade);
      setDDD(response.data.ddd);
      setUF(response.data.uf);
      setInput('');
    } catch (error) {
      Alert.alert('CEP inválido!');
      setInput('');
    }
  }

  return (
    <S.Container>
      <S.Title>Buscador CEP</S.Title>
      <S.Header>
        <S.Input placeholder="Digite seu CEP..." value={input} onChangeText={setInput}/>
        <S.Button onPress={handleSearch}>
          <S.Icon name="search" size={25}/>
        </S.Button>
      </S.Header>
      <S.Content>
        <S.TextCEP>CEP: {cep}</S.TextCEP>
        <S.Text>Localidade: {localidade}</S.Text>
        <S.Text>DDD: {DDD}</S.Text>
        <S.Text>UF: {UF}</S.Text>
      </S.Content>
    </S.Container>
  );
}

export default Tela;