import React from 'react';
import { Typography, Box, CardMedia } from '@mui/material';
import './Career.css';

function Career({ Time }) {
    let textColor = Time === 'day' ? 'black' : 'white';
    let shadColor = Time === 'day' ? '0px 4px 10px rgb(10 11 13 / 20%)' : '0px 4px 10px rgb(10 11 13)';

    const careerP = [
        {
            title: 'ISEN Ouest',
            date: 'Septembre 2025 - Juillet 2028',
            text: "Entrée en CIPA 3 à l'école d'ingénieur de l'Institut Supérieur de l'Électronique et du Numérique de Brest.",
            src: './img/ISEN.png',
            side: 'right',
        },
        {
            title: 'BTS CIEL',
            date: 'Septembre 2023 - Juillet 2025',
            text: `Obtention du BTS CIEL option B Électronique et Réseau au lycée Jeanne d'Arc Vitré (35).`,
            src: './img/JAV.png',
            side: 'left',
            left: '8%',
        },
        {
            title: 'Stage Keolis Rennes',
            date: 'Mai 2024 - Juillet 2024',
            text: `Stage chez Keolis blbalbalablablbalbalabdssss ssssssssssssssss ssssssss ssssss ssssssssss.`,
            src: './img/Keolis.png',
            side: 'right',
            right: 'right',
        },
        {
            title: 'BAC Pro Système Numérique',
            date: 'Mai 2024 - Juillet 2024',
            text: `Obtention du baccalauréat système numérique option ARED avec mention Bien au lycée Jeanne d'Arc Vitré (35).`,
            src: './img/JAV.png',
            side: 'left',
            left: '8%',
        },
    ];

    return (
        <Box className="timeline-container">
            <Typography variant="h3" align="center" sx={{ color: textColor }}>
                Parcours
                <hr className='hr' style={{ width: '135px',}}/>
            </Typography>
            <Box className="timeline">
                {careerP.map((item, index) => (
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
