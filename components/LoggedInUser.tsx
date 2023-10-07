import React from 'react'
import { Button } from '@mui/material'
import Image from 'next/image'
import userProPic from '@/public/assets/user.svg'


const LoggedInUser = () => {
    return (
        <Button sx={{ display: 'flex', alignItems: "center" }}>
            <Image src={userProPic} alt="" width={38} height={38} />
        </Button>
    )
}

export default LoggedInUser