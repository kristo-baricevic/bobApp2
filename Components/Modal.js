import Image from "next/image";
import React, { useState } from "react";

export default function Modal({ property }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(modal => !modal);
  }

  return (
    <>
      <div className="flex cursor-pointer justify-center">
        {/* Image Trigger */}
        <div className="flex justify-center shadow-lg">
          <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
            <Image 
              src={property.url} 
              onClick={toggleModal} 
              alt="image modal"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={500}
              height={500} 
            />
          </div>
        </div>
        {/* Modal Window */}
        {modal && (
          <div className="modal">
            <div className="overlay">
              <div className="modal-content">
                {/* Close Button */}
                <button className="cursor-pointer" onClick={toggleModal}>
                  <div style={{ width: '10%', height: '500px', position: 'absolute'}}> 
                    <Image 
                      src="/close-window.svg" 
                      alt="Close button" 
                      width={100}
                      height={100} 
                    />
                  </div>
                </button>
                {/* Modal Image */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Image 
                    src={property.url} 
                    alt="image modal"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
