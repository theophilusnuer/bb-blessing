import quote from '../../assets/quote.jpeg';

const GetQuote = () => {
    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-10 py-12 sm:py-24 gap-20 px-4 sm:px-20">
            {/* Background and Image Section */}
            <div className="col-span-4 relative flex p-4">
                <div className="w-full bg-[#F1EFEF58] rounded-3xl h-[28.5rem] relative">


                    {/* Image with Gradient */}
                    <div className="absolute right- transform translate-x-[6%] -translate-y-[-4.5%] w-1/2 sm:w-auto">
                        <img
                            src={quote}
                            alt="Get a quote"
                            className="w-full h-[29rem] rounded-3xl"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/0 rounded-lg"></div>
                        {/* Text Overlay */}
                        <span className="absolute inset-0 font-bold text-5xl flex justify-center items-end py-8">
                            Get a Quote
                        </span>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="col-span-6">
                <div className="p-4 rounded-lg shadow-md">
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 font-normal text-xl">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder='enter your name'
                                className="w-full bg-transparent border-b-2 border-[#E82C45] py-3 px-5 focus:outline-none  rounded-3xl"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-normal text-xl">
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder='enter your email'
                                className="w-full bg-transparent border-b-2 border-[#E82C45] py-3 px-5 focus:outline-none  rounded-3xl"
                            />
                        </div>
                        {/* Budget and Phone Fields */}
                        <div className="flex gap-x-6 mb-2">
                            <div className="w-1/2">
                                <label className="block font-normal text-xl">Budget</label>
                                <input
                                    type="number"
                                    className="w-full bg-transparent border-b-2 border-[#E82C45] py-3 px-5 focus:outline-none  rounded-3xl"
                                    placeholder="tell us your budget"
                                />
                            </div>

                            <div className="w-1/2">
                                <label className="block font-normal text-xl">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full bg-transparent border-b-2 border-[#E82C45] py-3 px-5 focus:outline-none  rounded-3xl"
                                    placeholder="enter your phone number"
                                />
                            </div>
                        </div>
                        {/* Message Field */}
                        <div>
                            <label className="block font-normal text-xl">Message</label>
                            <textarea
                                rows={3}
                                className="w-full bg-transparent border-b-2 border-[#E82C45] py-3 px-5 focus:outline-none  rounded-3xl"
                                placeholder="type your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full bg-[#E82C45] text-white rounded-xl text-2xl font-normal p-1"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default GetQuote