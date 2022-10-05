import React, { useState } from "react";


export default function Modal ({property} ) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(modal => !modal);
    }
    
    // if(modal) {
    //     document.body.classList.add('active-modal')
    //   } else {
    //     document.body.classList.remove('active-modal')
    //   }
    
  return ( 
        <>
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
          </>
  );
}