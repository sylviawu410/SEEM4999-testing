function Record() {
    return (
      <div className="public-page flex flex-row">
        <img className="h-auto w-2/5" src="../images/background.png" alt="background" />
        <form className='m-auto w-1/3 flex-col flex gap-3'>
          <h2 className="text-2xl font-medium mb-12" id="heading">Medical Data Upload</h2>
          <label htmlFor="name-input" className="blocktext-gray-900 font-medium">Patient Name</label>
          <input type="text" id="name-input" aria-describedby="helper-text-explanation" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your name" required />

          <label htmlFor="patient-number-input" className="blocktext-gray-900 font-medium">Patient Number</label>
          <input type="number" id="patient-number-input" aria-describedby="helper-text-explanation" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the number" required />
  
          <label htmlFor="blood-input" className="blocktext-gray-900 font-medium">Blood Pressure</label>
          <input type="number" id="blood-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the number" required />

          <label htmlFor="experience-input" className="blocktext-gray-900 font-medium">Experience</label>
          <input type="number" id="experience-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the number" required />

          <label htmlFor="institution-input" className="blocktext-gray-900 font-medium">Institution Name</label>
          <input type="text" id="institution-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the name" required />

          <button type="button" className="text-white bg-lime-900 font-semibold rounded-[10px] pt-[7px] pb-[7px] mt-8">Upload</button>
          
        </form>
        
      </div>
    );
  }
  
  export default Record;
  