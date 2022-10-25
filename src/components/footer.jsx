import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#031B34] mt-8 m-8 md:m-0 md:mt-24'>

        <div className='flex flex-col items-center gap-14  '>
            <p className='w-1/2 mt-16  text-center font-bold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867]'>Do you want to step in to the future before others</p>
            <a className='text-white px-4 py-6 border border-white' href='/#'>Request Early Access</a>
        </div>


        <div className='md:grid md:grid-cols-5  mt-10 p-10'>

            <div className='md:col-span-2 flex flex-col items-center md:items-start md:ml-20'>
                <h1 className='text-white font-extrabold text-5xl'>GPT-3</h1>
                <p className='text-white w-1/2 mt-2 text-sm'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>

            <div className='hidden md:block'>
                <span className='text-white'>Links</span>

                <ul className='mt-4 text-white  text-xs'>
                    <li>
                        Overons
                    </li>
                    <li>
                    Social Media
                    </li>
                    <li>
                    Counters
                    </li>
                    <li>
                    Contact
                    </li>
                  
                </ul>

            </div>


            <div className='hidden md:block'>
                <span className='text-white'>Company</span>

                <ul className='mt-4 text-white  text-xs'>
                    <li>
                    Contact
                    </li>

                    <li>
                    Privacy Policy
                    </li>

                    <li>
                    Terms & Conditions
                    </li>
                </ul>

            </div>

            <div className='hidden md:block'>
                <span className='text-white'>Get in touch</span>

                <ul className='mt-4 text-white  text-xs'>
                    <li>
                    Crechterwoord K12 182 DK Alknjkcb
                    </li>
                    <li>
                    085-132567
                    </li>
                    <li>
                    info@payme.net
                    </li>
                </ul>

            </div>

        </div>


    </div>
  )
}

export default Footer