import { Link } from 'react-router-dom'
import logo from '../images/head2.png'

export function Header() {
  return (
    <header data-testid="header">
      
      <Link id="link" to="/"><div className="containerHeader">
        <img src={logo} id="logo" alt="logo" width={180}/>
        <div id="titleOrg">
          <p id="headerTitle">PULPOR NEWS</p>
        </div> </div>
      </Link>
     
    </header>  
   
  )

}