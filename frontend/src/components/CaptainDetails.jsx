import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-between gap-3">
              <img className="h-10 w-10 rounded-full object-cover  " src="https://i.pinimg.com/736x/7c/57/9a/7c579aa1ae1855c99f41f23b7e34cfe4.jpg" alt="" />
              <h4 className="text-lg font-semibold ">Tohru Honda</h4>
            </div>
            <div>
              <h5 className="text-xl font-semibold">₹777222</h5>
              <p className="text-sm font-medium text-gray-600">earned</p>
            </div>
          </div>
          <div className="flex p-3 bg-gray-200 rounded-xl justify-center gap-5 items-start ">
            <div className="text-center p-2">
              <i className="text-3xl mb-2 font-light ri-timer-2-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center p-2">
              <i className="text-3xl mb-2 font-light ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center p-2">
              <i className="text-3xl mb-2 font-light ri-booklet-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CaptainDetails
