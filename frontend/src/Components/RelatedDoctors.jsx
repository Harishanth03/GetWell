import React, { useContext, useEffect } from 'react'

const RelatedDoctors = ({docId , speciality}) => {

    const { doctors } = useContext(AppContext);

    const [relatedDoctors , setRelatedDoctors] = useState([]);

    useEffect(() => {

        if(doctors.length > 0 && speciality)
        {
            
        }

    } , [docId , speciality , doctors])

  return (

    <div>RelatedDoctors</div>

  )

}

export default RelatedDoctors