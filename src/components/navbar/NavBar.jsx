import "./NavBar.css"
import CartWidger from '../CartWitger/CartWidger'
import { Link } from "react-router-dom"


const ImgLogo = "image/Diseño sin título (1).png"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={ImgLogo} alt="Logo" width="100" height="100"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Categoria/Marvel">Marvel</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Categoria/DC">DC</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <CartWidger />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
