import React from 'react';
import { Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGears, faExplosion, faPlug, faObjectUngroup, faLayerGroup, faWaveSquare, faC } from '@fortawesome/free-solid-svg-icons';
import { faPython, faGithub, faJava, faHtml5, faCss3Alt, faJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import './Skill.css'

function Skill() {
    const categories = [
    {
    title: 'Développement Logiciel',
        skills: ['C', 'C++', 'Python', 'Java'],
    },
    {
        title: 'Développement Web',
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'SQL'],
    },
    {
        title: 'Électronique',
        skills: ['Conception', 'Brasure', 'Câblage', 'Lecture schématique', 'Routage'],
    },
    {
        title: 'Outils',
        skills: ['Proteus', 'Cisco', 'GitHub', 'Oscilloscope'],
    },
];

const skillIcons = {
    C: <FontAwesomeIcon icon={faC} size='3x' color='white'/>,
    'C++':  <img
                src='./img/C++.png'
                alt='C++'
                className="skill-icon"
            />,
    Python: <FontAwesomeIcon icon={faPython} size='3x' color='white'/>,
    Java: <FontAwesomeIcon icon={faJava} size='3x' color='white'/>,
    HTML: <FontAwesomeIcon icon={faHtml5} size='3x' color='white'/>,
    CSS: <FontAwesomeIcon icon={faCss3Alt} size='3x' color='white'/>,
    JavaScript: <FontAwesomeIcon icon={faJs} size='3x' color='white'/>,
    PHP: <FontAwesomeIcon icon={faPhp} size='3x' color='white'/>,
    React: <FontAwesomeIcon icon={faReact} size='3x' color='white'/>,
    SQL: <FontAwesomeIcon icon={faDatabase} size='3x' color='white'/>,
    Conception: <FontAwesomeIcon icon={faGears} size='3x' color='white'/>,
    Brasure: <FontAwesomeIcon icon={faExplosion} size='3x' color='white'/>,
    Câblage: <FontAwesomeIcon icon={faPlug} size='3x' color='white'/>,
    'Lecture schématique': <FontAwesomeIcon icon={faObjectUngroup} size='3x' color='white'/>,
    Routage: <FontAwesomeIcon icon={faLayerGroup} size='3x' color='white'/>,
    Proteus: <img
                src='./img/Proteus.png'
                alt='Proteus'
                style={{height: '3rem',}}/>,
    Cisco: <img
                src='./img/Cisco.png'
                alt='Cisco'
                style={{height: '3rem',}}/>,
    GitHub: <FontAwesomeIcon icon={faGithub} size='3x' color='white'/>,
    Oscilloscope: <FontAwesomeIcon icon={faWaveSquare} size='3x' color='white'/>,
  };


    return (
        <Box sx={{ padding: '2rem' }}>

            <Typography variant="h3" align="center" gutterBottom>
                COMPÉTENCES
                <hr className='hr'/>
            </Typography>
            <div className='grid-container'>
            {categories.map((category) => (
            <div
                key={category.title}
                style={{
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: "#282c34",
                boxShadow: "0px 0px 7px 0px rgb(40 44 52)",
                }}
            >
            <Typography
                variant="h6"
                gutterBottom
                style={{
                borderBottom: '2px solid #ccc',
                paddingBottom: '0.5rem',
                color: 'white',
                }}
            >
            {category.title}
            </Typography>
            <div
                style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '1rem',
                marginTop: '15px',
                }}
            >
            {category.skills.map((skill) => (
                <div
                    key={skill}
                    style={{
                    textAlign: 'center',
                    }}
                >
                {skillIcons[skill]}
                <Typography variant="body2" style={{ marginTop: '0.5rem', color: 'white', }}>
                {skill}
                </Typography>
                </div>
            ))}
            </div>
            </div>
            ))}
            </div>
        </Box>
    );
}

export default Skill;
