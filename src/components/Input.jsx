import React from 'react'
import SearchIcon from '../images/SEARCH .svg'
import Mic from '../images/3128290.png' 

const Input = () => {
  return (
    <div  className="input">
            <input type="text" className='input-field' placeholder='Search Google or type a URL' />
            <img src={SearchIcon} className='search-icon' alt="search icon" />
            <img src={Mic} className='mic' alt="Mic icon" />
        
    </div>
  )
}

export default Input