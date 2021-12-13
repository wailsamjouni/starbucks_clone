import React from 'react'
import first from '../images/first.png'

function Boxes() {
    return (
        <div>
            <section className='w-full bg-greenstar my-10 px-28 py-7'>
                <div className='flex space-x-44'>

                    <div className='flex flex-col justify-center items-center space-y-4 opacity-70'>
                        <h1 className='font-bold text-5xl tracking-widest'>
                            STARBUCKS
                        </h1>
                        <h1 className='font-bold text-5xl tracking-widest'>
                            FOR LIFE
                        </h1>
                        <h3 className='text-2xl w-[400px]'>
                            It's the most festive game of the year, with chances to win free coffee and
                        </h3>
                        <h3 className='text-2xl'>
                            more.* <a href='#' className='text-starbucks underline'>Play now</a>
                        </h3>
                    </div>

                    <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75689.png' alt=''
                        className='w-[700px] h-[240px] bg-transparent' />
                </div>
            </section>
        </div>
    )
}

export default Boxes
