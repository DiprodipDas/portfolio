import React from 'react';
import pc from '../../../assets/project/pc .jpeg';
import doctor from '../../../assets/project/doctor.jpeg';
import edu from '../../../assets/project/edu.jpeg';
import SingleProject from './SingleProject';

const Projects = () => {
    const allProjects = [
        {
            id: 1,
            name: 'PC Mama',
            description: 'This is a usable Computer re-selling website.',
            img: pc
        },
        {
            id: 2,
            name: 'Dr Shetty Chamber',
            description: 'This is a Doctor service review website',
            img: doctor
        },
        {
            id: 3,
            name: 'EduSmart BD',
            description: 'This is a Usable Computer Re-Selling Website.',
            img: edu
        }
    ]
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-12'>My Project</h1>
            <hr className='mb-12 mt-6' />
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                allProjects.map(project => <SingleProject
                     key={project.id}
                     project={project}
                ></SingleProject>)
            }
        </div>
        </div>
    );
};

export default Projects;
const project = [
    {

    }
]