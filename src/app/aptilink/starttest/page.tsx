import { Box, Button, Card, CardActions, CardContent, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from 'next/link';
export default function starttest() {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <Card sx={{ maxWidth: 600, boxShadow: 3 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant='h4' gutterBottom>
                        Test Instructions
                    </Typography>
                    <Typography variant='h5' sx={{ color: '#718096' }}>
                        Read each of the following instructions carefully
                    </Typography>
                    <List>
                        <ListItem>
                            <FiberManualRecordIcon sx={{ fontSize: '0.5rem', mr: 1 }} />
                            <Typography sx={{ fontSize: 20, color: 'text.secondary' }}>You will have 40 minutes to answer the 40 questions.</Typography>
                        </ListItem>
                        <ListItem>
                            <FiberManualRecordIcon sx={{ fontSize: '0.5rem', mr: 1 }} />
                            <Typography sx={{ fontSize: 20, color: 'text.secondary' }}> For each question choose the appropriate shape to replace the shape that is missing.</Typography>
                        </ListItem>
                        <ListItem>
                            <FiberManualRecordIcon sx={{ fontSize: '0.5rem', mr: 1 }} />
                            <Typography sx={{ fontSize: 20, color: 'text.secondary' }}>You can skip questions and return back to them later.</Typography>
                        </ListItem>
                        <ListItem>
                            <FiberManualRecordIcon sx={{ fontSize: '0.5rem', mr: 1 }} />
                            <Typography sx={{ fontSize: 20, color: 'text.secondary' }}>Take your time. We weigh number of correct answers significantly more than completion time.</Typography>
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                    <Link href={'/aptilink/test'}>
                        <Button variant='contained'>Start The Test</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}
