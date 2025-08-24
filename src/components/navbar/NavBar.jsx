import "./NavBar.css"
import CartWidger from '../CartWitger/CartWidger'

const NavBar = () => {

    const ImgLogo = "./image/Diseño sin título (1).png"

    return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={ImgLogo} alt="" width="100" height="100"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Marvel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">DC</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="#"><CartWidger/></a>
                    </li> */}
                </ul>
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#"><CartWidger /></a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar