import React from 'react'
import homeIcon from '@/public/assets/home.svg'
import arroWUp from '@/public/assets/arrow.svg'
import arrowDown from '@/public/assets/arrow-down.svg'
import Image from 'next/image'
import { Typography, Stack, Button, Box } from '@mui/material'

const Sidebar = () => {
    return (
        <Stack sx={{ paddingTop: '41px' }}>
            <Box className="flex gap-3 item-center mb-11" sx={{ paddingLeft: '20px' }}>
                <Image src={homeIcon} alt="" />
                <Typography component='span'>Dashboard</Typography>
            </Box>

            {/* Shop area */}
            <Box className="mb-11" >
                <Box className="flex  item-center mb-[13px] gap-[220px]" sx={{ paddingLeft: '28px' }}>
                    <Typography component='span'>Shop</Typography>
                    <Image src={arroWUp} alt="" />
                </Box>

                <Box sx={{ paddingLeft: '20px' }}>
                    <Button sx={{ display: 'flex', paddingY: '8px', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack flexDirection='row' alignItems='center' gap='12px'>
                            <Image src={homeIcon} alt="" />
                            <Typography component='span'
                                sx={{ fontFamily: 'Plus Jakarta Sans', color: '#71717A', fontSize: '14px', fontWeight: '600' }}>Products</Typography>
                        </Stack>
                        <Typography component='span' sx={{
                            paddingX: '8px', paddingY: '4px', borderRadius: '5px',
                            border: '1px solid #FBEDD4',
                            background: '#FFFBEB',
                            color: '#D97706',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '13px',
                            fontWeight: '400'
                        }}>15</Typography>
                    </Button>
                    <Button sx={{ display: 'flex', paddingY: '8px', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack flexDirection='row' alignItems='center' gap='12px'>
                            <Image src={homeIcon} alt="" />
                            <Typography component='span'
                                sx={{ fontFamily: 'Plus Jakarta Sans', color: '#71717A', fontSize: '14px', fontWeight: '600' }}>Customers</Typography>
                        </Stack>

                    </Button>
                    <Button sx={{ display: 'flex', paddingY: '8px', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack flexDirection='row' alignItems='center' gap='12px'>
                            <Image src={homeIcon} alt="" />
                            <Typography component='span'
                                sx={{ fontFamily: 'Plus Jakarta Sans', color: '#71717A', fontSize: '14px', fontWeight: '600' }}>Orders</Typography>
                        </Stack>
                        <Typography component='span' sx={{
                            paddingX: '8px', paddingY: '4px', borderRadius: '5px',
                            border: '1px solid #FBEDD4',
                            background: '#FFFBEB',
                            color: '#D97706',
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '13px',
                            fontWeight: '400'
                        }}>186</Typography>
                    </Button>
                    <Button sx={{ display: 'flex', paddingY: '8px', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack flexDirection='row' alignItems='center' gap='12px'>
                            <Image src={homeIcon} alt="" />
                            <Typography component='span'
                                sx={{ fontFamily: 'Plus Jakarta Sans', color: '#71717A', fontSize: '14px', fontWeight: '600' }}>Categories</Typography>
                        </Stack>

                    </Button>
                    <Button sx={{ display: 'flex', paddingY: '8px', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack flexDirection='row' alignItems='center' gap='12px'>
                            <Image src={homeIcon} alt="" />
                            <Typography component='span'
                                sx={{ fontFamily: 'Plus Jakarta Sans', color: '#71717A', fontSize: '14px', fontWeight: '600' }}>Brands</Typography>
                        </Stack>

                    </Button>
                </Box>
            </Box>

            {/* Blog area */}

            <Box className="blog-area" >
                <Box className="flex justify-between mb-2" sx={{ paddingLeft: '28px' }}>
                    <span>Blog</span>
                    <Image src={arrowDown} alt="" />
                </Box>
                <Box sx={{ paddingLeft: '20px' }}>
                    <Button sx={{ display: 'flex', paddingY: '8px', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack flexDirection='row' alignItems='center' gap='12px'>
                            <Image src={homeIcon} alt="" />
                            <Typography component='span'
                                sx={{ fontFamily: 'Plus Jakarta Sans', color: '#71717A', fontSize: '14px', fontWeight: '600' }}>Posts</Typography>
                        </Stack>

                    </Button>
                    <Button sx={{ display: 'flex', paddingY: '8px', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack flexDirection='row' alignItems='center' gap='12px'>
                            <Image src={homeIcon} alt="" />
                            <Typography component='span'
                                sx={{ fontFamily: 'Plus Jakarta Sans', color: '#71717A', fontSize: '14px', fontWeight: '600' }}>Categories</Typography>
                        </Stack>

                    </Button>
                    <Button sx={{ display: 'flex', paddingY: '8px', width: '105%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack flexDirection='row' alignItems='center' gap='12px'>
                            <Image src={homeIcon} alt="" />
                            <Typography component='span'
                                sx={{ fontFamily: 'Plus Jakarta Sans', color: '#71717A', fontSize: '14px', fontWeight: '600' }}>Authors</Typography>
                        </Stack>

                    </Button>

                </Box>
            </Box>
        </Stack>
    )
}

export default Sidebar