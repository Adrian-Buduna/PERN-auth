import { Link } from "react-router-dom"
import Layouts from "../components/layouts"

const Register = () => {
  return (
    <Layouts>
      <form className="flex flex-col bg-rose-600 justify-center items-center border-2 py-16 px-4 sm:px-10 text-gray-100 border-rose-700 sm:rounded-md gap-8 w-full sm:w-96" action="">
        <div className="w-full sm:w-10/12 text-3xl font-bold capitalize">
          <h1>Register</h1>
        </div>
        <div className="w-full sm:w-10/12">
          <input className="bg-rose-600 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " type="text" name="username" placeholder="Username" />
        </div>
        <div className="w-full sm:w-10/12">
          <input className="bg-rose-600 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " type="email" name="email" placeholder="Email" />
        </div>
        <div className="w-full sm:w-10/12">
          <input className="bg-rose-600 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " type="password" name="password" placeholder="Password" />
        </div>
        <div className="w-full sm:w-10/12">
          <input className="bg-rose-600 border-b-2 border-gray-100 p-1 placeholder:text-gray-200 outline-none font-bold text-xl w-full " type="password" name="repeat-password" placeholder="Repeat password" />
        </div>
        <div className="w-full sm:w-10/12 gap-2 flex flex-row justify-start items-start">
          <div>
            <input type="checkbox" name="checkbox" />
          </div>
          <div>
            <p>I agree with the terms and conditions and the privacy policy.</p>
          </div>
        </div>
        <div className="w-full sm:w-10/12 text-xl flex justify-end  font-bold">
          <button className="py-2 px-4 bg-rose-700 border-2 border-gray-100 rounded-md hover:bg-rose-400 uppercase">Register</button>
        </div>

        <div className="hover:underline">
          <Link to="/login"><p>Already have an account?</p></Link>
        </div>
      </form>
    </Layouts>
  )
}

export default Register