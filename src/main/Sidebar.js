

import './Sidebar.css'



const Sidebar = () => {


    return(<div className="flex-shrink-0 p-3 bg-white" style={{Width: "280px"}}>
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      
      <svg className="bi me-2" width="30" height="24"><use href="#bootstrap"/></svg>
      <span className="fs-5 fw-semibold">UmbrellaMS2</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Principal
        </button>
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-dark rounded">Overview</a></li>
            <li><a href="#" className="link-dark rounded">Updates</a></li>
            <li><a href="#" className="link-dark rounded">Reports</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Ranking
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-dark rounded">Poder</a></li>
            <li><a href="#" className="link-dark rounded">Riqueza</a></li>
            <li><a href="#" className="link-dark rounded">Fama</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Administracion
        </button>
        <div className="collapse " id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-dark rounded">Cuentas</a></li>
            <li><a href="#" className="link-dark rounded">Conectados</a></li>
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Mi Cuenta
        </button>
        <div className="collapse" id="account-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-dark rounded">Seguridad</a></li>
            <li><a href="#" className="link-dark rounded">Personajes</a></li>
            <li><a href="#" className="link-dark rounded">Desconectarse</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>)
}

export default Sidebar;