import brand1 from '../../../../assets//brand/logo-1.png'
import brand2 from '../../../../assets//brand/logo-2.png'
import brand3 from '../../../../assets//brand/logo-3.png'
import brand4 from '../../../../assets//brand/logo-4.png'
import brand5 from '../../../../assets//brand/logo-5.png'
import brand6 from '../../../../assets//brand/logo-6.png'
import brand7 from '../../../../assets//brand/logo-7.png'

const Brand = () => {
  return (
    <>
        <section id='brand' className=' py-[80px]'>
            {/* <div className='flex justify-between items-center'> */}
            <div className='grid grid-cols-7 gap-x-8 items-center'>
                <div className='h-[158px] rounded-[12px] shadow-xl p-6 overflow-hidden'>
                    <img src={brand1} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className=' h-[158px] rounded-[12px] shadow-xl p-6 overflow-hidden'>
                    <img src={brand6} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className=' h-[158px] rounded-[12px] shadow-xl p-6 overflow-hidden'>
                    <img src={brand3} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className=' h-[158px] rounded-[12px] shadow-xl p-6 overflow-hidden'>
                    <img src={brand4} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className=' h-[158px] rounded-[12px] shadow-xl p-5 overflow-hidden'>
                    <img src={brand5} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className=' h-[158px] rounded-[12px] shadow-xl p-6 overflow-hidden'>
                    <img src={brand6} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className=' h-[158px] rounded-[12px] shadow-xl p-6 overflow-hidden'>
                    <img src={brand5} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Brand