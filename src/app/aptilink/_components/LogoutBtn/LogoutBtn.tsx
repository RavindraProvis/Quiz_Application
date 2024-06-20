// components/LogoutButton.tsx
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove('accessToken')
        localStorage.clear();
        window.location.reload();
    };

    return (
        <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
