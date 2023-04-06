import React from 'react'
import GoogleLogo from './GoogleLogo'
import Input from './Input'
import Info from './Info'
import Language from './Language'
import LanguageOption from './LanguageOption'


const SearchSection = () => {
  return (
    <div>
        <GoogleLogo />
        <Input />
        <div className="info-div">
          <Info title={"Google"} />
          <Info title={"I'm feling lucky"} />
        </div>
        <div className="language-div">
           <LanguageOption />
           <Language title={"Hausa"} />
           <Language title={"Ede Yoruba"} />
           <Language title={"Igbo"} />
           <Language title={"Nigerian Pidgin"} />
        </div>
    </div>
  )
}

export default SearchSection