import React from 'react'

const Marketing = () => {
  return (
    <>
        <section id='marketing' className='pt-[120px] pb-[80px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid grid-cols-[1fr_2fr] items-start gap-x-[100px]'>
                    <div className='w-[450px] mt-[20px]'>
                        <h5 className=' font-semibold text-[48px] text-[#020817] leading-[120%] -tracking-[2%]'>Driving Results with Smart Marketing</h5>
                        <p className='w-[430px] font-normal text-[18px] text-[#979AA0] mt-[14px] leading-[160%]'>Here’s what our users have achieved with AI Marketing Hub.</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-between border-b-1 border-[#E6E6E8] py-5'>
                            <h5 className=' font-bold text-[64px] text-[#020817] leading-[120%] -tracking-[2%]'>150,000+</h5>
                            <p className='w-[144px] text-end font-normal text-[18px] text-[#979AA0] mt-[14px] leading-[160%]'>Campaigns <br /> Created</p>
                        </div>
                        <div className='grid grid-cols-[1.7fr_1fr] items-center gap-x-8 mt-[40px]'>
                            <div className='flex items-center justify-between  border-b-1 border-[#E6E6E8] py-5'>
                                <h5 className=' font-bold text-[48px] text-[#020817] leading-[120%] -tracking-[2%]'>1.2 Million+	</h5>
                                <p className='w-[144px] text-end font-normal text-[18px] text-[#979AA0] mt-[14px] leading-[160%]'>AI Prompts <br /> Run</p>
                            </div>
                            <div className='flex items-center justify-between  border-b-1 border-[#E6E6E8] py-5'>
                                <h5 className=' font-bold text-[48px] text-[#020817] leading-[120%] -tracking-[2%]'>92%</h5>
                                <p className='w-[144px] text-end font-normal text-[18px] text-[#979AA0] mt-[14px] leading-[160%]'>User <br /> Satisfaction</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-[1.7fr_1fr] items-center gap-x-8 mt-[40px]'>
                            <div className='flex items-center justify-between  border-b-1 border-[#E6E6E8] py-5'>
                                <h5 className=' font-bold text-[48px] text-[#020817] leading-[120%] -tracking-[2%]'>500,000+	</h5>
                                <p className='w-[144px] text-end font-normal text-[18px] text-[#979AA0] mt-[14px] leading-[160%]'> Feedback <br /> Loops</p>
                            </div>
                            <div className='flex items-center justify-between  border-b-1 border-[#E6E6E8] py-5'>
                                <h5 className=' font-bold text-[48px] text-[#020817] leading-[120%] -tracking-[2%]'>3x</h5>
                                <p className='w-[144px] text-end font-normal text-[18px] text-[#979AA0] mt-[14px] leading-[160%]'>Average ROI Boost</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>
  )
}

export default Marketing