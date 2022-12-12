import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { AuthLayout } from '../layouts/AuthLayout'
import { EmailInput } from '../components/EmailInput'
import { PasswordInput } from '../components/PasswordInput'
import { startLogin } from '../../store/auth/authThunk'
import { SubmitButton } from '../components/SubmitButton'
import { cleanErrors } from '../../store/auth/authSlice'
import { ErrorAuthMessage } from '../components/ErrorAuthMessage'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { errorMessage } = useSelector(state => state.auth)
  const navigate = useNavigate()

  const handleFormSubmit = (values, { setSubmitting }) => {
    dispatch(startLogin({ email: values.email, password: values.password }))
    setSubmitting(false)
  }

  const handleClickRegisterLink = () => {
    dispatch(cleanErrors())
    navigate('/auth/register')
  }

  return (
    <AuthLayout>
      {/* Contenedor del formulario */}
      <div className="flex flex-col bg-white shadow-md p-8  rounded-3xl w-50 max-w-md">
        {/*Titulo del formulario*/}
        <h1 className="font-medium text-xl text-gray-800 self-center">
          Ingreso
        </h1>

        {/*Error del envio del formulario*/}
        {errorMessage ? (
          <ErrorAuthMessage>Correo o contraseña no válidos</ErrorAuthMessage>
        ) : null}

        {/*Cuerpo del formulario*/}
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
            </Form>
          </Formik>
        </div>

        {/* Link a pagina de registro*/}
        <div className="self-center text-xs mt-2">
          <span>No tienes cuenta?</span>
          <span
            className="ml-2 text-blue-500 font-semibold cursor-pointer"
            onClick={handleClickRegisterLink}
          >
            Registrate
          </span>
        </div>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
