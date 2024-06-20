import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react'
interface BodyCardType {
    heading: string;
    subHeading: string;
    paragraph: string;
    btnText: string;
}
export default function BodyCard({ heading, subHeading, paragraph, btnText }: BodyCardType) {
    return (
        <Card sx={{ Width: '100%', height: '100%' }}>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h4" fontWeight={700} >
                        {heading}
                    </Typography>
                    <Typography sx={{ fontSize: '1.25rem', color: 'rgb(113, 128, 150)', fontWeight: 500 }}>
                        {subHeading}
                    </Typography>
                    <Typography>
                        {paragraph}
                    </Typography>
                    <Box>
                        <Button variant='contained' sx={{ backgroundColor: 'rgb(227, 233, 240)', color: 'black' }}>{btnText}</Button>
                    </Box>
                </Stack>
            </CardContent>

        </Card>
    )
}
