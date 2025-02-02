import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [addClass, updateClass] = useState(false)
  const [stkyClass, setStkyClass] = useState(false)
  const [mega, setMega] = useState(false)
  const handleClick = () => {
    updateClass(true)
  }
  const handleClickCross = () => {
    updateClass(false)
    window.scrollTo(0, 0);
  }
  const scrollHandleScroll = () => {
    if (window.scrollY > 20) {
      setStkyClass(true)
    } else {
      setStkyClass(false)
    }
  }
  const handleMega = () => {
    setMega(!mega)
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandleScroll);
  }, []);

  return (
    <>
      <div className={"navbar__wrapper" + (stkyClass ? ' mystky' : '')}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar__inner_container">
                <div className="logo">
                  <h4>
                    {/* <NavLink to="/">Logo</NavLink> */}
                    <NavLink to="/"><img src={logo} alt="logo" width={100}/></NavLink>
                  </h4>
                </div>
                <div className="manu">
                  <ul className={addClass ? 'vissible' : 'hidden'}>
                    <li onClick={handleClickCross}><NavLink exact to="/">Accueil</NavLink></li>
                    <li onClick={handleMega}>
                      <NavLink to="/nos-formations">Nos formations</NavLink>
                      <ul className={"mega " + (mega ? 'mega__visible' : '')}>
                        <li onClick={handleClickCross}><NavLink to="/nos-formations/tp-negociateur-technico-commercial">TP-NPC</NavLink></li>
                        <li onClick={handleClickCross}><NavLink to="/nos-formations/tp-responsable-petite-ou-moyenne-structure">TP-RPMS</NavLink></li>
                      </ul>
                    </li>
                    <li onClick={handleClickCross}><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
                  <div className={addClass ? 'vissible__cross' : 'hidden__corss'} onClick={handleClickCross}>
                    <FontAwesomeIcon icon="times"/>
                  </div>
                </div>
                <div className="mobile__menu" onClick={handleClick}>
                  <span></span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar