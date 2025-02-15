import './Global.css'
import Launch from './assets/Product-Launch.png'
import Search from './assets/Search.png'
import Insta from './assets/Instagram-Shot.png'

function MainService()  {

    return(
        <section className='py-50'>
            <div className="flex justify-center">
            <div className="container ">
                <div className="main-ser-title">
                   <h1 data-aos="fade-up" className='text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold pb-10'>Our main service</h1>
                   <p data-aos="fade-up" data-aos-delay="300" className='text-center text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quam nibh elit pellentesque velit <br /> netus suspendisse. Sed enim, pretium, montes, in ut dolor urna.</p>
                </div>

                <div className="card-comp flex xl:gap-20 md:gap-15 pt-20">
                    <div data-aos="fade-up" data-aos-delay="500" className="card pb-20 pt-5 rounded-3xl">
                        <div className="main-img flex justify-center">
                          <img src={Search} alt="" width="800px" className=''/>
                        </div>
                        <div className="card-detail px-10">
                            <h1 className='text-2xl font-semibold text-center pt-10 pb-10'>Web development</h1>
                            <p className='text-center text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent.</p>

                            <div className="btn-main flex justify-center pt-10">
                                <a href="" className='text-lg px-4 py-1'>Learn more</a>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos="fade-up" data-aos-delay="700" className="card pb-20 pt-5 rounded-3xl">
                        <div className="main-img flex justify-center">
                          <img src={Insta} alt="" width="800px" className=''/>
                        </div>
                        <div className="card-detail px-10">
                            <h1 className='text-2xl font-semibold text-center pt-10 pb-10'>Web development</h1>
                            <p className='text-center text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent.</p>

                            <div className="btn-main flex justify-center pt-10">
                                <a href="" className='text-lg px-4 py-1'>Learn more</a>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos="fade-up" data-aos-delay="900" className="card pb-20 pt-5 rounded-3xl">
                        <div className="main-img flex justify-center">
                          <img src={Launch} alt="" width="800px" className=''/>
                        </div>
                        <div className="card-detail px-10">
                            <h1 className='text-2xl font-semibold text-center pt-10 pb-10'>Web development</h1>
                            <p className='text-center text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent.</p>

                            <div className="btn-main flex justify-center pt-10">
                                <a href="" className='text-lg px-4 py-1'>Learn more</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    )
}

export default MainService