import React from 'react'
import { Link } from 'react-router-dom';
import github from '../../images/github.png';
import link from '../../images/link.png'
import twitter from '../../images/twit.png'

const index = () => {
  return (
     <header className="footer">
        <div className="footer__logo">
          <Link to="/" className="header__link">
            <h4>Social Media handles</h4>
          </Link>
        </div>
        <ul className="footer__list">
          <li className="header__li">
            <a href="https://github.com/jagdishsaini90" className="header__link">
              <img src={github} alt="github" width="50" />
            </a>
          </li>
          <li className="header__li">
            <a href="/projects" className="header__link">
              <img src={link} alt="linkedin" width="50"   />
            </a>
          </li>
          <li className="header__li">
            <a href="/blogs" className="header__link">
              <img src={twitter} alt="twitter" width="50" />
            </a>
          </li>
        </ul>
      </header>
  )
}

export default index
