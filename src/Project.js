import { Typography, Box, CardMedia } from '@mui/material';
import { useState } from 'react';
import Projet from './projet.json';
import './Project.css';

function Project({ Time }) {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const textColor = Time === 'day' ? 'black' : 'white';
    const boxColor = Time === 'day' ? 'white' : 'rgb(40, 44, 52)';

    const handleOverlayOpen = (project) => {
        setCurrentProject(project);
        setOverlayVisible(true);
    };

    const handleOverlayClose = () => {
        setOverlayVisible(false);
        setCurrentProject(null);
    };

    return (
        <Box className="timeline-container" sx={{padding: '5rem'}}>
            <Typography variant="h3" align="center" sx={{ color: textColor }}>
                Projets
                <hr className="hr" style={{ width: '100px' }} />
            </Typography>
            <div className="grid-container">
                {Projet.projects.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleOverlayOpen(item)}
                        style={{
                            borderRadius: '8px',
                            backgroundColor: "#282c34",
                            boxShadow: "0px 0px 7px 0px rgb(40 44 52)",
                            cursor: 'pointer'
                        }}
                    >
                        <CardMedia
                            component="img"
                            className="project-image"
                            image={item.information.src}
                            alt={item.information.title}
                            sx={{ height: '200px', borderRadius: '8px  8px 0px 0px' }}
                        />
                        <Typography
                            variant="h6"
                            gutterBottom
                            style={{
                                borderTop: '2px solid #ccc',
                                paddingTop: '0.5rem',
                                color: 'white',
                                padding: '1rem'
                            }}
                        >
                            {item.information.title}
                        </Typography>
                    </div>
                ))}
            </div>

            {/* Overlay */}
            {overlayVisible && (
                <div className="overlay">
                    <div className="overlay-content" style={{ backgroundColor: boxColor}}>
                        <button className="close-button" onClick={handleOverlayClose} style={{ color: textColor }}>
                            &times; {/* Symbole de fermeture */}
                        </button>
                        <Typography variant="h4" gutterBottom>
                            {currentProject.information.title}
                        </Typography>
                        <img
                            src={currentProject.information.src}
                            alt={currentProject.information.title}
                            style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: 'rgb(40, 44, 52) 0px 0px 7px 0px'}}
                        />
                        <Typography variant="body1" style={{ marginTop: '1rem', fontSize: '2rem' }}>
                            {currentProject.description.text}
                        </Typography>
                    </div>
                </div>
            )}

        </Box>
    );
}

export default Project;
