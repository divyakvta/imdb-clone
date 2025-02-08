import React from 'react'

const Pagination = ({handleNext, handlePrev, pageNo}) => {
  return (
    <div className='flex justify-center bg-gray-400 p-4 mt-4'>
      <div className='px-8 cursor-pointer' onClick={handlePrev}>
      <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className='font-bold'>{pageNo}</div>
      <div className='px-8 cursor-pointer' onClick={handleNext}>
      <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default Pagination
