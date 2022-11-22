export const AuthLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen items-center py-5">
      <h1 className="mb-10 font-semibold text-xl">PokemonApi App</h1>
      <div className="flex-grow">{children}</div>
    </div>
  )
}
