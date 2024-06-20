// loading.tsx
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface LoadingProps {
    onFinish: () => void;
}

const Loading = ({ onFinish }: LoadingProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress >= 100) return;

        const timer = setInterval(() => {
            setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
        }, 800);

        return () => clearInterval(timer);
    }, [progress]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            sx={{ gap: 2 }}
        >
            <CircularProgress variant="determinate" value={progress} size={80} thickness={4} />
            <Typography variant="h5" component="div" color="textSecondary">
                {`${progress}%`}
            </Typography>
            {progress === 100 && (
                <Button

                    variant="contained"
                    color="primary"
                    onClick={onFinish}
                >
                    Show Your Result
                </Button>
            )}
        </Box>
    );
};

export default Loading;
