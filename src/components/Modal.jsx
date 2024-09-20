import React from 'react'

function Modal({children, isOpenModal, setIsOpenModal}) {
  return (
    <div onClick={(e) => e.target.id == "wrapper" ? setIsOpenModal(false) : ""} id='wrapper' className={`fixed inset-0 flex items-center justify-center backdrop-blur duration-300 ${isOpenModal ? "" : "scale-0"}`}>
        <div className="w-[400px] bg-slate-400 p-3 rounded-md">{children}</div>
    </div>
  )
}

export default Modal
