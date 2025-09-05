"use client";

import { useState } from "react";
import Image from "next/image";

interface DropdownProps {
    label: string;
    imageSrc: string;
    imageAlt: string;
    children?: React.ReactNode;
}

export default function Dropdown({ label, imageSrc, imageAlt, children }: DropdownProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full">
            {/* Dropdown Button */}
        <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-start 
            bg-white border border-white/10 hover:bg-gray-200 
            transition-colors duration-300 ease-in-out 
            text-black rounded-md px-4 py-2 w-full">

            { /* Image */}
                <div className='shrink-0 rounded-md overflow-hidden mr-3'>
                    <Image className='object-cover aspect-square w-15' src={imageSrc} alt={imageAlt} width={50} height={50} />
                </div>
                <div className='mr-2 flex-1 bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent' style={{
                    fontFamily: "'Satoshi Variable', 'Inter', sans-serif",
                    fontWeight: 'bold',
                    fontSize: '2.5rem',
                }}>
                    <p>{label}</p>
                </div>
                <div style={{
                    fontFamily: "'Satoshi Variable', 'Inter', sans-serif",
                }}>
                    <p>▼</p>
                </div>
        </button>

        {/* Dropdown Menu */}
        {open && (
            <div className="absolute mt-2 w-56 bg-gray-200 text-white rounded-md p-3 z-10">
                {children}
            </div>
            )}  
        </div>
    );
}