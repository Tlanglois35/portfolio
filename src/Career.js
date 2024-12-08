import React from 'react';
import { Typography, Box, CardMedia } from '@mui/material';
import CareerP from './Career.json';
import './Career.css';

function Career({ Time }) {
    let textColor = Time === 'day' ? 'black' : 'white';
    let shadColor = Time === 'day' ? '0px 4px 10px rgb(10 11 13 / 20%)' : '0px 4px 10px rgb(10 11 13)';

    return (
        <Box className="timeline-container">
            <Typography variant="h3" align="center" sx={{ color: textColor, marginBottom: '5rem'}}>
                PARCOURS
                <hr className='hr' style={{ width: '180px',}}/>
            </Typography>
            <Box className="timeline">
                {CareerP.career.map((item, index) => (
                    <Box key={index} className={`timeline-item ${item.side}`}>
                        <Box className="timeline-content" sx={{ color: textColor }}>
                            <Typography variant="h6" className="timeline-date">
                                {item.date}
                            </Typography>
                            <Typography variant="h4" className="timeline-title">
                                {item.title}
                            </Typography>
                            <Typography variant="body1" className="timeline-text">
                                {item.text}
                            </Typography>
                        </Box>
                        <CardMedia sx={{width: '155px', boxShadow: shadColor}}
                            component="img"
                            className="timeline-image"
                            image={item.src}
                            alt={item.title}
                        />
                    </Box>
                ))}
                <Box className="timeline-line" />
            </Box>
        </Box>
    );
}

export default Career;
