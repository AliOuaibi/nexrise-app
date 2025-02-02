import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
 const Activities= ()=> {

    const activies=[
        {
            icon:'home',
            title:'Museum Visit',
            content:' Offering weekly activities as visit Museum in the City to broaden the little world of your kids.'
        },
        {
            icon:'calculator',
            title:'Math Club',
            content:' Offering weekly activities as visit Museum in the City to broaden the little world of your kids.'
        },
        {
            icon:'air-freshener',
            title:'Summer Camp',
            content:' Offering weekly activities as visit Museum in the City to broaden the little world of your kids.'
        },
        {
            icon:'shower',
            title:'Clean & clear',
            content:' Offering weekly activities as visit Museum in the City to broaden the little world of your kids.'
        }
    ]
    return (
        <div className="activities__wrapper padding__top__botton">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-8 offset-lg-4 mx-auto ">
                        <div className="section__title__container text-center">
                            <h5 className="section__subtitle">Education For Everyone</h5>
                            <h2 className="section__title">Learn About Our Work Culture At Devschool</h2>
                            <p className="section__contnet section__margin__bottom">
                                As a word from our heart, we love to dedicate for Kids the valuable things in
                                Life. A great education is a must for a solid developments in both soul and mind
                                for kids. We go with kids to play, learn, and grow better.
                            </p>
                        </div>
                     </div>
                 </div>
                <div className="row ac__icon__back">
                {activies.map((activie,i)=>
                    <div className="col-md-6 col-lg-3" key={i}>
                        <div className="ac__single">
                            <div className="ac__icon">
                                <FontAwesomeIcon icon={['fas', activie.icon]}/>
                            </div>
                            <h5 className="ac__title">{activie.title}</h5>
                            <p className="ac__content">
                                {activie.content}
                            </p>
                            <div className="ac__read__more">
                                <Link to="/enroll">Read More<FontAwesomeIcon icon="angle-right"/></Link>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                
             </div>
        </div>  
    )
}
export default Activities