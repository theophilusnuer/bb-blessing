import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll to add background transparency
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed left-0 w-full  px-4 sm:px-20 flex justify-between h-16 transition-colors duration-300 ${
                scrolled ? 'bg-opacity-50 backdrop-filter backdrop-blur-lg' : 'bg-transparent'
            }`}
        >
            {/* Logo and Hamburger menu for small screens */}
            <div className="flex flex-row items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-6 h-6 flex items-center mr-4 justify-center mt-2 sm:hidden"
                >
                    <FaBars className="w-full h-full" />
                </button>
                <img src={logo} alt="Logo" className="h-10 sm:h-14 md:h-12 lg:h-16" />
            </div>

            {/* Navigation items for larger screens */}
            <ul className="hidden sm:flex flex-row space-x-4 md:space-x-8 lg:space-x-12 text-sm md:text-base lg:text-lg xl:text-xl pt-2 md:pt-3">
                <li className="cursor-pointer font-normal">Home</li>
                <li className="cursor-pointer font-normal">What we do</li>
                <li className="cursor-pointer font-normal">How we do it</li>
                <li className="cursor-pointer font-normal">Contact</li>
            </ul>

            {/* Get Quote button */}
            <button className="bg-[#E82C45] rounded-2xl h-7 md:h-8 lg:h-9 mt-4 sm:mt-1 w-24 md:w-32 lg:w-44 text-sm md:text-base lg:text-xl font-normal">
                Get Quote
            </button>

            {/* Dropdown menu for small screens */}
            {isOpen && (
                <div className="sm:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-white">
                        <li onClick={() => setIsOpen(false)}>Home</li>
                        <li onClick={() => setIsOpen(false)}>What we do</li>
                        <li onClick={() => setIsOpen(false)}>How we do it</li>
                        <li onClick={() => setIsOpen(false)}>Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
