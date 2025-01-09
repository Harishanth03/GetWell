import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../Context/AdminContext'

const DocotorsList = () => {

  const {doctors , atoken , getAllDoctors} = useContext(AdminContext);

  useEffect(() => {

    if(atoken)
    {
      getAllDoctors()
    }


  }, [atoken])

  return (

    <div>
      
      <h1></h1>
      

    </div>
  )
}

export default DocotorsList