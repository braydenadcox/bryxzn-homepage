"use client";

import { useState } from "react";
import Image from "next/image";

interface DropdownProps {
    label: string;
    children: React.ReactNode;
}

export default function Dropdown({ label, children }: DropdownProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Button */}
        <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-start px-88 
            bg-white border border-white/10 hover:bg-gray-200 transition-colors
            duration-300 ease-in-out text-black rounded-md">
                <div className='h-full aspect-square shrink-0 rounded-md overflow-hidden shrink-0 px-4 py-2'>
                    <Image className='object-cover w-15 h-15' src="/images/BryxznPC.jpg" alt="Profile Picture" width={40} height={40} />
                </div>
            {label}
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