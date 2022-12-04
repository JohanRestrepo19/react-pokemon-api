import { useField } from 'formik'

export const EmailInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label className="mb-1 text-xs tracking-wide text-gray-600">
        {label}
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      <input
        type="email"
        className="text-sm placeholder-gray-500 px-4 mb-5 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
        {...field}
        {...props}
      />
    </>
  )
}
