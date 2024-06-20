import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import AppBody from './_components/AppBody/AppBody';
import AppFooter from './_components/AppFooter/AppFooter';
import AptilinkAppBar from './aptilink/_components/Navbar/Navbar';
export default function page() {
  return (
    <Container>
      <AptilinkAppBar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Stack spacing={2} textAlign={'center'}>
          <Typography variant='h3' fontWeight={600}>Welcome to Aptilink</Typography>
          <Typography sx={{ fontSize: '1.25rem' }}>The world's premier Intelligence Quotient testing service</Typography>
          <Link href={'/aptilink/starttest'}>
            <Button variant="contained" sx={{ backgroundColor: 'rgb(211, 219, 229)', color: 'black', fontWeight: 600 }}>Take our personal IQ test now</Button>
          </Link>
        </Stack>
      </Box>
      <AppBody />
      <AppFooter />
    </Container>
  )
}
