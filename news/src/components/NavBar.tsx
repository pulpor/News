import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <div data-testid="navbar" className="navContainer">
      <nav className="navbar">
        
        <ul className="ul">
          
          <li>
            <Link to="/">
              <a href="#" className="navigation">Mais recentes</a>
            </Link>
          </li>

          <li>
            <Link className="navigation" to="/release">
              <a href="#" className="navigation">Release</a>
            </Link>
          </li>

          <li>
            <Link to="/newsnav">
              <a href="#" className="navigation">Notícia</a>
            </Link>
          </li>
          
          <li>
            <Link to="/favorites">
              <a href="#" className="navigation">Favoritas</a>
            </Link>
          </li>

        </ul>

      </nav>
    </div>
  )
}
