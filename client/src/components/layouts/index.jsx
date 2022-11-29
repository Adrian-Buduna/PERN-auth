import Footer from "./Footer"
import {Navbar} from "./Navbar"

const index = ({ children }) => {
    return (
        <div className="flex flex-col items-center max-w-full font-poppins  ">

            <header className="flex flex-col justify-center items-center w-full bg-rose-600 border-b-2 border-rose-700 h-24">
                <Navbar />
            </header>

            <main className="flex flex-col items-center w-full min-h-screen bg-gray-100  py-32">
                {children}
            </main>

            <footer className="flex flex-col justify-center items-center w-full bg-gray-700 h-32 border-t-2 border-gray-800 text-gray-300 font-semibold" >
                <Footer />
            </footer>

        </div>
    )
}

export default index