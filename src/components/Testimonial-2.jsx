import './Global.css'
import User2 from './assets/user2.png'
import User3 from './assets/user3.png'
import User4 from './assets/user4.png'
function Testimonial2() {

    return(
        <section className='pt-20'>
            <div className="flex justify-center">
                <div className="container card-comp-2 flex gap-10">

                    <div data-aos="fade-up" data-aos-delay="100" className="card-testi-2">
                        <div className="profile pb-5">
                           <img src={User2} alt="" width="90px"/>
                        </div>
                        <p className='text-gray-600 xl:text-md lg:text-md md:text-md text-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum velit egestas rutrum purus. Quam velit velit nisi ultrices gravida est in tellus. Id in faucibus consequat hendrerit scelerisque maecenas massa, quis. “ <span className='custom'>- Customer</span></p>
                    </div>


                    <div data-aos="fade-up" data-aos-delay="300" className="card-testi-2">
                        <div className="profile2 pb-5">
                           <img src={User3} alt="" width="90px"/>
                        </div>
                        <p className='text-gray-600 xl:text-md lg:text-md md:text-md text-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum velit egestas rutrum purus. Quam velit velit nisi ultrices gravida est in tellus. Id in faucibus consequat hendrerit scelerisque maecenas massa, quis. “ <span className='custom'>- Customer</span></p>
                    </div>


                    <div data-aos="fade-up" data-aos-delay="500" className="card-testi-2">
                        <div className="profile3 pb-5">
                           <img src={User4} alt="" width="90px"/>
                        </div>
                        <p className='text-gray-600 xl:text-md lg:text-md md:text-md text-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum velit egestas rutrum purus. Quam velit velit nisi ultrices gravida est in tellus. Id in faucibus consequat hendrerit scelerisque maecenas massa, quis. “ <span className='custom'>- Customer</span></p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonial2