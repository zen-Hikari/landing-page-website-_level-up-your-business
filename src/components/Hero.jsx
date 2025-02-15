import './Global.css'
import HeroImg from './assets/Build.png'

function Hero() {

    return(
        <section className='hero'>
            <div className="flex justify-center">
                <div className="container hero-wrap flex justify-center items-center">
                    <div className="hero-detail ">
                        <h1 data-aos="fade-up" className="detail-title xl:text-6xl md:text-5xl text-4xl  font-bold mb-8">
                            How to <span>level up</span> <br />
                            your business
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="300" className="detail-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est faucibus <br />
                        tellus leo non pellentesque lorem vel. Arcu magna eros, potenti duis.
                        </p>

                        <div data-aos="fade-up" data-aos-delay="500" className="hero-btn mt-10 flex gap-8  items-center">
                            <a href="" className='btn-1 py-2 px-5  rounded-lg text-white'>How we work</a>
                            <a href="" className='btn-2 py-2 px-5 rounded-lg'>
                                Let`s talk 
                                <i className="ai-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div className="hero-img">
                        <img src={HeroImg} alt="" width="999px" data-aos="fade-up" data-aos-delay="700"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero