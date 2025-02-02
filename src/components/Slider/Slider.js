import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Slider1 from "react-slick";
import slider from '../../assets/images/logo.png'

const Slider = () => {
  const SampleNextArrow = (props) => {
    const {onClick} = props;
    return (
      <div
        className="slick__arrow__next"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={['fas', 'arrow-right']}/>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const {onClick} = props;
    return (
      <div
        className="slick__arrow__prev"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={['fas', 'arrow-left']}/>
      </div>
    )
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };

  const SliderContents = [
    {
      h1a: 'Formations en Alternance',
      h1: '',
      p: "Nos formations en alternance, du niveau bac à bac+2, sont conçues pour offrir une expérience d’apprentissage " +
        "équilibrée entre la théorie et la pratique. Elles permettent aux apprenants de se former tout en étant immergés " +
        "dans le monde professionnel. Grâce à des partenariats solides avec des entreprises locales et nationales, nous garantissons " +
        "des opportunités d’insertion professionnelle rapide et efficace.",
    },
    {
      h1a: 'Organisme de Formation',
      h1: '',
      p: "Chaque individu est unique, et nous croyons que la formation doit être adaptée aux besoins spécifiques " +
        "de chacun. Nos parcours individualisés sont conçus pour répondre aux aspirations et aux compétences de " +
        "chaque apprenant. Que vous souhaitiez développer des compétences spécifiques ou changer de carrière, nous " +
        "élaborons avec vous un plan de formation personnalisé.",
    },
    {
      h1a: "Validation des acquis de l'expérience (VAE)",
      h1: '',
      p: "La VAE est un dispositif qui permet de faire reconnaître officiellement vos compétences acquises au travers de" +
        " votre expérience professionnelle. Chez Nexrise, nous vous accompagnons tout au long de ce processus, " +
        "de la constitution de votre dossier à la présentation devant le jury. Notre objectif est de valoriser vos " +
        "compétences et de vous aider à obtenir le diplôme correspondant à votre expérience dans notre catalogue de formation."
    },
    {
      h1a: 'Bilan de compétences',
      h1: '',
      p: "Le bilan de compétences est une étape clé pour ceux qui souhaitent faire le point sur leur carrière, " +
        "envisager une reconversion ou simplement identifier leurs compétences fortes. Nos experts vous accompagnent " +
        "dans cette démarche introspective et constructive pour définir un projet professionnel en adéquation avec vos " +
        "aspirations et le marché de l’emploi."
    },
  ]

  return (
    <div className="slider__wrapper">
      <div className="container">
        <h1 className='text-center text-white' style={{marginBottom: '-50px'}}>Bienvenue chez NEXRISE</h1>
        <div className="row row__reverce">
          <div className="col-lg-6">
            <div className="slider__inner">

              <Slider1 {...settings}>
                {SliderContents.map((SliderContent, i) =>
                  <div className="single__slider" key={i}>
                    <h1><span className="above__title">{SliderContent.h1a} </span>
                      {SliderContent.h1}
                    </h1>
                    <p className="slider__para">{SliderContent.p}</p>
                  </div>
                )}
              </Slider1>
            </div>
          </div>
          <div className="col-lg-4" style={{margin: "0 auto"}}>
            <div className="slider__image">
              <img src={slider} alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
export default Slider