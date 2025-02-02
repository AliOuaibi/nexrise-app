import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <div className="contact__container padding__top__botton">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-2 mx-auto">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact__left">
                  <div className="section__title__container mb-3">
                    <h5 className="section__subtitle">Nous contactez</h5>
                    <h2 className="section__title">Remplir le formulaire</h2>
                  </div>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control mb-4" id="name" aria-describedby="emailHelp"
                             placeholder="Votre nom et prénom"/>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control mb-4" id="email" placeholder="Votre Email"/>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control mb-4" name="message" id="textarea" cols="30"
                                rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn page__contact__btn">Envoyer le message</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact__right">
                  <div className="section__title__container mb-3">
                    <h2 className="section__title">Nos informations</h2>
                    <p className="section__contnet">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                    </p>
                  </div>
                  <div className="address__contact">
                    <div className="single__address">
                      <FontAwesomeIcon icon={['fas', 'home']}/>
                      <div className="address__content ml-3">
                        <p>Addresse</p>
                        <p>domiciliation</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <FontAwesomeIcon icon={['fas', 'envelope']}/>
                      <div className="address__content ml-3">
                        <p>Email:</p>
                        <p>nexrise@gamil.com</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <FontAwesomeIcon icon={['fas', 'phone-volume']}/>
                      <div className="address__content ml-3">
                        <p>Phone Number:</p>
                        <p>+1 516 231 1313</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <FontAwesomeIcon icon={['fas', 'clock']}/>
                      <div className="address__content ml-3">
                        <p>Horaires:</p>
                        <p>Lundi - Vendredi: 8h - 17h30</p>
                      </div>
                    </div>
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
export default Contact