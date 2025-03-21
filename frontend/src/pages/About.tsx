import { Typography, Button } from '@mui/material';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="text-center py-20">
                <div className="neumorphic-card p-8 rounded-lg max-w-2xl mx-auto">
                    <Typography variant="h3" className="font-bold mb-4">
                        About Me
                    </Typography>
                    <Typography variant="body1" className="mb-8">
                        I am a passionate web developer with expertise in React, Node.js, and
                        modern web technologies. I love building user-friendly and scalable
                        applications.
                    </Typography>
                    <Button
                        variant="contained"
                        className="neumorphic-btn bg-gray-100 text-black hover:bg-gray-200"
                    >
                        Edit About Me
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default About;