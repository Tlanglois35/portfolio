import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
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
                    padding: '2% 6%',
                    // Media query pour écrans ≤ 1300px
                    '@media (max-width: 1300px)': {
                        width: '100%',
                        borderRadius: '0',
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
                            borderRadius: '35%',
                            border: `solid 5px ${ColorT}`,
                            boxShadow: '3px 3px 17px -2px #100e0e',
                        }}
                    />

                    {/* Texte */}
                    <div>
                    <Typography
                        component="div"
                        variant="body1"
                        sx={{
                            fontSize: 'calc(1rem + 0.5vw)',
                            textAlign: 'justify',                        
                        }}
                    >
                        <p>J'me présente je m'appelle henryd sdkdfk dkhfk dhfkd fhksdhfks dhfk shdfkhskdhf skdhf skhfs dfhs fkshd fks fshd fkhfskhdf skfh skfsd hfkdfh sdfksdhf skdf dfksdhf skdf skfsd fhsf hskfsdh fskdf fkhsdfhs kfhs fsk</p>
                    </Typography>
                    <div className="d-flex justify-content-around mb-2 mt-4">
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
