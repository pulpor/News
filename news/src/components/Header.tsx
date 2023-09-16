import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export function Header() {
  return (
    <header data-testid="header">
      
      <Link id="link" to="/"><div className="containerHeader">
        <img src={logo} id="logo" alt="logo" />
        <div id="titleOrg">
          <p id="headerTitle">TRYBE NEWS</p>
        </div> </div>
      </Link>
     
    </header>  
   
  )

}