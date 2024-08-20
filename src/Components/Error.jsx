import React from 'react'
import './error.css'
import errorImage from '../Images/jaconda-17.gif'

const Error = () => {
  return (
    <div className='errPage'>
      <div className='errorImg'>
        <img  src = {errorImage}/>
      </div>

      <div className='errMsg'>
       Omo seems like this page is down right now.
        <button><a href='/'>Back to the home page</a></button>
      </div>
    </div>
  )
}

export default Error