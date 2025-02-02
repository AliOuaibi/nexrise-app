import React from 'react'
import {Link} from 'react-router-dom'

 const ErrorPage = ()=> {
    return (
        <div className="page__errir__wrapper padding__top__botton"> 
           <div className="container">
               <div className="row">
                   <div className="col-lg-12">
                       <div className="error__content">
                            <h2>PAGE NOT FOUND!</h2>
                            <p>The page you were looking for appears to have been moved, deleted or does not exist.</p>
                            <Link to="/">Back To Homepage</Link>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default ErrorPage