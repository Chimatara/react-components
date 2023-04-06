import React from 'react'
import MyHeaderSection from './MyHeaderSection'
import '../css/Google.css'
import SearchSection from './SearchSection'
import Footer from './Footer'

const MyApp = () => {
  return (
    <div>
        <MyHeaderSection />
        <SearchSection />
        <Footer />
    </div>
  )
}

export default MyApp