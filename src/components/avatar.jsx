import React from 'react'
import AvatarLogo from '../images/IMG-20220518-WA0029.jpg'

const Avatar = () => {
  return (
    <div>
        <img src={AvatarLogo}  className='myAvatar' alt="My avatar" />
    </div>
  )
}

export default Avatar