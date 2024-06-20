// Timer.tsx

'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface TimerProps {
    onLoading: () => void;
}

const Timer = ({ onLoading }: TimerProps) => {
    const [timeLeft, setTimeLeft] = useState(600);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setOpen(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleFinishClick = useCallback(() => {
        setOpen(false);
        onLoading();
    }, [onLoading]);

    const handleTryAgainClick = useCallback(() => {
        setOpen(false);
        window.location.reload();
    }, []);

    const formatTime = useCallback((seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }, []);

    return (
        <Box>
            <Typography sx={{ textAlign: 'right', mr: 5, fontWeight: 700 }}>
                {formatTime(timeLeft)}
            </Typography>
            <Dialog
                open={open}
                onClose={handleFinishClick}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Time's Up!</DialogTitle>
                <DialogContent>
                    <Typography>
                        The allotted time for this quiz has ended.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleTryAgainClick}>Try Again</Button>
                    <Button onClick={handleFinishClick} color="primary" autoFocus>
                        Finish
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Timer;
