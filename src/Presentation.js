import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Presentation.css';


function Présentation({ Time }) {
    let ColorT
    Time === 'day' ? ColorT = "white" : ColorT = "#575757"
    return (
        <div className={`Body ${Time}`}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#282c34',
                    color: 'white',
                    width: '70%',
                    height: 'auto',
                    margin: '3% auto',
                    borderRadius: '15px',
                    padding: '2%',
                }}
            >
                {/* Titre */}
                <div className='title-box'>
                <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    PRÉSENTATION
                </Typography>

                <hr style={{ color: ColorT }} />

                </div>
                {/* Contenu */}
                <div className='title-content'>
                    {/* Image */}
                    <CardMedia
                        component="img"
                        image="/pic.jpg"
                        alt='selfie'
                        sx={{
                            width: '300px',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            border: `solid 5px ${ColorT}`,
                            boxShadow:''
                        }}
                    />

                    {/* Texte */}
                    <Typography
                        component="div"
                        variant="body1"
                        sx={{
                            maxWidth: '60%', // Limite la largeur du texte
                            fontSize: 'calc(1rem + 0.5vw)',                        
                        }}
                    >
                        J'me présente je m'appelle henry<br />
                        Et j'voudrai bien réussir ma vie<br />
                        Être aimé
                    </Typography>
                </div>
            </Card>
        </div>
    );
}

export default Présentation;
