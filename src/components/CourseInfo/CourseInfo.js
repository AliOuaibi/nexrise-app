import React from 'react'

const TeacherInfo = ({informations}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: informations }} />
  )
}
export default TeacherInfo