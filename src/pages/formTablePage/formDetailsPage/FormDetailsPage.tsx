import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ElementContext } from '../../homePage/HomePage';

const FormDetailsPage = () => {
    let params = useParams();
    console.log(params)
    const FormContext = useContext(ElementContext);
  return (
    <div>
      <p>{params.id}</p>
    </div>
  )
}

export default FormDetailsPage
