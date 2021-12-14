import React from 'react'
import first from '../images/first.png'
import BoxComponent from './BoxComponent'

function Boxes() {
    return (
        <div>
            <section className='w-full bg-greenstar my-7 px-28 py-7'>
                <div className='flex space-x-44'>

                    <div className='flex flex-col justify-center items-center space-y-4 opacity-70 text-center'>
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
            <section className='flex w-screen justify-center items-center bg-red-600 space-x-52 my-7' >
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
        </div>
    )
}

export default Boxes
