import { Outlet } from "react-router-dom"
import NavBar from "../component/NavBar/NavBar"


const Root = () => {
  return (
    <div className="container max-w-[1170px]">
       <NavBar></NavBar>
       <Outlet></Outlet>
    </div>
  )
}

export default Root