export const SubmitButton = ({ children, ...props }) => {
  return (
    <>
      <button
        type="submit"
        className="my-2 focus:outline-none text-white bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-ful transition duration-150 ease-in"
        {...props}
      >
        {children}
      </button>
    </>
  )
}
