import { useEffect } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURl);
      console.log(res);
    };
    fetchPokemonData()
  },[]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
