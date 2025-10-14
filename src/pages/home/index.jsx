
import  Banner from "./components/banner";
import Header from "./components/header";
import sideImg from '../../assets/banner/side-bg.png'
import Services from "./components/services";
import Marketing from "./components/marketing";
import Brand from "./components/brand";
import Works from "./components/works";
const Home = () => {
  return (
    <>
    <div className=''>
        <div id="banner" className="relative">
             <div className='absolute top-[20px] right-0 z-1000'>
                <img src={sideImg} alt="banner-img" />
            </div>
            <Banner />
        </div>
        <Services />
        <Marketing />
        <Brand />
        <Works />
    </div>
    </>
  )
}

export default Home