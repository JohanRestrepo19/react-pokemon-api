import { Link } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'

const RegisterPage = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col bg-white shadow-md p-8  rounded-3xl w-50 max-w-md">
        <h1 className="font-medium text-xl text-gray-800 self-center mb-5">
          Registro
        </h1>
        <div>
          <form className="flex flex-col">
            <div className="flex flex-col mb-5">
              <label className="mb-1 text-xs tracking-wide text-gray-600">
                Email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="text-sm placeholder-gray-500 px-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Ingrese su correo"
              />
            </div>

            <div className="flex flex-col mb-5">
              <label className="mb-1 text-xs tracking-wide text-gray-600">
                Contraseña:
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="text-sm placeholder-gray-500 px-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button
              type="submit"
              className="my-2 focus:outline-none text-white bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-ful transition duration-150 ease-in"
            >
              Registrase
            </button>
            <div className="self-center text-xs">
              <span className="">Ya tienes cuenta?</span>
              <span className="ml-2 text-blue-500 font-semibold">
                <Link to={'/auth/login'}>Ingresa</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default RegisterPage
