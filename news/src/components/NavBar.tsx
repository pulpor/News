import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <div data-testid="navbar" className="navContainer">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              Mais recentes
            </Link>
          </li>
          <li>Release</li>

          <li>
            <Link to="/newsnav">
              Notícia
            </Link>
          </li>
          
          <li>
            <Link to="/favorites">
              Favoritas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
