import { Box, Button, Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'
export default function aptilink() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', width: '100vw' }}>
            <Link href={'/aptilink/starttest'}>
                <Button variant="contained">Take our personal IQ test now</Button>
            </Link>
        </Box>
    )
}
