import { Link } from "react-router";
function Navbar(){
    return(
        <>
       <nav>
         <h2>React Router Feature Testing</h2>
        <ul>
            <li>
                <Link to="/">Home</Link>

            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Service">Service</Link>
            </li>
        </ul>
       </nav>
        </>
    )
}

export default Navbar;