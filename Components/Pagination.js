import React, {useState, useEffect} from 'react'


export default function Pagination ( { nPages, currentPage, setCurrentPage, visiblePhotos, setVisiblePhotos } ) {



    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    

    const nextPage = () => {
            if(currentPage !== nPages) {setCurrentPage(currentPage + 1);
            }
    }
    
    const prevPage = () => {
        if(currentPage !== 1) {setCurrentPage(currentPage - 1);
            }
    }
    
    return (
        <nav>
           
        <div className="w-full mt-4">
          <div className="flex justify-center items-center">
            <ul className="pagination">
                <li className="pagination">
                    <a className="pagination" 
                        onClick={prevPage} 
                        href='#'>
                        <i class="fa-solid fa-square-caret-left fa-4x"></i>
                    </a>
                </li>
                <li className="pagination">
                    <a className="pagination" 
                        onClick={nextPage}
                        href='#'>
                        <i class="fa-solid fa-square-caret-right fa-4x"></i>
                    </a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    )
}

