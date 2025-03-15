function Dashboard() {
    return (
        <div className="public-page flex flex-row ">
            <img className="h-[800px] w-1/4 object-cover sticky top-0" src="../images/background.png" alt="background" />
            <div className='mb-[200px] mt-[100px] mx-auto w-3/5 flex-col flex gap-8  '>
                <div className="flex">
                    <h2 className="text-2xl font-normal mb-12" id="heading">Good Morning &nbsp;</h2>
                    <h2 className="text-2xl text-lime-900 font-bold">John Doe</h2>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-3 p-6 bg-white border border-gray-100 rounded-[10px] shadow-sm hover:bg-gray-100 w-6/10">
                        <h2 className="mb-2 w-full text-lg font-bold tracking-tight text-gray-900 ">Activity Feed</h2>
                        <div className="flex gap-3 w-full justify-between">
                            <img className="rounded-full w-1/10 bg-lime-100 " alt="doctor" src="../images/doctor1.png"></img>
                            <div className="flex flex-col">
                                <p className="font-medium text-[14px] ">You have been given medication of heart burn</p>
                                <p className="text-[12px] text-gray-500 ">10 mins ago</p>
                            </div>
                            <button className="text-[10px] p-[6px] text-white rounded-[6px] h-7 bg-indigo-500">scheduled</button>
                        </div>
                        <div className="flex gap-3 w-full justify-between">
                            <img className="rounded-full w-1/10 bg-yellow-100 h-12" src="../images/doctor1.png" alt="doctor"></img>
                            <div className="flex flex-col">
                                <p className="font-medium text-[14px]">Dr recommended you to stop drinking cold water</p>
                                <p className="text-[12px] text-gray-500 ">4 hours ago</p>
                            </div>
                            <button className="text-[10px] p-[6px] text-white rounded-[6px] h-7 bg-indigo-500">scheduled</button>
                        </div>

                        <div className="flex gap-3 w-full justify-between">
                            <img className="rounded-full w-1/10 bg-indigo-100 h-12" src="../images/doctor1.png" alt="doctor"></img>
                            <div className="flex flex-col">
                                <p className="font-medium text-[14px]">Dr recommended you to stop drinking cold water </p>
                                <p className="text-[12px] text-gray-500 ">4 hours ago</p>
                            </div>
                            <button className="text-[10px] p-[6px] text-white rounded-[6px] h-7 bg-green-500">completed</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-6 bg-white border border-gray-100 rounded-[10px] shadow-sm hover:bg-gray-100 w-4/10">
                        <h2 className="mb-2 w-full text-lg font-bold tracking-tight text-gray-900 ">Appointments</h2>
                        <div className="flex w-full justify-around items-center">
                            <div className="flex flex-col px-1.5  bg-gray-900 rounded-[6px] items-center">
                                <div className="text-amber-400 font-bold ">Mon</div>
                                <div className="font-[10px] text-white">10</div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-medium text-[14px]">Dr Cameron</p>
                                <p className="text-[14px] text-gray-500 ">9:00 am - 11:30 am</p>
                            </div>
                            <img className=" w-1/10 h-5" alt="dots" src="../images/dots.svg"></img>
                        </div>
                        <div className="flex w-full justify-around items-center">
                            <div className="flex flex-col px-1.5  bg-gray-900 rounded-[6px] items-center">
                                <div className="text-amber-400 font-bold ">Mon</div>
                                <div className="font-[10px] text-white">11</div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-medium text-[14px]">Dr Sara</p>
                                <p className="text-[14px] text-gray-500 ">9:00 am - 11:30 am</p>
                            </div>
                            <img className=" w-1/10 h-5" alt="dots" src="../images/dots.svg"></img>
                        </div>
                        <div className="flex w-full justify-around items-center">
                            <div className="flex flex-col px-1.5  bg-gray-900 rounded-[6px] items-center">
                                <div className="text-amber-400 font-bold ">Mon</div>
                                <div className="font-[10px] text-white">10</div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-medium text-[14px]">Dr Cameron</p>
                                <p className="text-[14px] text-gray-500 ">9:00 am - 11:30 am</p>
                            </div>
                            <img className=" w-1/10 h-5" alt="dots" src="../images/dots.svg"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-6 bg-white border border-gray-100 rounded-[10px] shadow-sm hover:bg-gray-100 w-full">
                    <h2 className="mb-1.5 w-full text-lg font-bold tracking-tight text-gray-900 ">Recent  Records</h2>
                    <div className='flex gap-3'>
                        <div className='flex flex-col w-3/10'>
                            <div className='font-semibold mb-3'>Medical Record</div>
                            <div className='gap-4 flex flex-col'>
                                <div className="flex gap-3">
                                    <img className=" size-[40px]" alt="record-icon" src="../images/record-icon1.png"></img>
                                    <div className="flex flex-col ">
                                        <p className="font-medium  ">ABC Hospital</p>
                                        <p className="text-[12px]  ">UK</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <img className=" size-[40px]" alt="record-icon" src="../images/record-icon2.png"></img>
                                    <div className="flex flex-col ">
                                        <p className="font-medium  ">ABC Hospital</p>
                                        <p className="text-[12px] ">UK</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <img className=" size-[40px]" alt="record-icon" src="../images/record-icon3.png"></img>
                                    <div className="flex flex-col ">
                                        <p className="font-medium  ">ABC Hospital</p>
                                        <p className="text-[12px] ">UK</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col w-3/10 '>
                            <div className='font-semibold mb-3'>Date</div>
                            <div className='flex flex-col gap-8'>
                                <div>10 Jan 20214</div>
                                <div>10 Dec 2021</div>
                                <div>10 Jan 2021</div>
                            </div>

                        </div>
                        <div className='flex flex-col w-5/10 '>
                            <div className='font-semibold mb-3'>Content</div>
                            <div className='flex flex-col gap-8'>
                                <div>Blood Pressure</div>
                                <div>zzzzzzz</div>
                                <div>xxxxxxxxxx</div>
                            </div>
                        </div>
                        <div className='flex flex-col w-3/10 '>
                            <div className='font-semibold mb-3'>Token</div>
                            <div className='flex flex-col gap-8'>
                                <div className='font-bold text-green-600'>VHA Token</div>
                                <div className='font-bold text-green-600'>VHA Token</div>
                                <div className='font-bold text-green-600'>VHA Token</div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default Dashboard;
