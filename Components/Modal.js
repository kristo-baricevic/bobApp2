import React, { useState } from "react";


export default function Modal ({property} ) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(modal => !modal);
    }
    
  return ( 
        <>
          <div className="cursor-pointer px">
          <img src={property.url} onClick={toggleModal} alt="image modal"/>
          {modal && (
            <div className="modal">
                <div className="overlay" onClick={toggleModal}>
                    <div className="modal-content">
                        <img src={property.url} onClick={toggleModal} alt="image modal"/>
                    </div>
                </div>
            </div>
            )}        
          </div>
        </>
  );
}