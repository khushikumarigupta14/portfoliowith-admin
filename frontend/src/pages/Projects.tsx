import { Card, CardContent, Typography, Button } from '@mui/material';

const Projects = () => {
    const projects = [
        { id: 1, title: 'Project 1', description: 'Description of Project 1' },
        { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="text-center py-20">
                <Typography variant="h3" className="font-bold mb-8">
                    My Projects
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card key={project.id} className="neumorphic-card rounded-lg">
                            <CardContent>
                                <Typography variant="h6" className="font-bold mb-2">
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" className="mb-4">
                                    {project.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    className="neumorphic-btn bg-gray-100 text-black hover:bg-gray-200"
                                >
                                    View Project
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;