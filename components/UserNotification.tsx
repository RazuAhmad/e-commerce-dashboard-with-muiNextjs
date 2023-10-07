import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import notificationIcon from '@/public/assets/bell-icon.svg'
import React from 'react'

const UserNotification = () => {
    return (
        <Button className='notification relative' sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src={notificationIcon} alt="" width={22} height={22} />
            <Typography component='span' className="absolute top-[-5px] right-[17px] text-[#D97706]" sx={{ fontFamily: 'Plus Jakarta Sans', fontWeight: '400', fontSize: '13px' }}>0</Typography>
        </Button>
    )
}

export default UserNotification