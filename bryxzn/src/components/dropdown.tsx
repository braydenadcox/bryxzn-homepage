"use client";

import { useState } from "react";

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
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-400">
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