import './Global.css'

function Footer() {

    return(
        <footer className='pt-20 '>
            <div className="flex justify-center">
                <div className="container footer flex justify-center gap-30">
                    <div className="logo-footer">
                        <h1 className='text-3xl font-medium pb-3'>
                           <i className="icon-footer ai-arrow-up"></i>
                            UP BUSINESS
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Vulputate a, ultricies sit nunc purus vel cras pellentesque.</p>
                        <div className="ico-footer flex gap-5 pt-5 items-center">
                          <i className="ico text-2xl rounded-full ai-dribbble-fill"></i>
                          <i className="ico text-2xl rounded-full ai-instagram-fill"></i>
                          <i className="ico text-2xl rounded-full ai-facebook-fill"></i>
                          <i className="ico text-2xl rounded-full ai-twitter-fill"></i>
                        </div>
                    </div>

                    <div className="link-1">
                       <h1 className='font-semibold text-2xl pb-2'>About us</h1>
                         <div className="font-medium text-gray-600 link-menu-1 text-lg flex flex-col gap-5">
                            <a href="">Home</a>
                            <a href="">How We Work</a>
                            <a href="">Our team</a>
                            <a href="">Pricing</a>
                         </div>
                    </div>

                    <div className="link-2">
                        <h1 className='text-2xl font-semibold pb-2'>Location</h1>
                          <div className="font-medium text-gray-600 link-menu-2 flex text-lg flex-col gap-5">
                            <a href="">
                              <i className="ai-location"></i>
                                3891 Ranchview Dr. Richardson, <br /> California 62639
                                </a>
                            <a href="">
                               <i className="ai-location"></i>
                                4517 Washington Ave. Manchester, <br /> Kentucky 39495
                                </a>
                          </div>
                    </div>

                    <div className="link-3">
                       <h1 className='font-semibold text-2xl pb-2'>Contact us</h1>
                          <div className="font-medium text-gray-600 link-menu-3 text-lg flex flex-col gap-5">
                            <a href="">trungkienspktnd@gamail.com</a>
                            <a href="">207.555.0119</a>
                          </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center pt-50 pb-10 font-medium text-gray-700'> © 2021 Up Business by AbellVo | All Rights Reserved </h2>
        </footer>
    )
}

export default Footer