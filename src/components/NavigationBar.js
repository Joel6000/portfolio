import { Link } from "react-router-dom";

function NavigationBar () {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiences">Experiences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/joel-lim-600" target="_blank">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/Joel6000" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;