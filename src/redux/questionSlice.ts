import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionType {
    id: number;
    question: string;
    options: string[];
    correctOption: string;
}

interface InitialStateType {
    questions: QuestionType[]
}

const initialState: InitialStateType = {
    questions: [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctOption: "Paris"
        },
        {
            id: 2,
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            correctOption: "Jupiter"
        },
        {
            id: 3,
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "HO"],
            correctOption: "H2O"
        },
        {
            id: 4,
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
            correctOption: "William Shakespeare"
        },
        {
            id: 5,
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Silver"],
            correctOption: "Diamond"
        },
        {
            id: 6,
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctOption: "Paris"
        },
        {
            id: 7,
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            correctOption: "Jupiter"
        },
        {
            id: 8,
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "HO"],
            correctOption: "H2O"
        },
        {
            id: 9,
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
            correctOption: "William Shakespeare"
        },
        {
            id: 10,
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Silver"],
            correctOption: "Diamond"
        },
    ]
};

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addQuestion(state, action: PayloadAction<QuestionType>) {
            state.questions.push(action.payload);
        },
        updateQuestion(state, action: PayloadAction<QuestionType>) {
            const index = state.questions.findIndex(q => q.id === action.payload.id);
            if (index !== -1) {
                state.questions[index] = action.payload;
            }
        },
        removeQuestion(state, action: PayloadAction<number>) {
            state.questions = state.questions.filter(q => q.id !== action.payload);
        }
    }
});

export const { addQuestion, updateQuestion, removeQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
