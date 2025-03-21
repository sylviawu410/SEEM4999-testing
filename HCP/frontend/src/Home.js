import { useState } from 'react';

function Home() {
  const [heading, setHeading] = useState('Welcome Back!');
  const [subheading, setSubheading] = useState('Please enter the Credentials');
  const handleClick = () => {
    setHeading('Incorrect ID or password');
    setSubheading('Please retry again');
  };
  return (
    <div className="public-page flex flex-row">

      <form className='m-auto w-1/3 flex-col flex gap-3 mt-10 pt-10'>
        <h2 className="text-2xl font-medium" id="heading">{heading}</h2>
        <h3 className="font-medium mb-12" id='subheading'>{subheading}</h3>
        <label htmlFor="staff-id-input" className="blocktext-gray-900 font-medium">Staff ID</label>
        <input type="number" id="staff-id-input" aria-describedby="helper-text-explanation" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the staff ID" required />

        <label htmlFor="name-input" className="blocktext-gray-900 font-medium">Staff Name</label>
        <input type="text" id="name-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the name" required />

        <label htmlFor="specialty-input" className="blocktext-gray-900 font-medium">Specialty</label>
        <input type="text" id="specialty-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the specialty" required />

        <label htmlFor="qualification-input" className="blocktext-gray-900 font-medium">Qualifications</label>
        <input type="text" id="qualification-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the qualification" required />

        <label htmlFor="schedule-input" className="blocktext-gray-900 font-medium">Schedule</label>
        <input type="text" id="schedule-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the schedule" required />
        <button onClick={() => handleClick()} type="button" className="font-semibold text-white bg-lime-900 rounded-[10px] pt-[7px] pb-[7px] mt-4">Upload</button>

        <label htmlFor="remove-input" className="blocktext-gray-900 text-2xl font-medium mt-10 pt-10">Remove Medical Professional</label>
        <label htmlFor="remove-input" className="blocktext-gray-900 font-medium">Staff ID</label>
        <input type="text" id="remove-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the staff ID" required />
        <button type="button" className="font-semibold text-white bg-red-900 rounded-[10px] pt-[7px] pb-[7px] mt-4 mb-10">Remove</button>


        {/* <div className="m-auto flex">
          <p>Don’t have an account?&nbsp;</p>
          <a className="text-sky-700" href="https://www.iamsmart.gov.hk/en/reg.html">Sign Up</a>
        </div> */}

      </form>
      <img className="h-auto w-2/5" src="../images/background.png" alt="background" />
    </div>
  );
}

export default Home;
