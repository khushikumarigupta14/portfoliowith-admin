import { TextField, Button, Typography } from '@mui/material';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="text-center py-20">
                <Typography variant="h3" className="font-bold mb-8">
                    Contact Me
                </Typography>
                <div className="neumorphic-card p-8 rounded-lg max-w-2xl mx-auto">
                    <form>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            className="mb-4"
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            className="mb-4"
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            className="mb-4"
                        />
                        <Button
                            variant="contained"
                            className="neumorphic-btn bg-gray-100 text-black hover:bg-gray-200"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;