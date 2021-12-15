import React from 'react'
import first from '../images/first.png'
import BoxComponent from './BoxComponent'

function Boxes() {
    return (
        <div>
            <section className='w-full bg-greenlight my-7 px-28 py-7'>
                <div className='flex space-x-44'>

                    <div className='flex flex-col justify-center items-center space-y-4 opacity-80 text-center'>
                        <h1 className='font-bold text-5xl tracking-widest'>
                            STARBUCKS
                        </h1>
                        <h1 className='font-bold text-5xl tracking-widest'>
                            FOR LIFE
                        </h1>
                        <h3 className='text-2xl w-[400px]'>
                            It's the most festive game of the year, with chances to win free coffee and more.*
                            <a href='#' className='text-starbucks underline hover:no-underline'>Play now</a>
                        </h3>
                    </div>

                    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75689.png' alt=''
                        className='w-[700px] h-[240px] bg-transparent' />
                </div>
            </section>
            <BoxComponent
                text1="WHATEVER"
                text2="THE WEATHER"
                description="Our Toasted White Chocolate Mocha
                Frappuccino® blended beverage is a
                delightfully chill way to celebrate the season."
                button="Order now"
                imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75690.png'
            />
            <BoxComponent
                text1="BRULÉE BLISS"
                text2=""
                description="One sip of our creamy and cozy Caramel Brulée Latte will put you in a festive state of mind."
                button="Order now"
                imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75549.png'
            />
            <BoxComponent
                text1="FIRESIDE"
                text2="FAVORITE"
                description="Curl up with a joyful classic: our Signature Hot Chocolate swirled with rich mocha sauce."
                button="Order now"
                imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75692.png'
            />
            <BoxComponent
                text1="CHILL AND BE"
                text2="MERRY"
                description="Our Irish Cream Cold Brew is dressed up for the holidays with sweet cream cold foam and a strike of cocoa."
                button="Order now"
                imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75419.jpg'
            />
            <section className='flex w-screen justify-center items-center bg-starred space-x-52 my-7' >
                <div className='flex flex-col justify-center items-center space-y-4 pl-24 text-center'>
                    <h1 className='font-bold text-xl tracking-widest text-white'>You vote, we give</h1>
                    <h3 className='text-lg text-white w-[400px] justify-center items-center flex'>
                        This holiday season, The Starbucks Foundation is donating $1 million to strengthen communities—and you have a say in where it goes. Vote between Dec. 1-15.
                    </h3>
                    <button className='flex px-4 py-1 rounded-2xl border border-white text-white hover:bg-red-500'>
                        Cast your vote
                    </button>
                </div>
                <div>
                    <img className='w-[750px] h-[350px] flex-1'
                        src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75550.jpg' />
                </div>
            </section>
            <section className='w-full bg-greenlight my-7 h-[340px]'>
                <div className='flex space-x-44 relative'>

                    <div className='flex flex-col justify-center items-center space-y-7 opacity-80 text-center px-24 py-24'>
                        <h4 className='text-2xl w-[400px] font-bold text-opacity-60'>Let the holiday cheer come to you.</h4>
                        <h3 className='text-xl text-black w-[400px] justify-center items-center flex'>
                            Make the moment merry. Order Starbucks® holiday favorites on Uber Eats.**
                        </h3>
                        <button className='flex px-4 py-1 rounded-2xl border border-black text-black bg-greenlight
                        hover:bg-buttonhover hover:text-black font-semibold'>
                            Order now
                        </button>
                    </div>

                    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75773.jpg' alt=''
                        className='w-[700px] h-[340px] bg-transparent absolute top-0 right-0' />
                </div>
            </section>
        </div>
    )
}

export default Boxes
