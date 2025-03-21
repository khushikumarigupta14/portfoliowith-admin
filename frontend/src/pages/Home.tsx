import { Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '../redux/homeSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { title, description } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Hero Section */}
            <div className="text-center py-20">
                <Typography variant="h1" className="text-4xl font-bold mb-4">
                    {title}
                </Typography>
                <Typography variant="h5" className="text-xl mb-8">
                    {description}
                </Typography>
                <Button
                    variant="contained"
                    className="neumorphic-btn bg-gray-100 text-black hover:bg-gray-200"
                >
                    View My Work
                </Button>
            </div>
        </div>
    );
};

export default Home;
