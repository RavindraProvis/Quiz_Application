// QuestionPage.tsx

'use client';
import { useState, useEffect, useCallback } from 'react';
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import QuestionDisplay from './_components/QuestionDisplay/QuestionDisplay';
import { Container, Button, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent, Stack } from '@mui/material';
import Timer from './_components/Timer/Timer';
import QuestionProgress from './_components/QuestionProgress/QuestionProgress';
import Loading from './_components/Loading/Loading';
import Link from 'next/link';

const QuestionPage = () => {
    const questions = useAppSelector((state: RootState) => state.questions.questions);
    const [currentIndex, setCurrentIndex] = useState(() => {
        const savedIndex = localStorage.getItem('currentIndex');
        return savedIndex ? parseInt(savedIndex, 10) : 0;
    });
    const [answers, setAnswers] = useState<string[]>(() => {
        const savedAnswers = localStorage.getItem('answers');
        return savedAnswers ? JSON.parse(savedAnswers) : Array(questions.length).fill('');
    });
    const [score, setScore] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const defaultProgress = 100 / (questions.length - 1);
    const progress = (currentIndex / (questions.length - 1)) * 100;

    useEffect(() => {
        localStorage.setItem('currentIndex', currentIndex.toString());
        localStorage.setItem('answers', JSON.stringify(answers));
    }, [currentIndex, answers]);

    const handleNext = useCallback(() => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    }, [currentIndex, questions.length]);

    const handlePrevious = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    }, [currentIndex]);

    const handleFinish = useCallback(() => {
        const calculatedScore = answers.reduce((score, answer, index) => {
            return answer === questions[index].correctOption ? score + 1 : score;
        }, 0);

        setScore(calculatedScore);
        setIsLoading(false);
        setIsFinished(true);

        // Clear local storage on completion
        localStorage.removeItem('currentIndex');
        localStorage.removeItem('answers');
    }, [answers, questions]);

    const handleOptionChange = useCallback((option: string) => {
        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[currentIndex] = option;
            return updatedAnswers;
        });
    }, [currentIndex]);

    const handleFinishClick = useCallback(() => {
        setIsDialogOpen(true);
    }, []);

    const handleDialogClose = useCallback(() => {
        setIsDialogOpen(false);
    }, []);

    const handleIsLoading = useCallback(() => {
        setIsLoading(true);
    }, []);

    const handleTryAgain = useCallback(() => {
        setIsDialogOpen(false);
    }, []);

    if (isLoading) {
        return <Loading onFinish={handleFinish} />;
    }

    if (isFinished) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card variant='outlined' sx={{ maxWidth: '500px' }}>
                    <CardContent>
                        <Stack spacing={2}>
                            <Typography variant="h4" gutterBottom>
                                Quiz Finished!
                            </Typography>
                            <Typography variant="body1">
                                Total Questions: {questions.length}
                            </Typography>
                            <Typography variant="body1">
                                Questions Attended: {answers.filter((answer) => answer !== '').length}
                            </Typography>
                            <Typography variant="body1">
                                Your Score: {score}
                            </Typography>
                            <Link href={'/'}>
                                <Button sx={{ width: '100%' }} variant='contained'>Home Page</Button>
                            </Link>
                            <Link href={'/aptilink/starttest'}>
                                <Button sx={{ width: '100%' }} variant='contained'>Go to Quiz</Button>
                            </Link>
                        </Stack>
                    </CardContent>
                </Card>
            </Container >
        );
    }

    return (
        <Container maxWidth="sm" sx={{ my: 5 }}>
            <Card>
                <CardContent>
                    <QuestionProgress value={progress} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 700 }}>
                            {`${currentIndex + 1}/${questions.length}`}
                        </Typography>
                        <Timer onLoading={handleIsLoading} />
                    </Box>
                    <Box my={4} display="flex" justifyContent="center" gap={2}>
                        <Button variant="contained" onClick={handlePrevious} disabled={currentIndex === 0}>
                            Previous
                        </Button>
                        {currentIndex === questions.length - 1 ? (
                            <Button variant="contained" color="primary" onClick={handleFinishClick}>
                                Finish
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={handleNext} disabled={currentIndex === questions.length - 1}>
                                Next
                            </Button>
                        )}
                    </Box>
                    <QuestionDisplay
                        question={questions[currentIndex].question}
                        options={questions[currentIndex].options}
                        selectedOption={answers[currentIndex]}
                        onOptionChange={handleOptionChange}
                    />

                    <Dialog
                        open={isDialogOpen}
                        onClose={handleDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Quiz Completed</DialogTitle>
                        <DialogContent>
                            <Typography>Are you sure you want to finish the quiz?</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='contained' onClick={handleTryAgain}>Cancel</Button>
                            <Button variant='contained' onClick={handleIsLoading} color="primary" autoFocus>
                                Finish
                            </Button>
                        </DialogActions>
                    </Dialog>

                </CardContent>
            </Card>
        </Container>
    );
};

export default QuestionPage;
