// api/login.ts
import Cookies from 'js-cookie';

interface LoginType {
    email: string;
    password: string;
}

const login = async ({ email, password }: LoginType) => {
    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        // Set the access token in cookies
        Cookies.set('accessToken', data.token, { expires: 1 }); // expires in 1 day
        localStorage.setItem('userData', JSON.stringify(data.user));
        return data.token;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default login;
