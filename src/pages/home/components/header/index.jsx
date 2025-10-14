
const Header = () => {
  return (
    <>
        <section className="bg-white rounded-[58px]">

            <div className="flex justify-between items-center ">
                <div className="py-[14px] px-[20px]">
                    <a href="/">
                        <img src="/src/assets/banner/logo.png" alt="Logo" />
                    </a>
                </div>
                <div >
                    <ul className="flex gap-x-3 items-center">
                        <li className="text-[14px] font-normal text-[#4F4D73] p-[10px] hover:bg-[#F6F9FE] rounded-[16px]"><a href="#">Home</a></li>
                        <li className="text-[14px] font-normal text-[#4F4D73] p-[10px] hover:bg-[#F6F9FE] rounded-[16px]"><a href="#">About</a></li>
                        <li className="text-[14px] font-normal text-[#4F4D73] p-[10px] hover:bg-[#F6F9FE] rounded-[16px]"><a href="#">Services</a></li>

                    </ul>
                </div>
                <div className="text-white text-[16px] font-medium py-[13px] px-[36px] rounded-[48px] bg-radial-[at_50%_75%] from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] to-90% mr-[20px]">
                    <button ><a href="#"></a>Sign In</button>
                </div>
            </div>

        </section>
    </>
  )
}

export default Header