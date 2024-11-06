import quote from '../../assets/quote.jpeg';

const GetQuote = () => {
    return (
        <div id='get-a-quote' className="relative grid grid-cols-1 md:grid-cols-10 py-12 md:py-24 gap-10 px-5 sm:px-10 md:px-16 lg:px-20">
            {/* Background and Image Section */}
            <div className="col-span-1 md:col-span-4 relative flex md:h-[35.5rem]">
                <div className="w-full rounded-3xl overflow-hidden relative">
                    {/* Image with Gradient */}
                    <img
                        src={quote}
                        alt="Get a quote"
                        className="w-full h-96 md:h-full object-cover rounded-3xl"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/0 rounded-3xl"></div>
                    {/* Text Overlay */}
                    <span className="absolute inset-0 font-bold text-center text-5xl flex justify-center items-end py-4 md:py-8 text-white">
                        Get a Quote
                    </span>
                </div>
            </div>

            {/* Form Section */}
            <div className="col-span-1 md:col-span-6 md:h-[35.5rem] flex flex-col">
                <div className="rounded-lg flex-grow overflow-auto">
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 font-normal text-lg md:text-xl">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder='Enter your name'
                                className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-normal text-lg md:text-xl">
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter your email'
                                className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg"
                            />
                        </div>
                        {/* Budget and Phone Fields */}
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <div className="w-full md:w-1/2">
                                <label className="block font-normal text-lg md:text-xl">Budget</label>
                                <input
                                    type="number"
                                    className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg"
                                    placeholder="Tell us your budget"
                                />
                            </div>

                            <div className="w-full md:w-1/2">
                                <label className="block font-normal text-lg md:text-xl">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>
                        {/* Message Field */}
                        <div>
                            <label className="block font-normal text-lg md:text-xl">Message</label>
                            <textarea
                                rows={3}
                                className="w-full bg-transparent border-b-2 border-[#E82C45] py-2 md:py-3 px-3 md:px-5 focus:outline-none rounded-3xl text-lg"
                                placeholder="Type your message"
                            ></textarea>
                        </div>
                    </form>
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-[#E82C45] border border-[#E82C45] hover:bg-transparent text-white rounded-xl text-lg md:text-2xl font-normal p-2 md:p-3"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default GetQuote;