import './Home.css'
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";



function Home() {
  return (
    
    <div className="page">
      <header className="header">
      <SiHtml5 className='ıconSoft' />
      <SiCss3 className='ıconSoft' />
      <SiJavascript className='ıconSoft'/>
      <GrReactjs className='ıconSoft'/>
      <img style={{width:'40px', display:'inline-block', marginBottom:'-10px',marginLeft:'-75px'}} src="/avataaars.svg"></img>
       <h3 style={{color:'#404040',display:'inline-block'}}>Mustafa Dağlı</h3>
        <nav className="nav">
          <a href="/Projects">Projects</a>
        </nav>
       
      </header>

      <section id="about" className="section">
        <h2 style={{color:'#404040'}}>About Me</h2>
        <p>
        Hello, I'm Mustafa Dağlı, a second-year Computer Engineering student in Turkey. Throughout my university life, I’ve been focused on developing myself in the field of software. In my second year, I passed the Erasmus English language exam and had the opportunity to study in Poland, which greatly contributed to both my technical and personal growth.

        I have developed projects in the frontend field using HTML, CSS, JavaScript, and React. I’m also familiar with Git and use it actively. As someone who is always eager to learn, I constantly explore new technologies and strive to improve myself.

        My goal is to become a full-stack developer. With this in mind, I’ve started diving into backend development to expand my knowledge in this area. At the same time, I try to keep my GitHub profile active by building projects that put what I’ve learned into practice.

        Every new project is a new learning opportunity for me. I see myself as a team player, solution-oriented, and someone who is open to growth — aiming to build a strong career in the world of software development.
        </p>
      </section>

  

      <section id="contact" className="section">
        <h2 style={{color:'#404040'}}>Contact</h2>
        

          <div className='communication'>
          <SiGmail className='ıcon' /> 
            Mail:<a className='mail' href="mailto:mustafa.dagli011@gmail.com">mustafa.dagli011@gmail.com</a>
          </div>
          <div className='communication'>
          <BsLinkedin className='ıcon'/>
            Linkedln:<a className='mail' target='_blank' href="https://www.linkedin.com/in/mustafa-da%C4%9Fl%C4%B1-3a550b2a6/?trk=opento_sprofile_details">www.linkedin.com/in/mustafa-dağlı-3a550b2a6</a>
          </div>
          <div className='communication'>
          <BsGithub className='ıcon'/>
            GitHub:<a className='mail' target='_blank' href="https://github.com/mustafadagli0">https://github.com/mustafadagli0</a>
          </div>
        
      </section>

      <footer className="footer">
        © 2025 Mustafa Dağlı
      </footer>
    </div>
   
  )
}

export default Home