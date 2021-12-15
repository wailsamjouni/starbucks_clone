import React from 'react'
function Footer() {
    const aboutUs = ['Our Company', 'Our Coffee', 'Stories and News', 'Starbucks Archive', 'Investor Relations', 'Customer Service'];
    const careers = ['Culture and Values', 'Inclusion,Diversity, and Equity', 'College Achievement Plan', 'Alumni Community', 'U.S. Careers', 'International Careers'];
    const socialImpact = ['Poeple', 'Planet', 'Environment and Social Impact Reporting'];
    const forBusinessPartners = ['Landlord Support Center', 'Suppliers', 'Corporate Gift Card Sales', 'Office and Foodservice Coffee'];
    const orderandPickup = ['Order on the App', 'Order on th Web', 'Delivery', 'Order and Pickup Options', 'Explore and Find Coffee for Home'];
    const style = 'font-semibold tracking-wider text-lg mb-5';
    const listStyle = 'font-sm text-gray-500 hover:text-gray-900 cursor-pointer mb-5'
    return (
        <footer className='flex border-t-2 border-gray-300 pt-8 pl-14 space-x-6 w-screen'>
            <div>
                <h1 className={style}>About Us</h1>
                {aboutUs.map(item => <h4 className={listStyle}>
                    {item}
                </h4>)}
            </div>
            <div>
                <h1 className={style}>Careers</h1>
                {careers.map(item => <h4 className={listStyle}>
                    {item}
                </h4>)}
            </div>
            <div>
                <h1 className={style}>Social Impact</h1>
                {socialImpact.map(item => <h4 className={listStyle}>
                    {item}
                </h4>)}
            </div>
            <div>
                <h1 className={style}>For Business Partners</h1>
                {forBusinessPartners.map(item => <h4 className={listStyle}>
                    {item}
                </h4>)}
            </div>
            <div>
                <h1 className={style}>Order and Pickup</h1>
                {orderandPickup.map(item => <h4 className={listStyle}>
                    {item}
                </h4>)}
            </div>
        </footer>
    )
}

export default Footer
