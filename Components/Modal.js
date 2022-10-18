import React, { useState } from "react";


export default function Modal ({property} ) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(modal => !modal);
    }
    
  return ( 
        <>
          <div>
          <img src={property.url} onClick={toggleModal}/>
          {modal && (
            <div className="modal">
                <div className="overlay" onClick={toggleModal}>
                    <div className="modal-content">
                        <img src={property.url} onClick={toggleModal} />
                    </div>
                </div>
            </div>
            )}        
          </div>
        </>
  );
}