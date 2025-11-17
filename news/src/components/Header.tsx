import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export function Header() {
  return (
    <header data-testid="header">
      <Link id="link" to="/">
        <div className="containerHeader">
          <div className="logoContainer">
            <img src={logo} id="logo" alt="Pulpor News Logo" />
          </div>
          <div id="titleOrg">
            <h1 id="headerTitle">PULPOR NEWS</h1>
            <p className="headerSubtitle">Daily News & Reports</p>
          </div>
        </div>
      </Link>
    </header>  
  )
}