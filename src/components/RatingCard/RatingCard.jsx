import React, { useState } from 'react'
import star from '../../assets/images/icon-star.svg'
import thanks from '../../assets/images/illustration-thank-you.svg'

function RatingCard() {
  const [selectedValue, setSelectedValue] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleRateBtnClick(event) {
    const value = parseInt(event.target.value);
    setSelectedValue(value);
  }

  return (
    <div className='w-[450px] bg-gradient-to-b from-grayish-blue to-dark-grayish-blue py-7 px-7 rounded-2xl'>
      {submitted ? (
        <div className="flex flex-col justify-center items-center">
          <img src={thanks} alt="" srcset="" className='pb-5' />
          <div className="bg-dark-blue w-fit py-1 px-2 text-sm text-orange-600 rounded-full">
            <p>you selected {selectedValue} out of 5</p>
          </div>
          <h1 className='text-white text-2xl py-5'>Thank You!</h1>
          <p className='text-center text-medium-grey'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
      ) : (
        <>
          <div className="rounded-full bg-dark-blue w-fit p-3">
            <img src={star} alt="" srcset="" />
          </div>
          <h1 className='text-white text-2xl py-5'>How did we do?</h1>
          <p className="text-gray-700">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className="flex justify-between py-6 text-medium-grey ">
            <button type="button" onClick={handleRateBtnClick} className='rounded-full bg-dark-blue w-fit px-5 py-3 focus:bg-orange-600 focus:text-white' value={1}>1</button>
            <button type="button" onClick={handleRateBtnClick} className='rounded-full bg-dark-blue w-fit px-5 py-3 focus:bg-orange-600 focus:text-white' value={2}>2</button>
            <button type="button" onClick={handleRateBtnClick} className='rounded-full bg-dark-blue w-fit px-5 py-3 focus:bg-orange-600 focus:text-white' value={3}>3</button>
            <button type="button" onClick={handleRateBtnClick} className='rounded-full bg-dark-blue w-fit px-5 py-3 focus:bg-orange-600 focus:text-white' value={4}>4</button>
            <button type="button" onClick={handleRateBtnClick} className='rounded-full bg-dark-blue w-fit px-5 py-3 focus:bg-orange-600 focus:text-white' value={5}>5</button>
          </div>
          <button onClick={handleSubmit} type='submit' className='bg-orange-600 w-full rounded-2xl py-1 uppercase text-white'>Submit</button>
        </>
      )}
    </div>
  )
}

export default RatingCard;
