//QuestionDisplay.tsx
import React, { memo } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

interface QuestionDisplayProps {
    question: string;
    options: string[];
    selectedOption: string;
    onOptionChange: (option: string) => void;
}

const QuestionDisplay = ({ question, options, selectedOption, onOptionChange }: QuestionDisplayProps) => {
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                {question}
            </Typography>
            <FormControl component="fieldset">
                <RadioGroup value={selectedOption} onChange={(e) => onOptionChange(e.target.value)}>
                    {options.map((option) => (
                        <FormControlLabel
                            key={option}
                            value={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default memo(QuestionDisplay);
