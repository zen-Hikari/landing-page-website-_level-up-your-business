import './Global.css'   
import Shopping from './assets/Shopping.png'
function Talk() {


    return(
        <section className='pt-60 pb-20 flex justify-center'>
            <div className="flex justify-center">
                <div className="container">
                    <h1 data-aos="fade-up" className='talk text-center xl:text-5xl lg:text-5xl md:text-4xl text-2xl font-bold pb-10'>Start your business now !!!</h1>

                    <img data-aos="fade-up" data-aos-delay="300" src={Shopping} alt="" width="700px" />

                    <div data-aos="fade-up" data-aos-delay="500" className="talk-btn flex justify-center pt-20">
                        <a href="" className='xl:text-2xl lg:text-2xl md:text-xl text-md px-7 py-2 flex gap-5'>
                            Let`s talk
                            <i className="ai-arrow-right"></i>
                            </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Talk 