import React from "react"
import { matchPath, useLocation } from "react-router-dom"
import AddTrip from "./addtrips"
import Aside from "./aside"
import Homepage from "./section"




const Home = () => {


        const location = useLocation().pathname
        console.log(location);
    return (
        <React.Fragment>
            <Aside />
           <section>
        {
            location === '/addtrip' ? <AddTrip/> : <Homepage/>
        }
           </section>
        </React.Fragment>
    )
}

export default Home