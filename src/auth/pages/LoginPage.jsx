import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { AuthLayout } from '../layouts/AuthLayout'
import { EmailInput } from '../components/EmailInput'
import { PasswordInput } from '../components/PasswordInput'
import { startLogin } from '../../store/auth/authThunk'
import { SubmitButton } from '../components/SubmitButton'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { errorMessage } = useSelector(state => state.auth)

  const handleFormSubmit = (values, { setSubmitting }) => {
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
            <Form className="flex flex-col">
              <EmailInput
                label="Email: "
                id="email"
                name="email"
                placeholder="Ingrese su correo"
              />

              <PasswordInput
                label="Contraseña: "
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
              />

              <SubmitButton>Ingresar</SubmitButton>

              <div className="self-center text-xs">
                <span>No tienes cuenta?</span>
                <span className="ml-2 text-blue-500 font-semibold">
                  <Link to={'/auth/register'}>Registrate</Link>
                </span>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
