import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link, useLocation} from "react-router-dom";
import formations from "../../data/formations";

const Service = () => {
  const location = useLocation();

  return (
    <div className="service__wrapper padding__top__botton">
      <div className="side__img__wal">
        <img src="/images/side0.svg" alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-4 mx-auto ">
            <div className="section__title__container text-center">
              <h5 className="section__subtitle">Education pour vous</h5>
              <h2 className="section__title">NOS FORMATIONS DIPLÔMANTES</h2>
              <p className="section__contnet section__margin__bottom">
                NEXRISE propose une gamme complète de formations certifiantes, conçues pour dynamiser votre carrière.
                Nous offrons des BTS et un titre professionnel reconnus par l’État, soigneusement élaborés pour vous
                doter des compétences essentielles à la réussite dans les domaines de la communication, du commerce,
                du management et du commerce international.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {formations.map((formation, i) =>
            <div className="col-lg-4 mx-auto" key={formation.id}>
              <div className="single__service">
                <div className="overly__shape"></div>
                <div className="service__innerimg">
                  <img src={formation.src} className="img-fluid" alt={formation.title}/>
                </div>
                <div className="service__inner__content">
                  <h4 className="service__title">
                    <Link to={"/nos-formations/" + formation.slug}>{formation.title}</Link>
                  </h4>
                  <div className="service__blist__wr">
                    <ul className="service__blist">
                      <li><FontAwesomeIcon icon="clock"/>{formation.hour}</li>
                      <li><FontAwesomeIcon icon="calendar"/>{formation.duration}</li>
                    </ul>
                    <ul className="service__blist__one">
                      <li><FontAwesomeIcon icon="certificate"/>{formation.certificate}</li>
                    </ul>
                  </div>

                  <div className="service__enroll">
                    <Link to={"/nos-formations/" + formation.slug}>En savoir plus<FontAwesomeIcon
                      icon="angle-right"/></Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {location.pathname === "/" &&
          <div className="row">
            <div className="col-lg-12">
              <div className="more__service text-center">
                <Link to="/nos-formations">Découvrez nos formations <FontAwesomeIcon icon="caret-right"/></Link>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default Service