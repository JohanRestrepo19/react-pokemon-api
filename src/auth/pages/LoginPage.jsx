import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin } from '../../store/auth/authThunk'
import { AuthLayout } from '../layouts/AuthLayout'
import { Formik } from 'formik'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { errorMessage } = useSelector(state => state.auth)

  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log(values)
    console.log('El formulario fue envidado')
    dispatch(startLogin({ email: values.email, password: values.password }))
    setSubmitting(false)
  }

  return (
    <AuthLayout>
      <div className="flex flex-col bg-white shadow-md p-8  rounded-3xl w-50 max-w-md">
        <h1 className="font-medium text-xl text-gray-800 self-center">
          Ingreso
        </h1>

        {errorMessage ? (
          <div className="text-red-500 text-center mb-2">
            Correo o contraseña no válidos
          </div>
        ) : null}

        <div>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleFormSubmit}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col"
              >
                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Email:{' '}
                  {touched.email && errors.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ingrese su correo"
                  className="text-sm placeholder-gray-500 px-4 mb-5 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <label className="mb-1 text-xs tracking-wide text-gray-600 ">
                  Contraseña:{' '}
                  {touched.password && errors.password ? (
                    <div className="text-red-500 ">{errors.password}</div>
                  ) : null}
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm placeholder-gray-500 px-4 mb-5 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Ingrese su contraseña"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                <button
                  type="submit"
                  className="my-2 focus:outline-none text-white bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-ful transition duration-150 ease-in"
                >
                  Ingresar
                </button>
                <div className="self-center text-xs">
                  <span className="">No tienes cuenta?</span>
                  <span className="ml-2 text-blue-500 font-semibold">
                    <Link to={'/auth/register'}>Registrate</Link>
                  </span>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
