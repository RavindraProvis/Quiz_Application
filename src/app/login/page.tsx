// pages/login.tsx
'use client';
import { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Stack, Typography } from '@mui/material';

import Cookies from 'js-cookie';
import login from '@/api/login';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('accessToken');
        if (token) {
            router.push('/'); // Redirect to home if already logged in
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await login({ email, password });
            console.log(Cookies.get())
            router.push('/'); // Change to your desired path
        } catch (error) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    marginTop: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Typography textAlign={'center'} variant='h3'>Log In</Typography>
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                    />
                    {error && <Box sx={{ color: 'red' }}>{error}</Box>}
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Login
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default LoginPage;
