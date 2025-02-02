import React from 'react'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import Contact from '../../components/Contact/Contact'

 const ContactPage = ({title})=> {
    return (
        <>
        <Bradcrumb title={title}/>
        <div className="contact__wrapper"> 
           <Contact />
        </div>
        </>
    )
}
export default ContactPage