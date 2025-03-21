import { LinearProgress, Typography } from '@mui/material';

const Skills = () => {
    const skills = [
        { name: 'React', proficiency: 90 },
        { name: 'Node.js', proficiency: 85 },
        { name: 'Tailwind CSS', proficiency: 95 },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="text-center py-20">
                <Typography variant="h3" className="font-bold mb-8">
                    My Skills
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="neumorphic-card p-6 rounded-lg">
                            <Typography variant="h6" className="font-bold mb-2">
                                {skill.name}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                value={skill.proficiency}
                                className="mb-4"
                            />
                            <Typography variant="body1">{skill.proficiency}%</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;