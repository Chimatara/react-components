import React, { useState } from 'react'
import SearchIcon from '../images/SEARCH .svg'
import Mic from '../images/3128290.png' 

   const Input = () => {
    
   const [searchText, setSearchText] = useState("");
  //  const [searchResults, setSearchResults] = useState([])


  // function handleChange(event) {
  //   const input = event.target.value
  //   setSearchText(input);

  // }
  // function handleKeyDown() {
  //   console.log(`the new word is ${searchText}`)
  //    setSearchResults("")
  // }
  
//   const [value, SetValue] = useState("")

//   <input onChange={(e)=>setValue(http://e.target.value)} />
  
//   // display your input value
//   <p>{value}<p>

// // display your input value
// <p>{value}<p></p>

 
  return (
    <div  className="input">
             <input type="text" 
             className='input-field'
             placeholder='Search Google or type a URL'
             value={searchText}
             onChange={(e)=>setSearchText(e.target.value)}
            //  onKeyDown={handleKeyDown} 
             />
            <img src={SearchIcon} className='search-icon' alt="search icon" />
            <img src={Mic} className='mic' alt="Mic icon" /> 
            <p>{searchText}</p>
        
    </div>
  )
}

export default Input