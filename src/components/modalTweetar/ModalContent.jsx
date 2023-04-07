import React from 'react'

const ModalContent = ({onClose}) => {
  return (
    <div className='modal'>
      <div>eu a modal</div>
      <button onClick={onClose}>Icon</button>
    </div>
  )
}

export default ModalContent