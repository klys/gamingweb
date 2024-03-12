
import './Navbar.css'

const Navbar = () => {
    return( <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"/></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-secondary">Principal</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Ranking</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Cuentas</a></li>
          <li><a href="/descargas" className="nav-link px-2 text-white">Descargas</a></li>
          
        </ul>

        

        <div className="text-end">
          <a type="button" href="/cuenta/iniciar" className="btn btn-outline-light me-2">Conectarse</a>
          <a type="button" href="/cuenta/crear" className="btn btn-warning">Registrarse</a>
        </div>
      </div>
    </div>
  </header>)
}

export default Navbar;