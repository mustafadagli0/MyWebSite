import './Home.css'
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaPython } from "react-icons/fa";



function Home() {
  return (
    
    <div className="page">
      <header className="header">
      <SiHtml5 className='ıconSoft' />
      <SiCss3 className='ıconSoft' />
      <SiJavascript className='ıconSoft'/>
      <GrReactjs className='ıconSoft'/>
      <FaPython className='ıconSoft'/>
      <img style={{width:'40px', display:'inline-block', marginBottom:'-10px',marginLeft:'-75px'}} src="/avataaars.svg"></img>
       <h3 style={{color:'#404040',display:'inline-block'}}>Mustafa Dağlı</h3>
        <nav className="nav">
          <a href="/Projects">Projects</a>
        </nav>
       
      </header>

      <section id="about" className="section">
        <h2 style={{color:'#404040'}}>About Me</h2>
        <p>
          I am a 3rd-year Computer Engineering student dedicated to building impactful software solutions through data-driven approaches. With a strong background of over 2 years in the JavaScript ecosystem (React, HTML5, CSS3), I specialize in creating intuitive user experiences and scalable frontend architectures.

          My academic journey included an international exchange program in Poland, which significantly enhanced my technical adaptability and my ability to work effectively in diverse, multicultural teams.

          Currently, I am expanding my expertise into Python and Artificial Intelligence. My goal is to combine my full-stack development skills with machine learning to build intelligent applications that solve complex real-world problems. I am a solution-oriented developer, an active GitHub contributor, and a lifelong learner committed to writing clean, efficient code.
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
            GitHub:<a className='mail' target='_blank' href="https://github.com/mustafadagli0?tab=repositories">https://github.com/mustafadagli0</a>
          </div>
        
      </section>

      <footer className="footer">
        © 2025 Mustafa Dağlı
      </footer>
    </div>
   
  )
}

export default Home