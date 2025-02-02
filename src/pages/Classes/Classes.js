import React from 'react'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import Service from '../../components/Service/Service'

const Classes = ({title}) => {
  return (
    <>
      <Bradcrumb title={title}/>
      <div className="classes__wrapper">
        <Service/>

      </div>
    </>
  )
}
export default Classes