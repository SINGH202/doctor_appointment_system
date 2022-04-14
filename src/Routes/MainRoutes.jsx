import { Route,Routes } from "react-router";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { DoctorsList } from "../components/DoctorsList";
import { SingleProductList } from "../components/Appointment";
export const MainRoutes = ()=>{
    return(
        <>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={< DoctorsList/>} />
            <Route path="/docs/:id" element={<SingleProductList />} />
         </Routes>
        </>
    )
}