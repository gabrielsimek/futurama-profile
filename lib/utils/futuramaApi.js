import fetch from 'node-fetch';
export default async function getQuote(favoriteCharacter){
  const data = await fetch(`https://futuramaapi.herokuapp.com/api/characters/${favoriteCharacter}/1`);
  const [character] = await data.json();

  return character.quote;
}
