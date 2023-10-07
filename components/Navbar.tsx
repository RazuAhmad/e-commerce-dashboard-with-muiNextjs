import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import React from 'react'

import Link from 'next/link'
import NavSearchInputField from './NavSearchInputField'
import UserNotification from './UserNotification'
import LoggedInUser from './LoggedInUser'

const Navbar = () => {
    return (
        <nav>
            <Stack flexDirection='row' justifyContent='space-between' alignItems='center' sx={{ padding: '8px 24px' }}>
                <Link href='/' className="inline-block  cursor-pointer">
                    <Typography component='span' sx={{ backgroundColor: '#fbedd4', padding: '11px 14px 12px 13px', fontFamily: 'Plus Jakarta Sans', fontSize: '20px', fontWeight: '600', color: '#000', borderRadius: '5px' }}>E-commerce Logo</Typography>
                </Link>

                <Stack flexDirection='row' alignItems='center' gap='22px'>

                    {/* Search input field */}
                    <NavSearchInputField />

                    <Stack flexDirection='row' alignItems='center' gap='22px'>

                        {/* Notification area */}
                        <UserNotification />

                        {/* Logged in user */}
                        <LoggedInUser />
                    </Stack>
                </Stack>
            </Stack>
        </nav>
    )
}

export default Navbar