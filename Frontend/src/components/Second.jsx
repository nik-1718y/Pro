import React from 'react'

function Second() {
  return (
    <>
    <div className='mt-8 grid grid-cols-4 gap-4'>
    <div className="collapse border w-80 h-24 flex items-center p-2">
  <div className="mr-auto">
    <p>Tech design requirements.pdf</p>
    <p>240KB</p>
    <div className="flex items-center">
      <progress className="progress progress-info w-48" value="100" max="100"></progress>
      <span className="ml-2">100%</span>
    </div>
  </div>
  <img className="h-8 w-8 ml-4" src="public/pdf-icon.webp" alt="PDF Icon" />
</div>


<div className="collapse border w-80 h-24 flex items-center p-2">
  <div className="mr-auto">
    <p>Tech design requirements.pdf</p>
    <p>240KB</p>
    <div className="flex items-center">
      <progress className="progress progress-info w-48" value="100" max="100"></progress>
      <span className="ml-2">100%</span>
    </div>
  </div>
  <img className="h-8 w-8 ml-4" src="public/pdf-icon.webp" alt="PDF Icon" />
</div>

<div className="collapse border w-80 h-24 p-2 flex items-center justify-between">
  {/* <!-- Left section: Text and progress information --> */}
  <div className="flex flex-col">
    <p className="">Tech design requirements.pdf</p>
    <p className="">240KB - 100% uploaded</p>
  </div>

  {/* <!-- Right section: Image and checkbox --> */}
  <div className="flex items-center space-x-4">
    <img className="h-8 w-8" src="public/pdf-icon.webp" alt="PDF Icon" />
    <label className="label cursor-pointer">
      <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
    </label>
  </div>
</div>


<div className="collapse border w-80 h-24 p-2 flex items-center justify-between">
  {/* <!-- Left section: Text and progress information --> */}
  <div className="flex flex-col">
    <p className="">Tech design requirements.pdf</p>
    <p className="">240KB - 100% uploaded</p>
  </div>

  {/* <!-- Right section: Image and checkbox --> */}
  <div className="flex items-center space-x-4">
    <img className="h-8 w-8" src="public/pdf-icon.webp" alt="PDF Icon" />
    <label className="label cursor-pointer">
      <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
    </label>
  </div>
</div>


<div className="collapse border w-80 h-24 flex items-center p-2">
  <div className="mr-auto">
    <p>Dashboard recoding.mp4</p>
    <p>16MB</p>
    <div className="flex items-center">
    <progress className="progress progress-info w-48" value="40" max="100"></progress>
      <span className="ml-2">40%</span>
    </div>
  </div>
  <img className="h-8 w-8 ml-4" src="public/mp4-vector-icon-png_287443.jpg" alt="PDF Icon" />
</div>

<div className="collapse border w-80 h-24 flex items-center p-2">
  <div className="mr-auto">
    <p>Dashboard recoding.mp4</p>
    <p>16MB</p>
    <div className="flex items-center">
    <progress className="progress progress-info w-48" value="40" max="100"></progress>
      <span className="ml-2">40%</span>
    </div>
  </div>
  <img className="h-8 w-8 ml-4" src="public/mp4-vector-icon-png_287443.jpg" alt="PDF Icon" />
</div>


<div className="collapse border w-80 h-24 p-2 flex items-center justify-between">
  <div className="flex flex-col">
    <p className="">Tech design requirements.pdf</p>
    <p className="">240KB</p>
  </div>
  <div className="flex items-center space-x-2">
    <div className=" ">
      <div className="radial-progress w-11 h-11" style={{ "--value": 60 }}></div>
    </div>
    <img className="h-8 w-8" src="public/mp4-vector-icon-png_287443.jpg" alt="PDF Icon" />
  </div>
</div>

<div className="collapse border w-80 h-24 p-2 flex items-center justify-between">
  <div className="flex flex-col">
    <p className="">Tech design requirements.pdf</p>
    <p className="">240KB</p>
  </div>
  <div className="flex items-center  space-x-2">
    <div className="">
      <div className="radial-progress w-11 h-11" style={{ "--value": 60 }}></div>
    </div>
    <img className="h-8 w-8" src="public/mp4-vector-icon-png_287443.jpg" alt="PDF Icon" />
  </div>
</div>


{/* <div className="collapse border w-80 h-24">
     <p>Tech design requirements.pdf</p>
     <p>240KB</p>
     <div className="radial-progress text-purple-600 ml-64 w-12 h-12" style={{ "--value": 70 }} role="progressbar"></div> */}
     {/* <progress className="progress progress-info w-56" value="40" max="100"></progress> */}
{/* </div> */}


<div className="collapse border w-80 h-24 flex items-center p-2">
  <div className="mr-auto">
  <p className="">Dashboard prototype FINAL.fig</p>
  <p className="">4.2MB</p>
    <div className="flex items-center">
      <progress className="progress progress-info w-48" value="80" max="100"></progress>
      <span className="ml-2">80%</span>
    </div>
  </div>
  <img className="h-8 w-8 ml-4" src="public/11384108.png" alt="PDF Icon" />
</div>


<div className="collapse border w-80 h-24 flex items-center p-2">
  <div className="mr-auto">
  <p className="">Dashboard prototype FINAL.fig</p>
  <p className="">4.2MB</p>
    <div className="flex items-center">
      <progress className="progress progress-info w-48" value="80" max="100"></progress>
      <span className="ml-2">80%</span>
    </div>
  </div>
  <img className="h-8 w-8 ml-4" src="public/11384108.png" alt="PDF Icon" />
</div>


<div className="collapse border w-80 h-24 p-2 flex items-center justify-between">
  <div className="flex flex-col">
  <p className="">Dashboard prototype FINAL.fig</p>
  <p className="">4.2MB-70% uploaded</p>
  </div>
  <div className="flex items-center  space-x-2">
    <div className="">
      <div className="radial-progress w-11 h-11" style={{ "--value": 60 }}></div>
    </div>
    <img className="h-8 w-8" src="public/11384108.png" alt="PDF Icon" />
  </div>
</div>

<div className="collapse border w-80 h-24 p-2 flex items-center justify-between">
  <div className="flex flex-col">
    <p className="">Dashboard prototype FINAL.fig</p>
    <p className="">4.2MB-70% uploaded</p>
  </div>
  <div className="flex items-center  space-x-2">
    <div className="">
      <div className="radial-progress w-11 h-11" style={{ "--value": 60 }}></div>
    </div>
    <img className="h-8 w-8" src="public/11384108.png" alt="PDF Icon" />
  </div>
</div>

    </div>
    </>
  )
}

export default Second
