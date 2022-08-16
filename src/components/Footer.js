import '../styles/footer.css';
import blackGithubIcon from "../logo-images/black-github-icon-30.png";
import linkedin from "../logo-images/icons8-linkedin-48.png";

function Footer(){
    return(
        <footer className="footer-info">
            
            {/* <a target="_blank"></a> icon's by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <a  href="https://github.com/isabel2296">
                <img  className="about-project-card-github" src={blackGithubIcon} />
            </a>
            <a  href="https://www.linkedin.com/in/silva-2-isabel">
                <img  className="about-project-card-github" src={linkedin} />
            </a>
        </footer>
    );
}

export default Footer;