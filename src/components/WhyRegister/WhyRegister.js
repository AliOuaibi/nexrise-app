import React from 'react'
import whyregister from '../../assets/images/group-school-why.jpg'
import school from '../../assets/images/school.png'
import teacher from '../../assets/images/teacher.png'
import book from '../../assets/images/book.png'

const WhyRegister = () => {
  return (
    <div className="why__register__wrapper padding__bottom">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="why__img">
              <img src={whyregister} alt=""/>
            </div>
          </div>
          <div className="col-lg-6 why__right__back">
            <div className="why__right">
              <div className="section__title__container">
                <h2 className="section__title">Pourquoi nous choisir ?</h2>
                <p className="section__contnet" style={{fontSize: "12px"}}>
                  Notre mission est de proposer des formations adaptées au marché en partenariat avec les
                  entreprises, assurant aux apprentis les compétences clés pour leur employabilité
                  et leur succès professionnel.
                </p>
              </div>
              <div className="list__options">
                <div className="list__one">
                  <div className="list__one__half">
                    <img src={school} alt="school"/>
                  </div>
                  <div className="list__one__content">
                    <h5>Promouvoir l'Apprentissage Professionnel</h5>
                    <p style={{fontSize: "12px"}}>
                      Nous aidons nos étudiants à comprendre les avantages de l’apprentissage
                      et à intégrer le monde du travail en douceur. Notre mission est d’offrir un environnement
                      dynamique où ils développent des compétences pratiques sous la guidance de professionnels expérimentés.
                    </p>
                  </div>
                </div>
                <div className="list__one">
                  <div className="list__one__half">
                    <img src={teacher} alt="teacher"/>
                  </div>
                  <div className="list__one__content">
                    <h5>Favoriser le Développement des nos étudiants</h5>
                    <p style={{fontSize: "12px"}}>
                      Meta DX School se donne pour mission de favoriser le développement global de chaque étudiant. Nous
                      mettons en place des initiatives visant à renforcer les compétences transversales telles que la
                      communication, la gestion du temps et le travail d’équipe. Notre objectif est de former des individus
                      compétents, confiants et prêts à relever les défis de leur carrière.
                    </p>
                  </div>
                </div>
                <div className="list__one">
                  <div className="list__one__half">
                    <img src={book} alt="book"/>
                  </div>
                  <div className="list__one__content">
                    <h5>Adapter NOS Programmes AUX Besoins du Marché</h5>
                    <p style={{fontSize: "12px"}}>
                      Notre mission est d’offrir des programmes de formation alignés sur les besoins actuels et futurs
                      du marché. Nous collaborons étroitement avec les entreprises pour garantir que nos apprentis
                      acquièrent les compétences recherchées, favorisant ainsi leur employabilité et leur
                      réussite professionnelle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default WhyRegister