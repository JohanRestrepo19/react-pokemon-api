export const fetchPokemonData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const { results } = await response.json()
  return results
}

export const fetchPokemoAbilitiesData = async name => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const { abilities, sprites } = await resp.json()
  const mappedAbilities = abilities.map(ability => ({
    name: ability.ability.name,
  }))
  return {
    abilities: mappedAbilities,
    img: sprites.other['official-artwork'].front_default,
  }
}
