import { useField } from 'formik'
import { ErrorInputMessage } from './ErrorInputMessage'

export const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label className="mb-1 text-xs tracking-wide text-gray-600 ">
        {label}
      </label>

      {meta.touched && meta.error ? (
        <ErrorInputMessage>{meta.error}</ErrorInputMessage>
      ) : null}

      <input
        type="password"
        className="text-sm placeholder-gray-500 px-4 mb-5 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
        {...field}
        {...props}
      />
    </>
  )
}
