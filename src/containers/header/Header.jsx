import React from 'react'

import {Navbar, ModalTweetar} from '../../components/index'
const Header = () => {
  return (
    <div className='flex flex-col w-64 justify-end'>
      <div>Logo</div>
      <Navbar />
      <ModalTweetar />
      <div>Perfil usuário</div>
    </div>
  )
}

export default Header