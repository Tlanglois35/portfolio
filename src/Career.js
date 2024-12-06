import React from 'react';
import { Typography, Box, CardMedia, Stack} from '@mui/material';
import "./Career.css"


function Career({ Time }){
    let ColorT
    Time === 'day' ? ColorT = "black" : ColorT = "white"
    const careerP = [
        {
            title: 'ISEN Ouest',
            date: 'Septembre 2025 - Juillet 2028',
            text: "Entrer en CIPA 3 à l'école d'ingénieur de l'Institue Supérieur de l'Électrionique et du Numérique de Brest.",
            src: './img/ISEN_Ouest.png',
            dir: 'row-reverse',

        },
        {
            title: 'BTS CIEL',
            date: 'Septembre 2023 - Juillet 2025',
            text: `Obtention du BTS CIEL option Informatique et Électronique au lycée Jeanne d'Arc Vitré (35)`,
            src: './img/JAV.png',
            dir: 'row',
        },
        {
            title: 'Stage Keolis Rennes',
            date: 'Mai 2024 - Juillet 2024',
            text: `Keolis`,
            src: './img/Keolis.png',
            dir: 'row-reverse',
        },
        {
            title: 'BAC Pro Système Numérique',
            date: 'Mai 2024 - Juillet 2024',
            text: `Obtention du baccalauréat système numérique option ARED avec mention Bien au lycée Jeanne d'Arc Vitré (35)`,
            src: './img/JAV.png',
            dir: 'row',
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
                    <div style={{ display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column', 
                            }}>
                    <CardMedia
                        component="img"
                        image= {category.src}
                        alt= {category.title}
                        sx={{
                            width: '200px',
                            height: '150px',
                            backgroundColor: 'white',
                            borderRadius: '30px',
                            border: 'solid 3px rgb(40, 44, 52)',
                            boxShadow: 'rgb(40, 44, 52) 0px 0px 4px 0px'
                        }}
                    />
                    <div key={category.title} style={{ 
                            padding: '2rem', 
                            display: 'flex', 
                            flexDirection: category.dir, 
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
                            <Typography variant="h6" align="center" sx={{ color: ColorT,}}>
                                <div>{category.date}</div>
                            </Typography>
                            <Typography variant="h4" align="center" sx={{ color: ColorT,}}>
                                <div>{category.title}</div>
                            </Typography>
                            <Typography variant="h7" align="center" sx={{ color: ColorT,}}>
                                <div>{category.text}</div>
                            </Typography>
                        </Box>
                    </div>
                    </div>
                ))}
            </Stack>
            </div>
        </Box>
    );
};

export default Career;