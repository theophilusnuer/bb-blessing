import { BiSearchAlt } from "react-icons/bi"
import { CiDeliveryTruck } from "react-icons/ci"
import { GoChecklist } from "react-icons/go"

const HowWeDoIt = () => {
    return (
        <div className="px-4 sm:px-20 py-10">
            <h1 className="text-[#E82C45] font-bold text-5xl text-center">How we do it!</h1>
            <div className="flex justify-between gap-6 my-12">
                {/* sourcing */}
                <div className="rounded-xl bg-[#33323260] p-6 w-full">
                    <span className="flex flex-row space-x-2">
                        <BiSearchAlt size={60} className="text-[#E82C45] " />
                        <span className='text-3xl font-semibold'>Sourcing</span>
                    </span>
                    <p className='pt-2 text-2xl'>We partner with trusted suppliers to ensure quality and competitive pricing for all your business needs.</p>
                </div>
                {/* procurement */}
                <div className="rounded-xl bg-[#33323260] p-6 w-full">
                    <span className="flex flex-row space-x-2">
                        <GoChecklist size={60} className="text-[#E82C45] " />
                        <span className='text-3xl font-semibold'>Procurement & Management</span>
                    </span>
                    <p className='pt-2 text-2xl'>We manage the entire procurement process,  ensuring efficiency and accuracy.</p>
                </div>
                {/* delivery */}
                <div className="rounded-xl bg-[#33323260] p-6 w-full">
                    <span className="flex flex-row space-x-2">
                        <CiDeliveryTruck size={60} className="text-[#E82C45] " />
                        <span className='text-3xl font-semibold'>Delivery & Supoort</span>
                    </span>
                    <p className='pt-2 text-2xl'>We provide timely and reliable delivery services, with support to meet your business expectations.</p>
                </div>
            </div>
        </div>
    )
}

export default HowWeDoIt