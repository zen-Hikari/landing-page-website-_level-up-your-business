import './Global.css'
import Brand1 from './assets/brand1.png'
import Brand2 from './assets/brand2.png'
import Brand3 from './assets/brand3.png'
import Brand4 from './assets/brand4.png'
import Brand5 from './assets/brand5.png'
function Brand() {

    return(
        <section className='flex justify-center pt-10 pb-50'>
            <div className="container flex justify-center">
               <div className="cont">
               <div className="brand-compt flex justify-center pb-15">
                     <h1 data-aos="fade-up" className="brand-title text-center xl:text-2xl md:text-xl flex items-center gap-3 font-medium">
                     <i className="ai-chevron-left text-xl"></i>
                       We working with customers brands and startups
                     <i className="ai-chevron-right text-xl"></i>
                     </h1>
                </div>

                <div  className="brand-ico flex xl:gap-40 lg:gap-20 gap-10">
                    <img data-aos="zoom-in" data-aos-delay="300" src={Brand1} alt="brand" width="130px" height="auto"/>
                    <img data-aos="zoom-in" data-aos-delay="500" src={Brand2} alt="brand" width="130px" height="auto"/>
                    <img data-aos="zoom-in" data-aos-delay="700" src={Brand3} alt="brand" width="130px" height="auto"/>
                    <img data-aos="zoom-in" data-aos-delay="900" src={Brand4} alt="brand" width="130px" height="auto"/>
                    <img data-aos="zoom-in" data-aos-delay="1000" src={Brand5} alt="brand" width="130px" height="auto"/>
                </div>
               </div>
            </div>
        </section>
    )
}

export default Brand