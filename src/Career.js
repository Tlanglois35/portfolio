import React from 'react';
import { Typography, Box } from '@mui/material';
import "./Career.css"

function Career({ Time }){
    return(
        <Box sx={{ padding: '2rem' }}>

            <Typography variant="h3" align="center" gutterBottom>
                Parcours
                <hr className='hr' style={{width: '10%',}}/>
            </Typography>
        </Box>
    );
};

export default Career;