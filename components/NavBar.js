import React from 'react'
import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'

function NavBar() {
    return (
        <div className="flex flex-row space-x-60 px-10 py-7 shadow-xl">
            <div className="flex justify-center items-center space-x-12">
                <div>
                    <a href='#'>
                        <img src='https://cdn.usbrandcolors.com/images/logos/starbucks-logo.svg'
                            className='w-12 h-12' />
                    </a>
                </div>
                <div className='flex justify-center items-center space-x-6 font-bold text-sm tracking-widest'>
                    <a href='#' className='hover:text-starbucks'>
                        MENU
                    </a>
                    <a href='#' className='hover:text-starbucks'>
                        REWARDS
                    </a>
                    <a href='#' className='hover:text-starbucks'>
                        GIFT CARDS
                    </a>
                </div>
            </div>
            <div></div>
            <div className='flex justify-center items-center space-x-14'>
                <div className='flex justify-center items-center space-x-2  hover:cursor-pointer hover:text-starbucks
                font-semibold text-sm'>
                    <FaMapMarkerAlt size={'1.4rem'} />
                    <h3>Find a store</h3>
                </div>
                <div className='flex justify-center items-center space-x-3 font-semibold text-sm'>
                    <div className='flex px-4 py-1 rounded-2xl border border-black hover:bg-gray-100'>
                        <button className=''>
                            Sign in
                        </button>
                    </div>
                    <div className='flex px-4 py-1 rounded-2xl border border-black bg-black text-white hover:opacity-75 '>
                        <button>
                            Join now
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBar
