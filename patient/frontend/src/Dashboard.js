function Dashboard() {
    console.log("Functions: getMedicalProfessionalById, getUserAppointments, cancelAppointment")
    return (
        <div className="flex flex-row ">

            <img className="h-[800px] w-1/4 object-cover sticky top-0" src="../images/background.png" alt="background" />
            <div className='mb-[200px] mt-[100px] mx-auto w-3/5 flex-col flex gap-8  '>

                <div className="flex">
                    <h2 className="text-2xl font-medium mb-5" id="heading">Records</h2>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-3 p-6 bg-white border border-gray-100 rounded-[10px] shadow-sm hover:bg-gray-50 w-full">
                        <h2 className="mb-2 w-full text-lg font-semibold tracking-tight text-gray-900 ">Appointments</h2>
                        <div className="flex w-full items-center">
                            <div className="flex flex-col px-1.5  bg-gray-900 rounded-[6px] items-center">
                                <div className="text-amber-400 font-bold ">Mon</div>
                                <div className="font-[10px] text-white">10</div>
                            </div>
                            <div className="flex flex-col ml-5">
                                <p className="font-medium text-[14px]">Dr Cameron</p>
                                <p className="text-[14px] text-gray-500 ">9:00 am - 11:30 am</p>
                            </div>
                            <img className=" w-1/10 h-5 ml-auto" alt="dots" src="../images/dots.svg"></img>
                        </div>
                        <div className="flex w-full items-center">
                            <div className="flex flex-col px-1.5  bg-gray-900 rounded-[6px] items-center">
                                <div className="text-amber-400 font-bold ">Mon</div>
                                <div className="font-[10px] text-white">11</div>
                            </div>
                            <div className="flex flex-col ml-5">
                                <p className="font-medium text-[14px]">Dr Sara</p>
                                <p className="text-[14px] text-gray-500 ">9:00 am - 11:30 am</p>
                            </div>
                            <img className=" w-1/10 h-5 ml-auto" alt="dots" src="../images/dots.svg"></img>
                        </div>
                        <div className="flex w-full  items-center">
                            <div className="flex flex-col px-1.5  bg-gray-900 rounded-[6px] items-center">
                                <div className="text-amber-400 font-bold ">Mon</div>
                                <div className="font-[10px] text-white">10</div>
                            </div>
                            <div className="flex flex-col ml-5">
                                <p className="font-medium text-[14px]">Dr Cameron</p>
                                <p className="text-[14px] text-gray-500 ">9:00 am - 11:30 am</p>
                            </div>
                            <img className=" w-1/10 h-5 ml-auto" alt="dots" src="../images/dots.svg"></img>
                        </div>
                    </div>
                </div>
                {/* <div className="m-auto w-full flex-col flex gap-3 mt-8 ">
                    <label htmlFor="specific-professional-input" className="blocktext-gray-900 text-2xl font-medium mt-10  mb-5">Find Specific Medical Professional</label>
                    <label htmlFor="specific-professional-input" className="blocktext-gray-900 font-medium">Staff ID</label>
                    <input type="text" id="remove-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the staff ID" required />
                    <button type="button" className="font-semibold text-white bg-lime-900 rounded-[10px] pt-[7px] pb-[7px] mt-4 mb-10">Search</button>

                </div> */}

                <div className="m-auto w-full flex-col flex gap-3 mt-5 ">
                    <label htmlFor="appointment-input" className="blocktext-gray-900 text-2xl font-medium   mb-5">Find Your Appointment</label>
                    <label htmlFor="appointment-input" className="blocktext-gray-900 font-medium">Your eHR Number</label>
                    <input type="text" id="remove-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the eHR number" required />
                    <button type="button" className="font-semibold text-white bg-lime-900 rounded-[10px] pt-[7px] pb-[7px] mt-4 mb-10">Search</button>

                </div>

                <div className="m-auto w-full flex-col flex gap-3 mt-5 ">
                    <label htmlFor="appointment-input" className="blocktext-gray-900 text-2xl font-medium   mb-5">Cancel Your Appointment</label>
                    <label htmlFor="appointment-input" className="blocktext-gray-900 font-medium">Your Booking ID</label>
                    <input type="text" id="remove-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the booking ID" required />
                    <button type="button" className="font-semibold text-white bg-red-900 rounded-[10px] pt-[7px] pb-[7px] mt-4 mb-10">Cancel</button>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;
