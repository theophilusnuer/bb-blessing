import delivery from '../../assets/delivery.jpg';
import applia from '../../assets/applia.png';
import guy from '../../assets/guy.jpeg';
import office from '../../assets/office.jpeg';
import pck from '../../assets/pck.jpeg';


const Whatwedo = () => {
    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 py-20 sm:py-36 gap-y-8 gap-x-20 px-4 sm:px-20">
            {/* images */}
            <div className='w-full'>
                <div className="flex flex-row space-x-4 w-full">
                    <img src={office} alt="" className='rounded-3xl w-56  h-36' />
                    <img src={applia} alt="" className='mt-10 rounded-3xl h-40 lg:h-48 w-80' />
                    <div className='z-10 absolute left-[18rem] top-[18.85rem] rounded-3xl bg-black w-36 h-64'><span></span></div>
                </div>
                <div>
                    <img src={pck} alt="" className='absolute left-[5.4rem] top-[18.85rem] rounded-3xl h-52 w-[8.34rem]' />
                    <img src={guy} alt="" className='absolute z-10 left-[14.5rem] top-[19.5rem]  rounded-3xl w-52 h-64' />
                    <img src={delivery} alt="" className='absolute rounded-3xl h-40 w-72 left-[24.08rem] top-[24.2rem]' />
                </div>
            </div>

            {/* texts */}
            <div className="flex flex-col space-y-6">
                <h1 className='text-[#E82C45] font-bold text-5xl'>What we do?</h1>
                <p className='text-2xl leading-9'>We specialize in providing comprehensive and reliable procurement solutions tailored to meet the unique needs of businesses. Whether you need general merchandise, retail supplies, or specialized goods, our team works closely with trusted suppliers to ensure quality, timely delivery, and competitive pricing. We handle the procurement process from start to finish, so you can focus on running your business efficiently.</p>
            </div>
        </div>
    )
}

export default Whatwedo