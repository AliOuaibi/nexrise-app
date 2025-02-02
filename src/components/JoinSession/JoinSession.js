import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

const JoinSession = () => {
  return (
    <div className="joinsession__wrapper margin__bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 offset-sm-0 col-lg-6 text-center offset-lg-5 mx-auto">
            <h5 className="session__sub">Rejoindre une de nos sessions</h5>
            <h2 className="session__title">Pour en savoir plus ou nous contacter, rendez-vous sur notre page de contact</h2>
              <Link to="/contact" className="session__join">Contact<FontAwesomeIcon icon="caret-right"/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default JoinSession