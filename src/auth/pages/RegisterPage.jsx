import { Formik, Form } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup'
import { startRegisterUser } from '../../store/auth/authThunk'
import { EmailInput } from '../components/EmailInput'
import { PasswordInput } from '../components/PasswordInput'
import { SubmitButton } from '../components/SubmitButton'
import { AuthLayout } from '../layouts/AuthLayout'
import { cleanErrors } from '../../store/auth/authSlice'
import { ErrorAuthMessage } from '../components/ErrorAuthMessage'

const registerValidationSchema = object({
  email: string().email('Email no válido').required('El email es requerido'),
  password: string()
    .min(6, 'La contraseña debe ser de al menos 6 caracteres')
    .required('La constraseña es requerida'),
})

const RegisterPage = () => {
  const dispatch = useDispatch()
  const { errorMessage } = useSelector(state => state.auth)
  const navigate = useNavigate()

  const handleFormSubmit = (values, { setSubmitting }) => {
    dispatch(
      startRegisterUser({ email: values.email, password: values.password })
    )
    setSubmitting(false)
  }

  const handleClickLoginLink = () => {
    dispatch(cleanErrors())
    navigate('/auth/login')
  }

  return (
    <AuthLayout>
      <div className="flex flex-col bg-white shadow-md p-8  rounded-3xl w-50 max-w-md">
        <h1 className="font-medium text-xl text-gray-800 self-center">
          Registro
        </h1>

        {errorMessage ? (
          <ErrorAuthMessage>
            Correo suministrado ya está en uso
          </ErrorAuthMessage>
        ) : null}

        <div>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleFormSubmit}
            validationSchema={registerValidationSchema}
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

              <SubmitButton>Registrarse</SubmitButton>
            </Form>
          </Formik>
        </div>

        <div className="self-center text-xs mt-2">
          <span className="">Ya tienes cuenta?</span>
          <span
            className="ml-2 text-blue-500 font-semibold cursor-pointer"
            onClick={handleClickLoginLink}
          >
            Ingresa
          </span>
        </div>
      </div>
    </AuthLayout>
  )
}

export default RegisterPage
