import React from 'react'
import { Link } from 'react-router-dom'
import { LinkedinLogo, GithubLogo,Envelope } from 'phosphor-react'
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
    <div className='linkler'>
      <Link to='https://www.linkedin.com/in/gulseren-kapanoglu/'><LinkedinLogo size={34}/> </Link>
      <Link to='https://github.com/serenkapanoglu'><GithubLogo size={34}/></Link>
      <Link to='mailto:kapanogluseren01@gmail.com'><Envelope size={34} /></Link>
      
      
    </div>
  </div>
  
  )
}

export default Footer