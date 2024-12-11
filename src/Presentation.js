import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Presentation.css';
import Texte from './TexteP.js'


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
                    width: '90%',
                    height: 'auto',
                    margin: '3% auto',
                    borderRadius: '15px',
                    padding: '2% 6%',
                    boxShadow: '0px 0px 7px 0px rgb(40 44 52)',
                    // Media query pour écrans ≤ 1300px
                    '@media (max-width: 1300px)': {
                        width: '100%',
                        borderRadius: '0',
                        margin: '0',
                    },
                }}
            >
                {/* Titre */}
                <div className='title-box'>
                <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        '@media (max-width: 767px)': {
                            fontSize: 'calc(1.375rem + 1.5vw)',
                        },
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
                        image="./img/pic_M.png"
                        alt='selfie'
                        sx={{
                            width: '300px',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '35%',
                            boxShadow: '0px 0px 7px 4px #575757ad',
                            top: '-70px',
                            position: 'relative',
                            '@media (max-width: 990px)': {
                                margin : '30px',
                                top: '0px',
                                width: '150px',
                                height: '150px',
                            }
                        }}
                    />

                    {/* Texte */}
                    <div className='pres-box'>
                    <Typography
                        component="div"
                        variant="body1"
                        sx={{
                            fontSize: 'calc(0.86rem + 0.5vw)',
                            textAlign: 'center',

                            '@media (max-width: 990px)': {
                                fontSize: 'large'
                            },
                            '@media (max-width: 720px)': {
                                fontSize: 'medium'
                                
                            }
                        }}
                    >
                        <Texte />
                    </Typography>
                    <div className="d-flex justify-content-around mb-2 gap-5" style={{marginTop:'15px'}}>
                    <a className='p-ico' href='/docs/CV_ThomasL.pdf' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileLines} size='3x'/>
                        <span>CV</span>
                    </a>
                    <a className='p-ico' href='https://www.linkedin.com/in/thomas-langlois-ba904b226/?trk=opento_sprofile_goalscard' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size='3x'/>
                        <span>LinkedIn</span>
                    </a>
                    <a className='p-ico' href='https://github.com/Tlanglois35' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='3x'/>
                        <span>GitHub</span>
                    </a>
                    </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Présentation;
