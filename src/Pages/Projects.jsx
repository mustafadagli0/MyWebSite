import React from 'react';
import './Projects.css';
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import {useEffect} from 'react';
import { useState } from 'react';


function Projects() {

 const [repos, setRepos] = useState([]);

     useEffect(() => {
    fetch('https://api.github.com/users/mustafadagli0/repos')  
      .then(response => response.json())  
      .then(data => {
        setRepos(data);
      })
      .catch(error => {
        console.error("Hata oluştu:", error);
      });
  }, []); 
  return (
     <>
        <div className="page">
          <header className="header">
          <SiHtml5 className='ıconSoft' />
          <SiCss3 className='ıconSoft' />
          <SiJavascript className='ıconSoft'/>
          <GrReactjs className='ıconSoft'/>
          <img style={{width:'40px', display:'inline-block', marginBottom:'-10px',marginLeft:'-75px'}} src="/avataaars.svg"></img>
           <h3 style={{color:'#404040',display:'inline-block'}}>Mustafa Dağlı</h3>
            <nav className="nav">
              <a href='/'>Home</a>
            </nav>
          </header>
    
          <section id="about" className="section">
            <h2 style={{color:'#404040'}}>My Projects</h2>
            <div>
                <ul className='projectsUl'>
                    {repos.map(repo => (
                    <div className='projectsList' onClick={() => window.open(repo.html_url, '_blank')} key={repo.id} >
                        <a className='projectsName' href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                        </a>
                        <a style={{display:'flex', justifyContent:'right' ,textDecoration:'none',color:'#606060' }} href="">{repo.stargazers_count}★</a>
                        <a style={{display:'flex', justifyContent:'right',textDecoration:'none',color:'black' }} href=""> {repo.language || 'N/A'}</a>
                    </div>
                    ))}
                </ul>
            </div>
        
     </section>
      
    
          <section id="contact" className="section">
            <h2 style={{color:'#404040'}}>Communication</h2>
          
    
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
        </>
  )
}

export default Projects