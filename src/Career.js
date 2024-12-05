import React from 'react';
import { Typography, Box, CardMedia, Stack} from '@mui/material';
import "./Career.css"


function Career({ Time }){
    const careerP = [
        {
            title: 'ISEN Ouest',
            date: 'Septembre 2025 - Juillet 2028',
            text: "Entrer en CIPA 3 à l'école d'ingénieur de l'Institue Supérieur de l'Électrionique et du Numérique de Brest.",
            src: './img/ISEN_Ouest.png',
        },
        {
            title: 'BTS CIEL',
            date: 'Septembre 2023 - Juillet 2025',
            text: `Obtention du BTS CIEL option Informatique et Électronique au lycée Jeanne d'Arc Vitré (35)`,
            src: './img/JAV.png',
        },
        {
            title: 'Stage Keolis Rennes',
            date: 'Mai 2024 - Juillet 2024',
            text: `Keolis`,
            src: './img/Keolis.png',
        },
        {
            title: 'BAC Pro Système Numérique',
            date: 'Mai 2024 - Juillet 2024',
            text: `Obtention du baccalauréat système numérique option ARED avec mention Bien au lycée Jeanne d'Arc Vitré (35)`,
            src: './img/JAV.png',
        },
    ];
    
    return(
        <Box >
            <div style={{  margin: '0 auto', width: '50%', }}>
            <Typography variant="h3" align="center">
                Parcours
                <hr className='hr' style={{width: '125px',}}/>
            </Typography>
            <Stack spacing={4} style={{ marginTop: '20px' }}>
                {careerP.map((category) => (
                    <div key={category.title} style={{ 
                            padding: '2rem', 
                            display: 'flex', 
                            flexDirection: 'row-reverse', 
                            alignItems: 'center', 
                            gap: '35px' 
                        }}>
                        <Box
                            variant="h6"
                            style={{
                            borderBottom: '2px solid #ccc',
                            paddingBottom: '0.5rem',
                            color: 'white',
                            }}
                        >
                            <div>{category.date}</div>
                            <div>{category.title}</div>
                            <div>{category.text}</div>
                        </Box>
                        <CardMedia
                            component="img"
                            image= {category.src}
                            alt= {category.title}
                            sx={{
                                width: '200px',
                                height: '150px',
                                backgroundColor: 'white',
                                borderRadius: '30px',
                            }}
                        />
                    </div>
                ))}
            </Stack>
            </div>
        </Box>
    );
};

export default Career;