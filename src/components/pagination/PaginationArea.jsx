import React from 'react'

const PaginationArea = ({ pageNumber, Paginate, currentPage, next, prev }) => {

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          {pageNumber.length > 0 &&  <li onClick={prev}>
            <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </a>
          </li>}
         
          {pageNumber.map((item, i) => (
            <li onClick={() => Paginate(item)} className={currentPage == i +1 ? " flex items-center justify-center px-3 h-8 leading-tight text-white  border border-gray-300 bg-[#262626] cursor-pointer" :  "flex items-center justify-center px-3 h-8 leading-tight   border border-gray-300  bg-white cursor-pointer"}>
            
               {item + 1}

            </li>
          ))}

        { pageNumber.length > 0 && <li>
            <a onClick={next} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Next
            </a>
          </li>}

          
        </ul>
      </nav>

    </>



  )
}

export default PaginationArea