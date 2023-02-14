import { useState } from "react"
import { Link } from "react-router-dom"
import Layouts from "../components/layouts"
import { onLogin } from "../api/auth"
import { useDispatch } from "react-redux"
import { authenticateUser } from "../redux/slices/authSlice"
const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
      })
      const [error, setError] = useState(false)
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
      }
    
      const dispatch = useDispatch()
      const onSubmit = async (e) => {
        e.preventDefault()
    
        try {
          await onLogin(values)
          dispatch(authenticateUser())
    
          localStorage.setItem('isAuth', 'true')
        } catch (error) {
          console.log(error.response.data.errors[0].msg)
          setError(error.response.data.errors[0].msg)
        }
      }

    return (
        <Layouts>
            <form onSubmit={(e) => onSubmit(e)} className="flex flex-col bg-blue-600 justify-center items-center border-2 py-16 px-4 sm:px-10 text-gray-100 border-blue-700 sm:rounded-md gap-8 w-full sm:w-96" action="">
                <div className="w-full sm:w-10/12 text-3xl font-bold capitalize">
                    <h1>Login</h1>
                </div>
                <div className="w-full sm:w-10/12">
                    <input onChange={(e) => onChange(e)} className="bg-blue-600 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " name="email" type="email" placeholder="Email" />
                </div>
                <div className="w-full sm:w-10/12">
                    <input onChange={(e) => onChange(e)} className="bg-blue-600 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " name="password" type="password" placeholder="Password" />
                </div>

                <div className="font-bold text-red-700 uppercase">{error}</div>

                <div className="w-full sm:w-10/12 text-xl flex justify-end  font-bold">
                    <button type="submit" className="py-2 px-4 bg-blue-700 border-2 border-gray-100 rounded-md hover:bg-blue-600 uppercase">login</button>
                </div>
                <div className="hover:underline">
                    <Link to="/"><p>Forgot password?</p></Link>
                </div>
                <div className="hover:underline">
                    <Link to="/register"><p>Create new account.</p></Link>
                </div>
            </form>
        </Layouts>
    )
}

export default Login