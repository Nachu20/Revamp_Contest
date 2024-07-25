import React from 'react';
import { LayoutDashboard, User, BellRing, MessageSquareMore, Search, Library, BadgeHelp, BookOpen, BookPlus, Settings, LogOut } from 'lucide-react';

const Home = () => {
    return (
        <>
            <div className='2xl:container'>
                <div className='w-full grid grid-cols-1 font-poppins'>
                    <div className='flex flex-row'>
                        <div className='w-[20%] h-screen bg-[#0B3A54] text-white flex flex-col'>
                            <div className='mt-8 mb-10 text-center'>
                                <p className='text-3xl text-amber-400 font-bold'>EDUMATE</p>
                            </div>
                            <div>
                                <ul className='space-y-4'>
                                    <li className='flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer'>
                                        <LayoutDashboard className='mr-2' />
                                        Dashboard
                                    </li>
                                    <li className='flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer'>
                                        <BookOpen className='mr-2' />
                                        Courses
                                    </li>
                                    <li className='flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer'>
                                        <BookPlus className='mr-2' />
                                        Grades
                                    </li>
                                    <li className='flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer'>
                                        <Library className='mr-2' />
                                        Assignments
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-auto'>
                                <ul className='space-y-4'>
                                    <li className='flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer'>
                                        <Settings className='mr-2' />
                                        Settings
                                    </li>
                                    <li className='flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer'>
                                        <BadgeHelp className='mr-2' />
                                        Help
                                    </li>
                                    <li className='flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer'>
                                        <LogOut className='mr-2' />
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='2xl:container mx-auto mt-5'>
                            <div className='w-[90%] grid grid-cols-1 mx-auto '>
                                <div className='flex flex-row justify-around items-center'>
                                    <div className='flex flex-row'>
                                        <input type="text" placeholder="Search your courses and learning materials here" className='text-cyan-900 w-96 h-8 border border-cyan-800 focus:outline-none rounded-md' />
                                        <button type="submit"><Search size={24} color='gray' /></button>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <ul className='flex flex-row space-x-4 items-center'>
                                            <li><MessageSquareMore /></li>
                                            <li><BellRing /></li>
                                            <li><User /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-20 flex flex-row gap-14 justify-center items-center bg-[#F5F5F5] w-[70%] '>
                                    <div>
                                        <p className='text-2xl'>Hello Nachu, nice to have you back!</p>
                                        <p>We hope you’re ready for a productive day of learning!</p>
                                    </div>
                                    <div >
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8TfdPSju3IQ7jrsMU_1h_QHaJP%26pid%3DApi&f=1&ipt=c8736fa461e3a7436537b7f1b48a7daa459292f73d4c8aa27739a322d250f1ec&ipo=images" alt="landing_image_1" className='w-[200px] h-[160px]' />
                                    </div>
                                </div>
                                <div className='mt-20 flex flex-row gap-14 justify-center items-center bg-[#F5F5F5] w-[30%] '>
                                    <p className='text-2xl'>Total Contents</p>
                                    <div >
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8TfdPSju3IQ7jrsMU_1h_QHaJP%26pid%3DApi&f=1&ipt=c8736fa461e3a7436537b7f1b48a7daa459292f73d4c8aa27739a322d250f1ec&ipo=images" alt="landing_image_1" className='w-[200px] h-[160px]' />
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
