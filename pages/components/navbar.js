import React from 'react'
import Styles from '/styles/navbar.module.css'
import Head from 'next/head'

const navbar = () => {
  return (
    <div>
        
        <ul className={Styles.ul}>
            <li className={Styles.li}><a className={Styles.active} href="#home">Home</a></li>
            <li className={Styles.li}><a href="#news">News</a></li>
            <li className={Styles.li}><a href="#contact">Contact</a></li>
            <li className={Styles.li}><a href="#about">About</a></li>
        </ul>
    </div>
  )
}

export default navbar