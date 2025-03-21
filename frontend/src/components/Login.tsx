// Login.jsx
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { Button, TextField, Card, CardContent } from '@mui/material';
const Login = () => {
    const dispatch = useDispatch();
    const handleLogin = () => dispatch(login({ name: 'User' }));
    return (
        <Card className='neu-card'>
            <CardContent>
                <h2 className='text-xl font-bold'>Login</h2>
                <TextField label='Email' fullWidth className='my-2' />
                <TextField label='Password' type='password' fullWidth className='my-2' />
                <Button variant='contained' onClick={handleLogin}>Login</Button>
            </CardContent>
        </Card>
    );
};
export default Login;