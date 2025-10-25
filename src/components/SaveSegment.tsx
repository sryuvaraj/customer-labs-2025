import React from 'react'
import SegmentModal from './SegmentModal'

const SaveSegment = () => {

  const [showModal, setShowModal] = React.useState(false);
  
  return (
    <div className='w-full relative bg-white h-screen'>
      <div className='bg-black/40 h-full'>
        <p className='text-white border border-white w-fit p-1 px-4' onClick={() => setShowModal(true)}>Save Segment</p>
        {
          showModal && <div className=' absolute top-0 right-0 h-screen min-h-screen w-full flex justify-end items-start '>
            <div className='h-full w-[30%] bg-white'>
           <SegmentModal showModal={showModal} setShowModal={setShowModal} />
           </div>
        </div>
        }
        </div>
    </div>
  )
}

export default SaveSegment