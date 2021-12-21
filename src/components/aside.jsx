import { Link } from "react-router-dom"
import Home from "../images/home.png"
import add from "../images/addcalendar.svg"
import calendar from "../images/calendar.png"

const Aside = () => {


    return (
        <aside>
            <div>
                <Link to="/" className="links"><img src={Home} alt="Home.png" /></Link>
                <Link to="/addtrip" className="links"><img src={add} alt="Home.png" /></Link>
                <Link to="/" className="links"><img src={calendar} alt="Home.png" /></Link>
            </div>
        </aside>
    )
}


export default Aside