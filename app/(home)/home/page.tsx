import DinoCard from '@/app/components/DinoCard'
import React from 'react'

const page = () => {
  return (
    <>
    <div>

        {/* Welcome section */}
        <section> 
            <div className='min-h-screen flex items-center justify-center container mx-auto text-center'>
                <h1 className='text-4xl md:text-6xl font-bold'>Welcome to <span className='text-sky-600'>Adopt a dinosaur</span>!</h1>
            </div>
        </section>

        {/* About section */}
        <section className='bg-slate-900'>
            <div className='min-h-screen flex flex-col items-center justify-center container mx-auto text-center'>
                <h4 className='text-xl md:text-2xl font-thin'>About us</h4>
                <br />
                <p className='text-lg md:text-xl font-thin'>We found that, after you infuse their cells with a substance called "<span className='text-blue-400 font-bold'>Chomperium 20384</span>". they will be revived but be extremely <span className='text-red-500 font-bold'>slow and weak</span>. They will need to be trained, which is why we are giving them to people to keep as pets!</p>
            </div>
        </section>

        {/* Featured dinos section */}
        <section>
            <div className='min-h-screen flex flex-col items-center justify-center container mx-auto text-center'>
                <h4 className='text-xl md:text-2xl font-thin italic'>Featured dinos</h4>
                {/* Dinosaur cards, reusable component. */}
                <div className=' flex flex-row gap-30 md:gap-60'>
                    <DinoCard />
                    <DinoCard />
                </div>
            </div>
        </section>

    </div>
    </>
  )
}

export default page