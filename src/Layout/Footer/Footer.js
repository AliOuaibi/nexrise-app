import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import img from "../../assets/images/logo-qualiopi.webp"

const Footer = () => {
  const [bootomClass, setBootomClass] = useState(false)
  const scrollHandleScroll = () => {

    if (window.scrollY > 500) {
      setBootomClass(true)
    } else {
      setBootomClass(false)
    }

  }
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandleScroll);
  }, []);

  return (
    <div className="footer__wrapper padding__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer__one">
              <h3 className="footer__title">Nos contact</h3>
              <ul className="footer__list1">
                <li><FontAwesomeIcon icon={['fas', 'phone-volume']}/>+1 516 231 1313</li>
                <li><FontAwesomeIcon icon={['fas', 'envelope']}/>nexrise@gmail.com</li>
                <li><FontAwesomeIcon icon={['fas', 'home']}/>domiciliation</li>
                <li><FontAwesomeIcon icon={['fas', 'clock']}/>9h - 18h, du lundi au vendredi</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer__one">
              <h3 className="footer__title">Menu</h3>
              <ul className="footer__list">
                <li onClick={() => scrollTop()}><Link to="/">Accueil</Link></li>
                <li onClick={() => scrollTop()}><Link to="/nos-formations">Nos formations</Link></li>
                <li onClick={() => scrollTop()}><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer__one">
              <img src={img} alt={"logo-qualiopi"} width={100} style={{marginTop: "-60px"}}/>
              <h3 className="footer__title">Autres liens</h3>
              <ul>
                <li onClick={() => scrollTop()}><Link to="/">Mentions légales</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="copy__right">
              ©2025 Dev - NEXRISE tout droit reservé.
            </p>
          </div>
        </div>
      </div>

      <div className={"bottom__top" + (bootomClass ? ' bottom__fade' : '')} onClick={() => scrollTop()}>
        <FontAwesomeIcon icon={['fas', 'angle-up']}/>
      </div>
    </div>
  )
}
export default Footer