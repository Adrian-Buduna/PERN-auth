import { Link } from "react-router-dom"
import Layouts from "../components/layouts"
const Login = () => {
    return (
        <Layouts>
            <form className="flex flex-col bg-rose-600 justify-center items-center border-2 py-16 px-4 sm:px-10 text-gray-100 border-rose-700 sm:rounded-md gap-8 w-full sm:w-96" action="">
                <div className="w-full sm:w-10/12 text-3xl font-bold capitalize">
                    <h1>Login</h1>
                </div>
                <div className="w-full sm:w-10/12">
                    <input className="bg-rose-600 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " type="email" placeholder="Email" />
                </div>
                <div className="w-full sm:w-10/12">
                    <input className="bg-rose-600 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " type="password" placeholder="Password" />
                </div>
                <div className="w-full sm:w-10/12 text-xl flex justify-end  font-bold">
                    <button className="py-2 px-4 bg-rose-700 border-2 border-gray-100 rounded-md hover:bg-rose-400 uppercase">login</button>
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