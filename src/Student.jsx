import React from 'react'
import Score from './Score'


const Student = (props) => {
  
  return (
    <>
      <div>

        <h1 className='Bio'>{props.bio}</h1>
        <h1 className='Name'>{props.name}</h1>
    </div>
        <Score scores={props.scores} />  
        </>
  )
}



export default Student  