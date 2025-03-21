import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" className="bg-gray-100 shadow-none">
            <Toolbar>
                <Typography variant="h6" className="flex-grow text-black">
                    My Portfolio
                </Typography>
                <Button color="inherit" className="text-black">
                    <Link to="/">Home</Link>
                </Button>
                <Button color="inherit" className="text-black">
                    <Link to="/about">About</Link>
                </Button>
                <Button color="inherit" className="text-black">
                    <Link to="/skills">Skills</Link>
                </Button>
                <Button color="inherit" className="text-black">
                    <Link to="/projects">Projects</Link>
                </Button>
                <Button color="inherit" className="text-black">
                    <Link to="/contact">Contact</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;