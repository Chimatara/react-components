import React from 'react'
import MyLinks from './MyLinks'
import AppLauncher from './AppLauncher'
import Avatar from './Avatar'

const MyHeaderSection = () => {
  return (
    <div className='container'>
      <div className="wrapper"></div>
      <div className="child">
            <MyLinks title={"Gmail"} />
            <MyLinks title={"Images"} />
            <AppLauncher />
            <Avatar />
      </div>
    </div>
  )
}

export default MyHeaderSection