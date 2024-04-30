import React, { useState } from "react";

export default function Modal ({property} ) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(modal => !modal);
    }
    
  return ( 
    <>
      <div className="flex cursor-pointer justify-center">
        <img className="cursor-pointer flex justify-center shadow-lg" src={property.url} onClick={toggleModal} alt="image modal"/>
        {modal && (
          <div className="modal">
              <div className="overlay">
                  <div className="modal-content">
                    <button className="close-button" onClick={toggleModal}>
                      <img src="/close-window.svg" alt="Close" />
                    </button>
                    <img src={property.url} alt="image modal"/>
                  </div>
              </div>
          </div>
          )}        
      </div>
    </>
  );
}