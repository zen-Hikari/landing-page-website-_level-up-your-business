import './Global.css'
import SerImg from './assets/e-Commerce.png'
function Service1() {

    return(
        <section className='pt-20'>
            <div className="flex justify-center">
                <div className="container service-1 flex items-center justify-center ">
                    
                    <div className="service-cont  text-gray-600">
                        <h3 data-aos="fade-up" data-aos-delay="100" className='judul-ser text-xl font-semibold'>Portfolio Service</h3>
                        <h1 data-aos="fade-up" data-aos-delay="200" className='ser-title xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold pb-8'>We help design a ecommerce business shop</h1>
                        <p data-aos="fade-up" data-aos-delay="300" className='text-sm pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque <br /> sed euismod quis sit gravida pharetra sit. Cursus vel enim pretium <br /> vulputate semper sem elit magna neque. Aliquet adipisc</p>

                        <div data-aos="fade-up" data-aos-delay="500" className="service-btn flex gap-5 text-xl items-center text-gray-600">
                            <i className="circle ai-circle-triangle-right text-2xl"></i>
                            <a href="">
                                See Live
                                </a>
                            <a href="" className='btn-2 '>Case Study</a>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="700" className="service-img p-0">
                        <img src={SerImg} alt="" width="900px"/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Service1