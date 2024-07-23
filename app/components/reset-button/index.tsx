"use client";

import { useRouter } from 'next/navigation';

export default function ResetButton() {

    const router = useRouter();

    const clearParams = () => {
        const url = new URL(window.location.href);
        url.search = ''; 
        router.push(url.pathname);
    };
    return (
        <button onClick={clearParams} className='text-white bg-blue-500 hover:bg-blue-700     font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none  '>
            Reset
        </button>
    )
}