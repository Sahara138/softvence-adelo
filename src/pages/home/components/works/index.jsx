import React from 'react'
import Ellipse from '../../../../../src/assets/works-ellipse .png'
const Works
 = () => {
  return (
    <>
    <section id='works' className='bg-[#010610] to-100% py-[78px] relative'>
        <div className='absolute top-0 right-0'>
                    <img src={Ellipse} alt="" />
                </div>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid grid-cols-2 gap-x-[108px] '>
                <h2 className='font-bold text-[100px] text-white leading-[120%]'>How AI Marketing Hub Works</h2>
                <div className=''>
                    <div className='w-[604px] h-[484px] rounded-[12px] bg-[#6C7078] p-[24px] mb-[48px]'>
                        <div className='flex gap-x-3 items-center'>
                            <div className='w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center'>
                                <span className='font-semibold text-[32px] text-black'>1</span>
                            </div>
                            <h5 className='font-semibold text-[32px] text-[#3900FF]'>Understand Your Business</h5>
                        </div>
                        <h6 className='font-bold text-[40px] text-[#FFFFFF] leading-[120%] mt-[196px]'>Share your goals and audience with Sterling. He'll tailor a marketing strategy for your business.</h6>
                    </div> 
                    <div className='w-[604px] h-[484px] rounded-[12px] bg-[#6C7078] p-[24px] mb-[48px]'>
                        <div className='flex gap-x-3 items-center'>
                            <div className='w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center'>
                                <span className='font-semibold text-[32px] text-black'>2</span>
                            </div>
                            <h5 className='font-semibold text-[32px] text-[#3900FF]'>Create Campaign Content</h5>
                        </div>
                        <h6 className='font-bold text-[40px] text-[#FFFFFF] leading-[120%] mt-[196px]'>Generate stunning ads, copy, and visuals in minutes.</h6>
                    </div> 
                    <div className='w-[604px] h-[484px] rounded-[12px] bg-[#6C7078] p-[24px] mb-[48px]'>
                        <div className='flex gap-x-3 items-center'>
                            <div className='w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center'>
                                <span className='font-semibold text-[32px] text-black'>3</span>
                            </div>
                            <h5 className='font-semibold text-[32px] text-[#3900FF]'>Launch & Automate</h5>
                        </div>
                        <h6 className='font-bold text-[40px] text-[#FFFFFF] leading-[120%] mt-[196px]'>Smart targeting, budget control, and publishing.</h6>
                    </div> 
                    <div className='w-[604px] h-[484px] rounded-[12px] bg-[#6C7078] p-[24px] mb-[48px]'>
                        <div className='flex gap-x-3 items-center'>
                            <div className='w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center'>
                                <span className='font-semibold text-[32px] text-black'>4</span>
                            </div>
                            <h5 className='font-semibold text-[32px] text-[#3900FF]'>Optimize & Grow</h5>
                        </div>
                        <h6 className='font-bold text-[40px] text-[#FFFFFF] leading-[120%] mt-[196px]'>Get real-time feedback and improve performance.</h6>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Works
