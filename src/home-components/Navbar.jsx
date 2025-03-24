export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a className="navbar-title">
          <a href="#about" className="navbar-link">
            Curator
          </a>
          <a href="" className="navbar-icon">
            <img
              className="navbar-icon-img logo"
              alt="Curator logo"
              src="/Curator_Logo.png"
            />
          </a>
        </a>
        <nav className="navbar-nav">
          <a href="#items" className="navbar-item">
            View Exhibits
          </a>
          <a href="#Galleries" className="navbar-item">
            Galleries
          </a>
          <a href="#favorites" className="navbar-item">
            Favorites
          </a>
        </nav>
      </div>
    </header>
  );
}
