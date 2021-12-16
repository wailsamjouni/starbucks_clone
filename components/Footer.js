import React from 'react'
import { FaSpotify, FaPinterest, } from 'react-icons/fa';
import { BsFacebook, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

function Footer() {
    const aboutUs = ['Our Company', 'Our Coffee', 'Stories and News', 'Starbucks Archive', 'Investor Relations', 'Customer Service'];
    const careers = ['Culture and Values', 'Inclusion,Diversity, and Equity', 'College Achievement Plan', 'Alumni Community', 'U.S. Careers', 'International Careers'];
    const socialImpact = ['Poeple', 'Planet', 'Environment and Social Impact Reporting'];
    const forBusinessPartners = ['Landlord Support Center', 'Suppliers', 'Corporate Gift Card Sales', 'Office and Foodservice Coffee'];
    const orderandPickup = ['Order on the App', 'Order on th Web', 'Delivery', 'Order and Pickup Options', 'Explore and Find Coffee for Home'];
    const style = 'font-semibold tracking-wider text-lg mb-5';
    const listStyle = 'font-sm text-gray-500 hover:text-gray-900 cursor-pointer mb-5'
    const icons = 'p-2 rounded-full hover:bg-gray-200 transition duration-800 ease-out delay-400'
    return (
        <footer className='flex flex-col'>
            <div className='flex border-t-2 border-gray-300 pt-8 pl-14 pr-32 pb-9 space-x-6 w-screen shadow-sm justify-center items-start font-medium'>
                <div className='mr-5 w-1/5 '>
                    <h1 className={style}>About Us</h1>
                    {aboutUs.map(item => <h4 className={listStyle}>
                        {item}
                    </h4>)}
                </div>
                <div className='mr-5 w-1/5'>
                    <h1 className={style}>Careers</h1>
                    {careers.map(item => <h4 className={listStyle}>
                        {item}
                    </h4>)}
                </div>
                <div className='mr-5 w-1/5'>
                    <h1 className={style}>Social Impact</h1>
                    {socialImpact.map(item => <h4 className={listStyle}>
                        {item}
                    </h4>)}
                </div>
                <div className='mr-5 w-1/5'>
                    <h1 className={style}>For Business Partners</h1>
                    {forBusinessPartners.map(item => <h4 className={listStyle}>
                        {item}
                    </h4>)}
                </div>
                <div className='mr-5 w-1/5'>
                    <h1 className={style}>Order and Pickup</h1>
                    {orderandPickup.map(item => <h4 className={listStyle}>
                        {item}
                    </h4>)}
                </div>
            </div>
            <div className='flex flex-col border-t-2 border-gray-300 items-start py-10 bg-white
            space-y-6 mx-10'
            >
                <div className='flex space-x-1 justify-center items-center'>
                    <div className={icons}>
                        <FaSpotify size={'1.9rem'} />
                    </div>
                    <div className={icons}>
                        <BsFacebook size={'1.9rem'} />
                    </div>
                    <div className={icons}>
                        <FaPinterest size={'1.9rem'} />
                    </div>
                    <div className={icons}>
                        <AiFillInstagram size={'1.9rem'} />
                    </div>
                    <div className={icons}>
                        <BsYoutube size={'1.9rem'} />
                    </div>
                    <div className={icons}>
                        <AiFillTwitterCircle size={'1.9rem'} />
                    </div>
                </div>
                <div className='flex justify-center items-center space-x-2'>
                    <a className='tracking-wider text-base border-r-2 border-gray-400
                    mr-4 pr-4 font-light hover:underline hover:cursor-pointer text-black'>
                        Privacy Policy
                    </a>
                    <a className='tracking-wider text-base border-r-2 border-gray-400
                    mr-4 pr-4 font-light hover:underline hover:cursor-pointer text-black'>
                        Terms of Use
                    </a>
                    <a className='tracking-wider text-base border-r-2 border-gray-400
                    mr-4 pr-4 pl-2 font-light hover:underline hover:cursor-pointer text-black'>
                        CA Supply Chain Act
                    </a>
                    <a className='tracking-wider text-base
                    mr-4 pl-3 font-light hover:underline hover:cursor-pointer text-black'>
                        Cookie Preferences
                    </a>
                </div>
                <span className='text-gray-500 text-sm'>
                    © 2021 Starbucks Coffee Company. All rights reserved.
                </span>
            </div>
        </footer >
    )
}

export default Footer
