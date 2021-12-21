import { Route, Routes } from "react-router-dom"
import Home from "./Home"



const Main = () =>
{

 
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/addtrip" element={<Home/>} />

        </Routes>
    )
}

export default Main