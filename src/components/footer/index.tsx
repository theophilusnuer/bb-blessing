import logo from '../../assets/logo.png';


const Footer = () => {
    return (
        <div className=" pt-12 sm:pt-24 px-4 sm:px-20">
            <div className='flex justify-between flex-row'>
                {/* logo */}
                <div className="flex flex-col">
                    <img src={logo} alt="BB Blessing Ventures" className='w-[6rem] h-[10rem] mx-auto' />
                    <span className='font-normal text-2xl pt-5'>BB Blessing Ventures</span>
                </div>

                {/* location */}
                <div className='flex flex-col'>
                    <span className='font-semibold py-[1.97rem] text-2xl'>Our Location</span>
                    <span className='text-xl py-2'>Madina, Rawlings Circle </span>
                    <span className='text-xl py-2'>Behind P-cular Heights </span>
                    <span className='text-xl pb-4'>GM-020-6022 </span>
                </div>

                {/* address */}
                <div className='flex flex-col'>
                    <span className='font-semibold py-[1.97rem] text-2xl'>Our Address</span>
                    <span className='text-xl py-2'>P. O Box 3039 </span>
                    <span className='text-xl py-2'>Community 1 </span>
                    <span className='text-xl pb-4'>Tema</span>
                </div>

                {/* contact */}
                <div className='flex flex-col'>
                    <span className='font-semibold py-[1.97rem] text-2xl'>Our Contact</span>
                    <a href='tel:+233551381209' className='text-xl py-2'>0551381209</a>
                    <a href='tel:+233540510702' className='text-xl py-2'>0540510702</a>
                    <a href='mailto:info@bb-blessing.com' className='text-xl pb-4'>info@bb-blessing.com</a>
                </div>
            </div>

            {/* lampit signature */}
            <div>
<div className=' border-white  border-b w-full mt-20'><span></span></div>
                <div className='flex justify-between pb-4'>
                    <span>Copyright &copy; {new Date().getFullYear()} </span>
                    <span>Designed by LampIT Africa</span>
                </div>
            </div>
        </div>
    )
}

export default Footer