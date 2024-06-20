// QuestioinProgress.tsx
import React, { useEffect, useState, memo } from 'react';
import { Box, Typography, LinearProgress, LinearProgressProps } from '@mui/material';

interface LinearProgressWithLabelProps extends LinearProgressProps {
    value: number;
}

const LinearProgressWithLabel = memo(({ value, ...rest }: LinearProgressWithLabelProps) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={value} {...rest} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
        </Box>
    </Box>
));

interface QuestionProgressProps {
    value: number;
}

const QuestionProgress = ({ value }: QuestionProgressProps) => {
    const [progress, setProgress] = useState(value);

    useEffect(() => {
        setProgress(value);
    }, [value]);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
};

export default QuestionProgress;
