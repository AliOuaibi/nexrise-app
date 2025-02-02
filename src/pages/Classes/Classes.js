import React from 'react'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import Activities from '../../components/Activities/Activities'
import Service from '../../components/Service/Service'

const Classes = ({title}) => {
  return (
    <>
      <Bradcrumb title={title}/>
      <div className="classes__wrapper">
        {/*<Activities/>*/}
        <Service/>

      </div>
    </>
  )
}
export default Classes