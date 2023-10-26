import React from 'react'
import '../Index.css'
import container from '../Media/container.jpg'
import pipe from '../Media/Pipe.webp'

const Index = () => {
    return (
        <div>
            <video autoPlay muted loop className='m-0 p-0 w-full min-h-[780px] max-h-[781px]: object-cover ' >
                <source src='/src/Media/hero.mp4' />
            </ video>
            <div className='absolute w-full h-full bgcolor bottom-0 left-0 '>
                <div className='absolute top-[250px] sm:left-24 left-5'>
                    <h1 className='tracking-wider font-bold text-white mb-5'>
                        <span className='sm:text-6xl text-4xl'>Transporting goods</span><br />
                        <span className='sm:text-6xl text-4xl'>worldwide,</span><br /><span className='sm:text-6xl text-4xl'>
                            using multiple<br />modes.</span><br />
                    </h1>
                    <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">LEARN MORE</span></button>
                </div>
            </div>
            <div className='absolute top-[880px] left-8 right-2 flex lg:flex-row flex-col gap-14 '>
                <img src={container} alt="Containers" className='w-[580px] ' />
                <div className=' place-items-center place-content-center flex flex-col'>

                    <div className=''>
                        <h1 className='text-4xl place-items-center font-semibold'>We go beyond the conventional to redefine shipping and logistics.</h1>
                        <p className='mt-4'>Integrated Shipping & Logistics, Inc. is a premier global shipping and logistics company dedicated to providing seamless and efficient supply chain solutions to businesses of all sizes. With a relentless commitment to excellence, innovative technologies, and a customer-centric approach, we empower our clients to navigate the complex world of global trade and commerce with confidence.</p>
                        <br />
                        <p>With innovation, collaboration, and a steadfast commitment to our client's success, we pave the way for seamless global trade in a dynamic business landscape. Your success is our destination, and we're your trusted partner on the journey.</p>
                    </div>
                </div>
            </div>
            <div className='mt-[720px] text-center'>
                <h1 className='text-4xl font-semibold'>Services</h1>
                <div className='absolute top-[1600px] left-8 right-2 flex lg:flex-row flex-col gap-14 '>
                    <div className=' place-items-center place-content-center flex flex-col'>
                        <p>ISL owns and operates 15,000 plus containers of its own which includes normal 20 Dry Box, 40 Dry Box, 40 HC, Reefers, Open Tops (both 20ft & 40ft), Flat Racks (both 20 ft& 40ft) and Fleet of 6000 plus ISO tank.</p>
                        <br />
                        <p>Leveraging advanced analytics and technology, we design and implement supply chain strategies that optimize inventory management, reduce costs, and enhance visibility.</p>
                    </div>
                    <img src={pipe} alt="pipes" className='w-[580px] ' />
                </div>
            </div >
        </div>
    )
}

export default Index
