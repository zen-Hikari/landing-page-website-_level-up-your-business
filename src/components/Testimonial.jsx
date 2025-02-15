import './Global.css'
import ImgTesti from './assets/Awards.png'
import User from './assets/user1.png'
import Quotes from './assets/left-quote-2.png'
import Quotes1 from './assets/right-quote-1.png'
function Testimonial() {

    return(
        <section className='pt-25'>
                <h1 data-aos="fade-up" className="testi-title xl:text-5xl lg:text-5xl md:text-4xl text-3xl  font-semibold text-center">
                    Testimonial
                </h1>
            <div className="flex justify-between">
            <div className="container">

                <div className="testi-comp flex justify-between items-center pt-10">
                    <img data-aos="fade-up" data-aos-delay="300" src={ImgTesti} alt="" className='xl:w-[800px] lg:w-[600px] md:w-[400px] w-300px'/>

                    <div data-aos="zoom-in" data-aos-delay="500" className="card-testi relative flex gap-4 px-8 py-5 pb-10">
                    <img src={Quotes1} alt="" width="70px" className='absolute img-quote-1'/>
                        <div className="img-testi">
                          <img src={User} alt="" width="60px" className="py-1 px-1" />
                        </div>

                        <div className="desc-testi">
                            <p className='text-sm text-gray-500'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur et pretium  <br />nunc, quis euismod et. Volutpat suspendisse sed in blandit condimentum. <br /> Sagittis nullam nec mauris, feugiat hendrerit aliquam cras. Dolor tortor <br /> gravida lobortis in ultricies enim vulputate non. Neque nibh donec quam lectus.”</p>
                            <h2  className='pt-2 flex text-sm text-gray-600 font-bold'>Sed arcu, enim eu adipiscing enim vulputate vulputate semper adipiscing.</h2>
                            <h3 className='text-md custom font-semibold'>Customer</h3>
                        </div>
                      <img src={Quotes} alt="" width="70px" className='absolute img-quote'/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Testimonial