queryPokemonAPIName = async(name)=>{

  var p = prompt('Enter pokemon name')
  let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${p}/`)
    let myJson = await response.json();
    let pokemon = new Pokemon(myJson.name)
    pokemon.name = myJson.name;
    pokemon.image = myJson.sprites.front_default;
    pokemon.hp = myJson.stats[5].base_stat;
    pokemon.atk = myJson.stats[4].base_stat;
    pokemon.def = myJson.stats[3].base_stat;
    for( let i = 0; i < myJson.abilities.length; i++){
      pokemon.abilities.push(myJson.abilities[i].ability.name)
    }
    generateHtml(pokemon)
}
    generateHtml = (pokemon)=> {
  let addgenerate = document.createElement("ul")
  let pkmn = document.getElementById('Team')
      addgenerate.innerHTML = `
      <img src=${pokemon.image}>
      <li>${pokemon.name}</li>
      <li>hp: ${pokemon.hp}</li>
      <li>atk: ${pokemon.atk}</li>
      <li>def: ${pokemon.def}</li>
      <li>abilities: ${pokemon.abilities}</li>
      `
      pkmn.appendChild(addgenerate)
  }
