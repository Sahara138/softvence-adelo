
import Header from '../header'
import { FaStar } from "react-icons/fa";


const Banner = () => {
  return (
    <>
      <section className='max-w-[1240px] mx-auto pt-[32px] relative h-[100vh]'>
        <Header />
        <div>
          <h1 className='text-[110px] font-bold tracking-[-2%] text-[#8E6EFF] text-center mt-[116px]'>Marketing That Thinks <span className='text-black'>For You</span> </h1>
          <p className='w-[696px] text-[20px] font-medium leading-[130%]  text-[#6C7078] mx-auto mt-[20px]'>Adelo uses advanced AI to create, optimize, and manage your marketing
            campaigns, helping you reach the right audience with the perfect
            message.</p>
          <div className='flex gap-x-3 items-center justify-center mt-[40px]'>
            <div className="text-white text-[16px] font-medium py-[14px] px-[40px] border-1 border-transparent rounded-[48px] bg-radial-[at_50%_75%] from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] to-90% mr-[20px] hover:bg-transparent cursor-pointer hover:border-1 hover:border-[#8E6EFF]">
              <button ><a href="#">Get Started</a></button>
            </div>
            <div className="text-white text-[16px] font-medium py-[14px] px-[40px] border-1 border-transparent rounded-[48px] bg-radial-[at_50%_75%] from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] to-90% mr-[20px] hover:bg-transparent cursor-pointer hover:border-1 hover:border-[#8E6EFF]">
              <button ><a href="#"></a>Watch Demo</button>
            </div>
          </div>

          <div className='w-[402px] h-[119px] rounded-[61px] bg-white border-1 border-[#FFFFFF33] flex gap-x-[5px] items-center px-[42px] py-[36px] -mt-[30px]'>
            <div className=' flex items-center '>
              <div className='w-[48px] h-[48px] rounded-full bg-amber-200 border-2 border-white '></div>
              <div className='w-[48px] h-[48px] rounded-full bg-amber-200 border-2 border-white -ml-[20px] '></div>
              <div className='w-[48px] h-[48px] rounded-full bg-amber-200 border-2 border-white -ml-[20px]'></div>
              <div className='w-[48px] h-[48px] rounded-full bg-[#3C2E6B] border-2 border-white flex items-center justify-center -ml-[20px]'>
                <span className='text-[24px] text-white'>+</span>
              </div>
            </div>
            <div>
              <div className="star">
                <div className='flex items-center gap-x-[2px] mb-2'>
                  <FaStar color='#FFA929' />
                  <FaStar color='#FFA929' />
                  <FaStar color='#FFA929' />
                  <FaStar color='#FFA929' />
                  </div>
              </div>
              <div className="ratings">
                <h4 className='font-medium text-[20px] text-[#020817]'>4.8/5<span className='font-normal text-[16px] text-[#64748B]'>(544)</span></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Banner