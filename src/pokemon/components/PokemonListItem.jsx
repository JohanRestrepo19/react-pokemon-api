export const PokemonListItem = ({ name }) => {
  return (
    <div className="flex bg-white rounded-lg justify-center items-center h-24 hover:text-slate-500 hover:scale-75 transition duration-500 ease-in">
      <h1>{name}</h1>
    </div>
  )
}
