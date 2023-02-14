import { useState } from "react"
import { Link } from "react-router-dom"
import { onRegistration } from "../api/auth"
import Layouts from "../components/layouts"

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",

  })
  const [error, setError] = useState(false)
  const [succes, setSuccess] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await onRegistration(values)

      setError("")
      setSuccess(data.message)
      setValues({ email: "", password: "" })
    } catch (error) {
      setError(error.response.data.errors[0].msg)
      setSuccess("")
    }
  }
  console.log(values)
  return (
    <Layouts>
      <form onSubmit={(e) => onSubmit(e)}
        className="flex flex-col bg-blue-500 justify-center items-center border-2 py-16 px-4 sm:px-10 text-gray-100 border-blue-500 sm:rounded-md gap-8 w-full sm:w-96" action="">
        <div className="w-full sm:w-10/12 text-3xl font-bold capitalize">
          <h1>Register</h1>
        </div>

        <div className="w-full sm:w-10/12">
          <input onChange={(e) => onChange(e)}
            className="bg-blue-500 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " type="email" name="email" placeholder="Email" />
        </div>

        <div className="w-full sm:w-10/12">
          <input onChange={(e) => onChange(e)}
            className="bg-blue-500 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " type="password" name="password" placeholder="Password" />
        </div>

        <div className="font-bold text-red-700 uppercase">{error}</div>
        <div className="font-bold text-green-700 uppercase">{succes}</div>

        <div className="w-full sm:w-10/12 text-xl flex justify-end  font-bold">
          <button type="submit" className="py-2 px-4 bg-blue-700 border-2 border-gray-100 rounded-md hover:bg-blue-600 uppercase">Register</button>
        </div>

        <div className="hover:underline">
          <Link to="/login"><p>Already have an account?</p></Link>
        </div>
      </form>
    </Layouts>
  )
}

export default Register