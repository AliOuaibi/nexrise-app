import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import learnabout from '../../assets/images/about-school.jpeg'

const LearnAbout = () => {

  return (
    <div className="learn__about__wrapper padding__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="learn__about__img">
              <div className="learn__about__img" >
                <img src={learnabout} alt="learnabout"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="learn__right">
              <div className="up__art">
                <img src="/images/up.svg" alt=""/>
              </div>
              <div className="section__title__container">
                <h5 className="section__subtitle">À propos</h5>
                <h2 className="section__title">Qui sommes-nous ?</h2>
                <p className="section__contnet">
                  <strong>NEXRISE</strong> est bien plus qu’une école de commerce. Nous nous engageons à offrir à chaque étudiant un
                  accompagnement personnalisé tout au long de son parcours académique. Grâce à notre approche pédagogique
                  innovante, nous permettons à nos étudiants de suivre un programme d’alternance école/entreprise,
                  une opportunité unique pour mettre en pratique les connaissances acquises en classe et affiner leur
                  savoir-faire dans un environnement professionnel réel.
                </p>
              </div>
              <ul className="list__content">
                <li><FontAwesomeIcon icon="check-circle"/>Une Formation Axée sur la Pratique</li>
                <li><FontAwesomeIcon icon="check-circle"/>Accompagnement Personnalisé</li>
              </ul>
              <p className="learn__contnet2">
                Optez pour <strong>NEXRISE</strong> pour une expérience éducative qui vous prépare efficacement à réussir dans le
                monde du travail. Atteignez vos objectifs professionnels avec confiance et compétence grâce à notre
                formation de qualité et notre soutien personnalisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default LearnAbout