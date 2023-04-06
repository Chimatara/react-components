import React from 'react'
import CountryName from './CountryName'
import Services from './Services'
import CopywrightLogo from './CopywrightLogo'

const Footer = () => {
  return (
    <div className='footer'>
        <CountryName />
        <div className="services-div">
            <Services title={"About"} />
            <Services title={"Advertising"} />
            <Services title={"Business"} />
            <Services title={"How Search works"} />
            <div className="middle">
                <CopywrightLogo />
                <Services title={"Carbon since 2007"} />
            </div>
            <div className="right">
                <Services title={"Privacy"} />
                <Services title={"Terms"} />
                <Services title={"Settings"} />
            </div>
        </div>
    </div>
  )
}

export default Footer