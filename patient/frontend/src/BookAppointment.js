import { useLocation } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const appointment = location.state.appointment;
    console.log("Functions: bookAppointment")


    return (
        <div className="flex flex-row ">
            <div className='w-6/10 ml-15 mt-10'>
                <div className='flex ' >
                    <img className="size-25" src={`${process.env.PUBLIC_URL}/images/hospital.png`} alt='' />
                    <div className='ml-10'>
                        <p className="text-base font-semibold text-gray-600">{appointment.type}</p>
                        <p className="text-3xl font-bold mt-2">{appointment.name}</p>
                        <p className="text-xs text-gray-600 font-semibold mt-1">{appointment.service}</p>
                    </div>
                </div>
                <hr className="mt-5 mb-4 h-px bg-gray-300 border-0 "></hr>
                <form className='m-auto flex-col flex gap-3 my-10 '>
                    <h2 className="my-1.5 w-full text-lg font-semibold tracking-tight text-gray-900 ">Information Required</h2>
                    <label htmlFor="name-input" className="blocktext-gray-900 font-medium">Name</label>
                    <input type="number" id="name-input" aria-describedby="helper-text-explanation" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your name" required />

                    <label htmlFor="gender-input" className="blocktext-gray-900 font-medium">Gender</label>
                    <input type="text" id="gender-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your gender" required />

                    <label htmlFor="ehr-input" className="blocktext-gray-900 font-medium">eHR Number</label>
                    <input type="text" id="ehr-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your eHR Number" required />

                    <label htmlFor="email-input" className="blocktext-gray-900 font-medium">Email</label>
                    <input type="email" id="email-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required />

                    <label htmlFor="phone-input" className="blocktext-gray-900 font-medium">Phone Number</label>
                    <input type="tel" id="phone-input" aria-describedby="helper-text-explanation" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your phone number" required />
                </form>

            </div>
            <div className='mb-[200px] mt-[80px] w-4/10 flex-col flex gap-8  '>
                <div className="flex justify-center gap-7 flex-wrap">

                    <div key={appointment.id} className="w-100  p-5 bg-white border border-gray-100 rounded-[5px] shadow-sm hover:bg-gray-50">
                        <h2 className="text-xl font-semibold mt-4 mb-5" id="heading">Appointments</h2>
                        <span className='mt-10 pr-3 font-medium rtl:text-right text-md w-full'>Address</span>
                        <div className="flex gap-4 items-center w-85">
                            <img src={`${process.env.PUBLIC_URL}/images/mappin.png`} className="w-5 h-6.5" alt="" />
                            <p className='text-sm text-gray-700'>{appointment.name}, XX Road 33, Tai Po, New Territories</p>

                        </div>
                        <div className='mt-8'>
                            <span className='py-4 pr-3 font-medium rtl:text-right text-md w-full'>Selected Date</span>
                            <div className='w-full'>
                                <button type="button" className="text-emerald-900 text-white border border-emerald-900 bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-900 font-medium rounded-full text-sm px-4 py-2 text-center my-3">Sun, 16 Mar</button>

                            </div>
                        </div>
                        <div className="mt-8">

                            <span className='py-4 pr-3 font-medium rtl:text-right text-md w-full'>Selected Time</span>
                            <div className='w-full'>
                                <button type="button" className="text-emerald-900 text-white border border-emerald-900 bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-emerald-900 font-medium rounded-full text-sm px-4 py-2 text-center my-3">09:00 - 10:00</button>
                            </div>
                            <a href='http://localhost:3000/dashboard'>
                                <button
                                    type='button'
                                    className="inline-flex w-full mt-3 justify-center gap-x-1.5 rounded-md bg-emerald-900 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-stone-300 ring-inset hover:bg-white hover:text-black"
                                >Book</button>
                            </a>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Detail;