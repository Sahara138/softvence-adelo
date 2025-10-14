import React from 'react'
import Ellipse from '../../../../../src/assets/service-ellipse.png'
const Services = () => {
  return (
    <>
    {/* <section id='services' className='bg-linear-to-r from-[#654FAE] from-0.2%% to-[#010610] to-99% h-[500px]'> */}
    <section id='services' className='bg-[#010610] to-100% py-[78px] relative'>
        <div className='absolute top-0 left-0'>
            <img src={Ellipse} alt="" />
        </div>
        <div className='max-w-[1240px] mx-auto'>
            <h4 className='font-bold text-[100px] bg-gradient-to-r from-[#FFFFFF] to-[#8E6EFF]
            bg-clip-text text-transparent text-center'>Services</h4>
            <div className='mt-[48px] '>
                <div className='flex justify-between items-center px-[32px] py-[40px] border-b-1 border-[#2D323E]'>
                    <h6 className='w-[285px] font-semibold text-[32px] text-[#E6E6E8]'>AI Marketing Assistant (Sterling)</h6>
                    <p className='w-[494px] font-normal text-[18px] text-[#979AA0]'>Get expert-level marketing guidance in real time. Sterling, your intelligent chatbot assistant, helps you strategize, build campaigns, and refine your content — all through simple conversations.</p>
                </div>
                <div className='flex justify-between items-center px-[32px] py-[40px] border-b-1 border-[#2D323E]'>
                    <h6 className='w-[285px] font-semibold text-[32px] text-[#E6E6E8]'>Ad Campaign Automation</h6>
                    <p className='w-[494px] font-normal text-[18px] text-[#979AA0]'>Automate the full lifecycle of your ad campaigns — from generating copy and visuals to targeting the right audience and optimizing for performance. Just input your goal, and we’ll do the rest.</p>
                </div>
                <div className='flex justify-between items-center px-[32px] py-[40px] border-b-1 border-[#2D323E]'>
                    <h6 className='w-[285px] font-semibold text-[32px] text-[#E6E6E8]'>Content & Copy Generation</h6>
                    <p className='w-[494px] font-normal text-[18px] text-[#979AA0]'>Effortlessly generate high-converting social media posts, emails, and ad copy with AI. Choose from ready-made templates or create content from scratch — fast, relevant, and always on-brand.</p>
                </div>
                <div className='flex justify-between items-center px-[32px] py-[40px] border-b-1 border-[#2D323E]'>
                    <h6 className='w-[285px] font-semibold text-[32px] text-[#E6E6E8]'>AI-Powered Feedback Loop</h6>
                    <p className='w-[494px] font-normal text-[18px] text-[#979AA0]'>Upload your marketing content and receive instant, actionable insights. Improve clarity, engagement, and messaging based on proven marketing principles and AI analysis.</p>
                </div>
                <div className='flex justify-between items-center px-[32px] py-[40px] border-b-1 border-[#2D323E]'>
                    <h6 className='w-[285px] font-semibold text-[32px] text-[#E6E6E8]'>Marketing Template Library</h6>
                    <p className='w-[494px] font-normal text-[18px] text-[#979AA0]'>Access a growing library of customizable marketing templates for every channel — from social media to Google Ads. Save time and stay consistent with proven formats.</p>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Services