import React from 'react'
import {Link} from "react-router-dom";
import kid1 from '../../assets/images/kid1.svg'
import kid2 from '../../assets/images/kid2.svg'
import sidecolor from '../../assets/images/sidecolor.svg'

const Breadcrumb = ({title, title1}) => {
  return (
    <div className="breadcrumb__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__section">
              <h2 className="breadcrumb__title">{title}</h2>
              <ul className={`breadcrumb__ul ${title1 ? "" : "breadcrumb__ul__lastchild"}`}>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to={`/${title}`}>{title}</Link></li>
                <li>{title1}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="side__color__1">
        <img src={sidecolor} alt="sidecolor1"/>
      </div>
      <div className="side__color__2">
        <img src={kid1} alt="sidecolor2"/>
      </div>
      <div className="side__color__3">
        <img src={kid2} alt="sidecolor3"/>
      </div>
    </div>
  )
}
export default Breadcrumb