import React from 'react'
import './style.css'

export default function Footer() {
  return (
    <footer>
      <div className="social">
        <h3>We are social</h3>
        <ul className="social-box">
          <li><i className='fa-brands fa-facebook-f'></i></li>
          <li><i className='fa-brands fa-google'></i></li>
          <li><i className='fa-brands fa-twitter'></i></li>
          <li><i className='fa-brands fa-youtube'></i></li>
          <li><i className='fa-solid fa-blog'></i></li>
          <li><i className='fa-brands fa-whatsapp'></i></li>
          <li><i className='fa-brands fa-telegram'></i></li>
        </ul>
      </div>
      <div className="copy">Designed by M.Elsayed</div>
    </footer>
  )
}
