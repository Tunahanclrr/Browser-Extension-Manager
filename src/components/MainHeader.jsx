import React from 'react'
import Theme from './Theme'
import Logo from './Logo'

export default function MainHeader() {
    return (
        <div className='container'>
            <div className="border dark:border-none border-neutral-200 py-2 px-3 sm:py-3 sm:px-4 dark:bg-neutral-800 bg-neutral-50 rounded-[20px]">
               <div className='flex justify-between items-center'>
               <Logo />
               <Theme />
               </div>
            </div>
        </div>
    )
}
