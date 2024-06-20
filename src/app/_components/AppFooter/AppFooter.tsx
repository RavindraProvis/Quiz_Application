import { Grid, Link, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
export default function AppFooter() {
    return (
        <footer>
            <Grid container spacing={5} my={5}>
                <Grid item xs={12} md={3} sm={6}>
                    <List>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Typography fontWeight={600} variant='h6'>Product</Typography>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>Education</Link>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>Hiring</Link>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>Defense</Link>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>Personal Test</Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <List>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Typography fontWeight={600} variant='h6'>Learn More</Typography>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>What is IQ?</Link>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>The G Factor</Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <List>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Typography fontWeight={600} variant='h6'>Contact</Typography>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>Contact Us</Link>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>Press</Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <List>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Typography fontWeight={600} variant='h6'>Legal</Typography>
                        </ListItem>
                        <ListItem sx={{ paddingInline: 0 }}>
                            <Link sx={{ textDecoration: 'none', color: 'text.secondary' }} href={'/'}>Privacy Policy</Link>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </footer >
    )
}
