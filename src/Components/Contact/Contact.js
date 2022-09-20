import React from 'react'
import './style.css'

export default function Contact() {
  return (
    <div className='contact-div'>
    <h2>Drop Me A line</h2>
       <form>
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email' />
        <input type="text" placeholder='Subject' />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" value='Send Message'/>
       </form>
    </div>
  )
}
