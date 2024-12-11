import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Typography, Box, CardMedia } from '@mui/material';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
        document.body.style.overflow = "hidden"; // Désactiver le scroll sur le body
    };
    
    const handleOverlayClose = () => {
        setOverlayVisible(false);
        setCurrentProject(null);
        document.body.style.overflow = "auto"; // Réactiver le scroll sur le body
    };
    

    return (
        <Box className="timeline-container" 
        sx={{
            margin: '0 auto',
            width: '80%',
            '@media (max-width: 425px)': {
                width: '95%',
              },
            }}>
            <Typography variant="h3" align="center" sx={{ color: textColor, marginBottom: '3rem', fontSize: 'calc(1.3rem + 1.6vw)' }} >
                PROJETS
                <hr className="hr projet-hr" style={{ width: '120px' }} />
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
                            className='project-text'
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
                        <div className='overlay-head'>
                        <button className="close-button" onClick={handleOverlayClose} style={{ color: textColor }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <Typography variant="h4" className='overlayText' gutterBottom sx={{ marginBottom: '0px'}}>
                            {currentProject.information.title}
                        </Typography>
                        </div>
                        <img
                            src={currentProject.information.src}
                            alt={currentProject.information.title}
                            style={{ maxWidth: '95%', borderRadius: '8px', boxShadow: 'rgb(40, 44, 52) 0px 0px 7px 0px', marginBottom: '15px', marginTop: '5px'}}
                        />
                        <div className='globalInf'>
                        <div className='info cadre'>
                            <p style={{ color: textColor, minWidth: '125px'}}>Cadre : </p>
                            <Typography  variant="h6"
                                gutterBottom
                                style={{
                                    color: textColor,
                                    fontSize: '1.2rem',
                                    marginBottom: '0px',
                                    textAlign: 'left',
                                }}>
                                {currentProject.information.cadre}
                            </Typography>
                        </div>                        
                        <div className='info date'>
                            <p style={{ color: textColor, minWidth: '125px'}}>Date : </p>
                            <Typography  variant="h6"
                                gutterBottom
                                style={{
                                    color: textColor,
                                    fontSize: '1.2rem',
                                    marginBottom: '0px',
                                    textAlign: 'left',
                                }}>
                                {currentProject.information.date}
                            </Typography>
                        </div>
                        <div className='info part'>
                            <p style={{ color: textColor, minWidth: '125px'}}>Participant : </p>
                            <Typography  variant="h6"
                                gutterBottom
                                style={{
                                    color: textColor,
                                    fontSize: '1.2rem',
                                    marginBottom: '0px',
                                    textAlign: 'left',
                                }}>
                                {currentProject.information.participant}
                            </Typography>
                        </div>
                        <div className='info tek'>
                            <p style={{ color: textColor, minWidth: '125px'}}>Technologies utilisés : </p>
                            <Typography  variant="h6"
                                gutterBottom
                                style={{
                                    color: textColor,
                                    fontSize: '1.2rem',
                                    marginBottom: '0px',
                                    textAlign: 'left',
                                    maxWidth: '330px'
                                }}>
                                {currentProject.information.technologie}
                            </Typography>
                        </div>
                        </div>
                        <hr />
                        <div className='info desc'>
                            <p style={{ color: textColor, minWidth: '125px'}}>Description : </p>
                            <Typography  variant="h6"
                                gutterBottom
                                className='desc-text'
                                style={{
                                    color: textColor,
                                    fontSize: '1.2rem',
                                    marginBottom: '0px',
                                    width: '100%',
                                    textAlign: 'left',
                                }}>
                                    {currentProject.description.text.split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </Typography>
                        </div>
                        <hr />
                        <div className='info-icon'>
                        {currentProject.links?.GitHub && (
                            <a className="p-ico footer" href={currentProject.links.GitHub} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                                <span>GitHub</span>
                            </a>
                        )}
                        {currentProject.links?.Webs && (
                            <a className="p-ico footer" href={currentProject.links.Webs} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGlobe} size="3x" />
                                <span>Web</span>
                            </a>
                        )}
                        </div>
                    </div>
                </div>
            )}

        </Box>
    );
}

export default Project;
