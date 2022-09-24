import { useEffect } from 'react';
import './App.css';

function App() {
  const initialURl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon();
    };
  },[]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
