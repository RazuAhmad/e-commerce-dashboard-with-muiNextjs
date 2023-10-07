import React from 'react'
import { Stack } from '@mui/material'
import searchIcon from '@/public/assets/search-icon.svg'
import Image from 'next/image'

const NavSearchInputField = () => {
    return (
        <Stack flexDirection='row' alignItems='center'>
            <Image src={searchIcon} alt='' className='relative left-6' />
            <input type="search" name="" id="" className=' rounded-md border 
                         focus:outline-none 
                        focus:border-rose-500 px-7 py-1 cursor-pointer' placeholder='Search' />
        </Stack>
    )
}

export default NavSearchInputField