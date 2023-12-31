import React from 'react'
import '../stylings/compoStyle/footer.css'
import qr from '../assets/registrationQr.jpg'
import { FaInstagram as Insta, FaFacebookSquare as FB } from 'react-icons/fa'
import { FiMail as Mail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll'
function Footer() {
  return (
    <div className='col align-center footer'>
      <div className="row justify-se  footer-div">
        <div className="col footer-div-1">
          <h2 className='footer-head'  >SENGUNTHAR ENGINEERING COLLEGE</h2>
          <div className="row justify-sb footer-icons" >
            <Link to={'https://www.instagram.com/sengunthar_t.gode/'} className='link-tag'><Insta /></Link>
            <Link className='link-tag'><FB /></Link>
            <Link className='link-tag'><Mail /></Link>
          </div>
        </div>
        <div className="col align-start footer-div-2">
          <Link className='link-tag' to='/home'>Home</Link>
          <Link className='link-tag'>Contact</Link>
          <ScrollLink to='about' smooth={true} className='link-tag' duration={3000}>Welcome</ScrollLink>
          <ScrollLink className='link-tag' smooth={true} to='dept-nav-head' duration={3000}>Departments</ScrollLink>
        </div>
        <div className="col align-center footer-div-3">
          <div className="row justify-center footer-img-div">
            <Link className='link-tag' to='https://docs.google.com/forms/d/e/1FAIpQLScv_W1hmSG9bEC-hzfnCku2fd32DxzX765lI17prWo-z9nWmw/viewform'>
              <img src={qr} alt="registration QR" className='qr-img' />
            </Link>
          </div>
          <p>Register Now to Particate </p>
        </div>
      </div>
      <p>&copy;All copyrights reserved for SEC-2023</p>
    </div>

  )
}

export default Footer