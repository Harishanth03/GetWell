import React, { useContext } from 'react'

const RelatedDoctors = ({docId , speciality}) => {

    const { doctors } = useContext(AppContext);

    const [relatedDoctors , setRelatedDoctors] = useState([]);

  return (

    <div>RelatedDoctors</div>

  )

}

export default RelatedDoctors