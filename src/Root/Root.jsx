import { Outlet } from "react-router-dom"
import NavBar from "../component/NavBar/NavBar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const Root = () => {
  return (
    <div className=" max-w-[1170px] mx-auto px-[15px] sm:px-0">
       <NavBar></NavBar>
       <Outlet></Outlet>
       <ToastContainer />
    </div>
  )
}

export default Root