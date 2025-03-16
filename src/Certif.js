import React from 'react';
import { Typography, Box, CardMedia } from '@mui/material';
import CertifP from './Certification.json';
import './Certif.css';

function Certif({ Time }) {
    let textColor = Time === 'day' ? 'black' : 'white';
    let shadColor = Time === 'day' ? '0px 4px 10px rgb(10 11 13 / 20%)' : '0px 4px 10px rgb(10 11 13)';

    const handleOnClick = (item) =>{
        window.open(item)
    };

    return (
        <Box className="timeline-container">
            <Typography variant="h3" align="center" sx={{ color: textColor, marginBottom: '2rem', lineHeight: 'normal', letterSpacing: 'normal', fontSize: 'calc(1.3rem + 1.6vw)'}}>
                Certification
                <hr className='hr timeline-hr' style={{ width: '140px',}}/>
            </Typography>
            <Box className="certif">
                {CertifP.certif.map((item, index) => (
                    <Box key={index} className={`certif-item`}>
                        <CardMedia sx={{width: '155px', boxShadow: shadColor, cursor: 'pointer'}}
                            component="img"
                            className="timeline-image cert"
                            image={item.src}
                            alt={item.title}
                            onClick={() => handleOnClick(item.dc)}
                        />
                        <Box className="timeline-content" sx={{ color: textColor }}>
                            <Typography variant="h4" className="timeline-title" style={{lineHeight: 'normal !important'}}>
                                {item.title}
                            </Typography>
                            <Typography variant="body1" className="certif-text">
                                {item.point}
                            </Typography>
                            <Typography variant="h6" className="timeline-date" style={{lineHeight: 'normal !important'}}>
                                {item.date}
                            </Typography>
                        </Box>
                    </Box>
                ))}
                <Box className="certif-line" />
            </Box>
        </Box>
    );
}

export default Certif;