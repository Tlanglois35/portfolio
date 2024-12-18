import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Logo } from './icon.svg';
import './Footer.css'

function Footer({ Time }){
    let ColorF
    Time === 'day' ? ColorF = "white" : ColorF = "#575757"
    return(
        <div className={`Footer ${Time}`}>
            <h1>CONTACT</h1>
            <hr style={{ color: ColorF }} />
            <div className='footer-container'>
                <Logo className='footer-logo' />
                <div  className='footer' style={{
                        display: 'grid',
                        justifyItems: 'start',
                        margin: '2% 0',
                    }}>
                    <div className='info-box'>
                        <div className='contact mail'>
                            <p>thomas.langlois@isen-ouest.yncrea.fr</p>
                            <FontAwesomeIcon icon={faEnvelope} size='3x' className='icon mail'/>
                        </div>
                        <div className='contact phone'>
                            <p>+33 06 18 72 67 96</p>
                            <FontAwesomeIcon icon={faPhone} size='3x' className='icon phone'/>
                        </div>
                        <div className='contact position'>
                            <p>Bretagne, France</p>
                            <FontAwesomeIcon icon={faLocationDot} size='3x' className='icon position'/>
                        </div>
                    </div>
                    <div className="ico box d-flex justify-content-between w-100">
                        <a className='p-ico footer' href='/docs/CV_ThomasL.pdf' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFileLines} size='2x'/>
                            <span>CV</span>
                        </a>
                        <a className='p-ico footer' href='https://www.linkedin.com/in/thomas-langlois-ba904b226/?trk=opento_sprofile_goalscard' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                            <span>LinkedIn</span>
                        </a>
                        <a className='p-ico footer' href='https://github.com/Tlanglois35' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='2x'/>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;