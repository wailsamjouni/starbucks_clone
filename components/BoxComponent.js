import React from 'react'

function BoxComponent({ text1, text2, description, button, imgUrl }) {
    return (
        <section className='flex w-screen justify-center items-center bg-red-600 space-x-52 my-7' >
            <div className='flex flex-col justify-center items-center space-y-4 pl-24 text-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-5xl tracking-widest text-white mb-4'>{text1}</h1>
                    <h1 className='font-bold text-5xl tracking-widest text-white'>{text2}</h1>
                </div>
                <h3 className='text-2xl text-white w-[400px] justify-center items-center flex'>
                    {description}
                </h3>
                <button className='flex px-4 py-1 rounded-2xl border border-white text-white hover:bg-red-500'>
                    {button}
                </button>
            </div>
            <div>
                <img className='w-[750px] h-[500px] flex-1'
                    src={imgUrl} />
            </div>
        </section>
    )
}

export default BoxComponent
