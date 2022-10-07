import React, { useState } from "react";
import { saveAs } from 'file-saver';



export default function Modal ({property} ) {
    const [modal, setModal] = useState(false)
    const downloadImage = () => {
      saveAs(property.url, 'image.jpg')
    }

    const toggleModal = () => {
        setModal(modal => !modal);
    }
    
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